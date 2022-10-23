import {
  SigningStargateClient,
  SigningStargateClientOptions,
  StargateClientOptions,
} from '@cosmjs/stargate'
import { HttpEndpoint, Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing'
import {
  AminoMsg,
  isSecp256k1Pubkey,
  makeSignDoc as makeSignDocAmino,
  makeStdTx,
  rawSecp256k1PubkeyToRawAddress,
  serializeSignDoc,
  StdFee,
  StdTx,
} from '@cosmjs/amino'
import { Secp256k1, Secp256k1Signature, sha256 } from '@cosmjs/crypto'
import { fromBech32, fromBase64, toBase64, toAscii } from '@cosmjs/encoding'
import { arrayContentEquals, assert, isNonNullObject } from '@cosmjs/utils'
import equals from 'fast-deep-equal'

import { GotabitStargateClient } from './stargateclient'

/**
 * See ADR-036
 */
interface MsgSignData extends AminoMsg {
  readonly type: 'sign/MsgSignData'
  readonly value: {
    /** Bech32 account address */
    signer: string
    /** Base64 encoded data */
    data: string
  }
}

export function isMsgSignData(msg: AminoMsg): msg is MsgSignData {
  const castedMsg = msg as MsgSignData
  if (castedMsg.type !== 'sign/MsgSignData') return false
  if (!isNonNullObject(castedMsg.value)) return false
  if (typeof castedMsg.value.signer !== 'string') return false
  if (typeof castedMsg.value.data !== 'string') return false
  return true
}

export async function experimentalAdr36Verify(signed: StdTx): Promise<boolean> {
  // Restrictions from ADR-036
  if (signed.memo !== '') throw new Error('Memo must be empty.')
  if (signed.fee.gas !== '0') throw new Error('Fee gas must 0.')
  if (signed.fee.amount.length !== 0)
    throw new Error('Fee amount must be an empty array.')

  const accountNumber = 0
  const sequence = 0
  const chainId = ''

  // Check `msg` array
  const signedMessages = signed.msg
  if (!signedMessages.every(isMsgSignData)) {
    throw new Error(`Found message that is not the expected type.`)
  }
  if (signedMessages.length === 0) {
    throw new Error(
      'No message found. Without messages we cannot determine the signer address.',
    )
  }
  // TODO: restrict number of messages?

  const signatures = signed.signatures
  if (signatures.length !== 1)
    throw new Error('Must have exactly one signature to be supported.')
  const signature = signatures[0]
  if (!isSecp256k1Pubkey(signature.pub_key)) {
    throw new Error('Only secp256k1 signatures are supported.')
  }

  const signBytes = serializeSignDoc(
    makeSignDocAmino(
      signed.msg,
      signed.fee,
      chainId,
      signed.memo,
      accountNumber,
      sequence,
    ),
  )
  const prehashed = sha256(signBytes)

  const secpSignature = Secp256k1Signature.fromFixedLength(
    fromBase64(signature.signature),
  )
  const rawSecp256k1Pubkey = fromBase64(signature.pub_key.value)
  const rawSignerAddress = rawSecp256k1PubkeyToRawAddress(rawSecp256k1Pubkey)

  if (
    signedMessages.some(
      (msg) =>
        !arrayContentEquals(
          fromBech32(msg.value.signer).data,
          rawSignerAddress,
        ),
    )
  ) {
    throw new Error('Found mismatch between signer in message and public key')
  }

  const ok = await Secp256k1.verifySignature(
    secpSignature,
    prehashed,
    rawSecp256k1Pubkey,
  )
  return ok
}

export class GotabitSigningStargateClient extends SigningStargateClient {
  public static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {},
  ): Promise<GotabitStargateClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new GotabitStargateClient(tmClient, options)
  }

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<GotabitSigningStargateClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new GotabitSigningStargateClient(tmClient, signer, options)
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<GotabitSigningStargateClient> {
    return new GotabitSigningStargateClient(undefined, signer, options)
  }

  public async experimentalAdr36Sign(
    signerAddress: string,
    data: string[],
  ): Promise<StdTx> {
    const accountNumber = 0
    const sequence = 0
    const chainId = ''
    const fee: StdFee = {
      gas: '0',
      amount: [],
    }
    const memo = ''

    const datas = Array.isArray(data) ? data : [data]

    const msgs: MsgSignData[] = datas.map(
      (d): MsgSignData => ({
        type: 'sign/MsgSignData',
        value: {
          signer: signerAddress,
          data: toBase64(toAscii(d)),
        },
      }),
    )

    assert((this as any).signer.signAmino)
    const accountFromSigner = (await (this as any).signer.getAccounts()).find(
      (account: AccountData) => account.address === signerAddress,
    )
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer')
    }
    const signDoc = makeSignDocAmino(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence,
    )
    const { signature, signed } = await (this as any).signer.signAmino(
      signerAddress,
      signDoc,
    )
    if (!equals(signDoc, signed)) {
      throw new Error(
        'The signed document differs from the signing instruction. This is not supported for ADR-036.',
      )
    }

    return makeStdTx(signDoc, signature)
  }
}
