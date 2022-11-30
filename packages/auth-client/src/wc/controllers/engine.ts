import { RELAYER_EVENTS, RELAYER_DEFAULT_PROTOCOL } from '@walletconnect/core'
import {
  formatJsonRpcRequest,
  formatJsonRpcResult,
  formatJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  isJsonRpcError,
} from '@walletconnect/jsonrpc-utils'
import { FIVE_MINUTES } from '@walletconnect/time'
import { RelayerTypes } from '@walletconnect/types'
import {
  calcExpiry,
  generateRandomBytes32,
  getInternalError,
  hashKey,
  TYPE_1,
  formatUri,
} from '@walletconnect/utils'
import { createMsgSignData } from '@gotabit/messages/dist/cjs/msgSignData'
import { verifyAminoSignature } from '@gotabit/wallet-core'
import { JsonRpcTypes, IAuthEngine, AuthEngineTypes } from '../types'
import { AUTH_CLIENT_PUBLIC_KEY_NAME, ENGINE_RPC_OPTS } from '../constants'
import { getPendingRequest, getPendingRequests } from '../utils/store'
import { isValidRequest, isValidRespond } from '../utils/validators'
// import { verifySignature } from '../utils/signature'

export class AuthEngine extends IAuthEngine {
  private initialized = false

  public name = 'authEngine'

  constructor(client: IAuthEngine['client']) {
    super(client)
  }

  public init: IAuthEngine['init'] = () => {
    if (!this.initialized) {
      this.registerRelayerEvents()
      this.client.core.pairing.register({
        methods: Object.keys(ENGINE_RPC_OPTS),
      })
      this.initialized = true
    }
  }

  // ---------- Public ------------------------------------------------ //

  public request: IAuthEngine['request'] = async (params, opts) => {
    this.isInitialized()

    if (!isValidRequest(params)) {
      throw new Error('Invalid request')
    }

    const hasKnownPairing =
      Boolean(opts?.topic) &&
      this.client.core.pairing.pairings
        .getAll({ active: true })
        .some((pairing) => pairing.topic === opts?.topic)

    const relay = { protocol: RELAYER_DEFAULT_PROTOCOL }

    const expiry = calcExpiry(FIVE_MINUTES)

    const publicKey = await this.client.core.crypto.generateKeyPair()

    if (hasKnownPairing) {
      const knownPairing = this.client.core.pairing.pairings
        .getAll({ active: true })
        .find((pairing) => pairing.topic === opts?.topic)

      if (!knownPairing)
        throw new Error(
          `Could not find pairing for provided topic ${opts?.topic}`,
        )

      // Send request to existing pairing
      await this.sendRequest(knownPairing.topic, 'wc_authRequest', {
        payloadParams: params,
        requester: { publicKey, metadata: this.client.metadata },
      })

      this.client.logger.debug('sent request to existing pairing')
    }

    const symKey = generateRandomBytes32()

    const pairingTopic = await this.client.core.crypto.setSymKey(symKey)

    // Preparing pairing URI
    const pairing = { topic: pairingTopic, expiry, relay, active: false }
    await this.client.core.pairing.pairings.set(pairingTopic, pairing)

    this.client.logger.debug('Generated new pairing', pairing)

    this.setExpiry(pairingTopic, expiry)

    this.client.authKeys.set(AUTH_CLIENT_PUBLIC_KEY_NAME, { publicKey })

    const responseTopic = hashKey(publicKey)

    await this.client.pairingTopics.set(responseTopic, { pairingTopic })

    // Subscribe to the pairing topic (for pings)
    await this.client.core.relayer.subscribe(pairingTopic)
    // Subscribe to auth_response topic
    await this.client.core.relayer.subscribe(responseTopic)

    this.client.logger.debug('sending request to potential pairing')

    // SPEC: A encrypts reuqest with symKey S
    // SPEC: A publishes encrypted request to topic
    const id = await this.sendRequest(pairingTopic, 'wc_authRequest', {
      payloadParams: params,
      requester: { publicKey, metadata: this.client.metadata },
    })

    this.client.logger.debug('sent request to potential pairing')

    const uri = formatUri({
      protocol: this.client.protocol,
      version: this.client.core.version,
      topic: pairingTopic,
      symKey,
      relay,
    })

    return { uri, id }
  }

  public respond: IAuthEngine['respond'] = async (respondParams) => {
    this.isInitialized()

    if (!isValidRespond(respondParams, this.client.requests)) {
      throw new Error('Invalid response')
    }

    const pendingRequest = getPendingRequest(
      this.client.requests,
      respondParams.id,
    )

    const receiverPublicKey = pendingRequest.requester.publicKey
    const senderPublicKey = await this.client.core.crypto.generateKeyPair()
    const responseTopic = hashKey(receiverPublicKey)
    const encodeOpts = {
      type: TYPE_1,
      receiverPublicKey,
      senderPublicKey,
    }

    if ('error' in respondParams) {
      await this.sendError(
        pendingRequest.id,
        responseTopic,
        respondParams,
        encodeOpts,
      )
      return
    }

    const cacao: AuthEngineTypes.Cacao = {
      h: {
        t: 'cosmos',
      },
      p: pendingRequest.cacaoPayload,
      s: respondParams.signature,
    }

    const id = await this.sendResult<'wc_authRequest'>(
      pendingRequest.id,
      responseTopic,
      cacao,
      encodeOpts,
    )

    await this.client.requests.set(id, { id, ...cacao })
  }

  public getPendingRequests: IAuthEngine['getPendingRequests'] = () => {
    const pendingRequests = getPendingRequests(this.client.requests)
    return pendingRequests
  }

  // ---------- Private Helpers --------------------------------------- //

  protected setExpiry: IAuthEngine['setExpiry'] = async (topic, expiry) => {
    if (this.client.core.pairing.pairings.keys.includes(topic)) {
      await this.client.core.pairing.updateExpiry({ topic, expiry })
    }
    this.client.core.expirer.set(topic, expiry)
  }

  protected sendRequest: IAuthEngine['sendRequest'] = async (
    topic,
    method,
    params,
    encodeOpts,
  ) => {
    const payload = formatJsonRpcRequest(method, params)
    const message = await this.client.core.crypto.encode(
      topic,
      payload,
      encodeOpts,
    )
    const rpcOpts = ENGINE_RPC_OPTS[method].req
    this.client.core.history.set(topic, payload)
    await this.client.core.relayer.publish(topic, message, rpcOpts)

    return payload.id
  }

  protected sendResult: IAuthEngine['sendResult'] = async (
    id,
    topic,
    result,
    encodeOpts,
  ) => {
    const payload = formatJsonRpcResult(id, result)
    const message = await this.client.core.crypto.encode(
      topic,
      payload,
      encodeOpts,
    )
    // const record = await this.client.core.history.get(topic, id)
    const rpcOpts = ENGINE_RPC_OPTS.wc_authRequest.res

    await this.client.core.relayer.publish(topic, message, rpcOpts)
    await this.client.core.history.resolve(payload)

    return payload.id
  }

  protected sendError: IAuthEngine['sendError'] = async (
    id,
    topic,
    params,
    encodeOpts,
  ) => {
    const payload = formatJsonRpcError(id, params.error)
    const message = await this.client.core.crypto.encode(
      topic,
      payload,
      encodeOpts,
    )
    // const record = await this.client.core.history.get(topic, id)
    const rpcOpts = ENGINE_RPC_OPTS.wc_authRequest.res

    await this.client.core.relayer.publish(topic, message, rpcOpts)
    await this.client.core.history.resolve(payload)

    return payload.id
  }

  private isInitialized() {
    if (!this.initialized) {
      const { message } = getInternalError('NOT_INITIALIZED', this.name)
      throw new Error(message)
    }
  }

  // ---------- Relay Events Router ----------------------------------- //

  private registerRelayerEvents() {
    this.client.core.relayer.on(
      RELAYER_EVENTS.message,
      async (event: RelayerTypes.MessageEvent) => {
        const { topic, message } = event

        const receiverPublicKey = this.client.authKeys.keys.includes(
          AUTH_CLIENT_PUBLIC_KEY_NAME,
        )
          ? this.client.authKeys.get(AUTH_CLIENT_PUBLIC_KEY_NAME).publicKey
          : ''

        const opts = receiverPublicKey
          ? {
              receiverPublicKey,
            }
          : {}

        const payload = await this.client.core.crypto.decode(
          topic,
          message,
          opts,
        )
        if (isJsonRpcRequest(payload)) {
          this.client.core.history.set(topic, payload)
          this.onRelayEventRequest({ topic, payload })
        } else if (isJsonRpcResponse(payload)) {
          await this.client.core.history.resolve(payload)
          this.onRelayEventResponse({ topic, payload })
        }
      },
    )
  }

  protected onRelayEventRequest: IAuthEngine['onRelayEventRequest'] = (
    event,
  ) => {
    const { topic, payload } = event
    const reqMethod = payload.method as JsonRpcTypes.WcMethod

    switch (reqMethod) {
      case 'wc_authRequest':
        return this.onAuthRequest(topic, payload)
      default:
        return this.client.logger.info(
          `Unsupported request method ${reqMethod}`,
        )
    }
  }

  protected onRelayEventResponse: IAuthEngine['onRelayEventResponse'] = async (
    event,
  ) => {
    const { topic, payload } = event
    const record = await this.client.core.history.get(topic, payload.id)
    const resMethod = record.request.method as JsonRpcTypes.WcMethod

    switch (resMethod) {
      case 'wc_authRequest':
        return this.onAuthResponse(topic, payload)
      default:
        return this.client.logger.info(
          `Unsupported response method ${resMethod}`,
        )
    }
  }

  // ---------- Relay Event Handlers --------------------------------- //

  protected onAuthRequest: IAuthEngine['onAuthRequest'] = async (
    topic,
    payload,
  ) => {
    const {
      requester,
      payloadParams: { aud, domain, messageData },
    } = payload.params

    this.client.logger.debug('onAuthRequest:', topic, payload)

    try {
      const cacaoPayload: AuthEngineTypes.CacaoPayload = {
        signerAddress: this.client.address || '',
        aud,
        domain,
        messageData,
      }

      await this.client.requests.set(payload.id, {
        requester,
        id: payload.id,
        message: messageData,
        cacaoPayload,
      })

      this.client.emit('auth_request', {
        id: payload.id,
        topic,
        params: {
          requester,
          message: messageData,
        },
      })
    } catch (err: any) {
      await this.sendError(payload.id, topic, err)
      this.client.logger.error(err)
    }
  }

  protected onAuthResponse: IAuthEngine['onAuthResponse'] = async (
    topic,
    response,
  ) => {
    const { id } = response

    this.client.logger.debug('onAuthResponse', topic, response)

    if (isJsonRpcResult(response)) {
      const { pairingTopic } = this.client.pairingTopics.get(topic)
      await this.client.core.pairing.activate({ topic: pairingTopic })

      const { s: signature, p: payload } = response.result
      await this.client.requests.set(id, { id, ...response.result })
      this.client.logger.debug('payload.signerAddress:', payload.signerAddress)
      this.client.logger.debug('signature:', signature)

      const { signerAddress } = payload

      if (!signerAddress) {
        throw new Error('Could not derive address from `payload.signerAddress`')
      }
      this.client.logger.debug(
        'walletAddress extracted from `payload.signerAddress`:',
        signerAddress,
      )

      const message = createMsgSignData(payload.messageData, signerAddress)

      const isValid = await verifyAminoSignature(
        signerAddress,
        signature.s,
        message,
      )

      if (!isValid) {
        this.client.emit('auth_response', {
          id,
          topic,
          params: { message: 'Invalid signature', code: -1 },
        })
      } else {
        this.client.emit('auth_response', { id, topic, params: response })
      }
    } else if (isJsonRpcError(response)) {
      this.client.emit('auth_response', { id, topic, params: response })
    }
  }
}
