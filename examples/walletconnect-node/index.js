import { SignClient } from '@walletconnect/sign-client'
import { LocalWallet } from '@gotabit/wallet-local'
import { toBase64 } from '@cosmjs/encoding'
import { COSMOS_METHODS } from '@gotabit/wallet-walletconnect'
import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils'

let signClient
const wallet1 = await LocalWallet.init({ walletGenerateLength: 12 })
const wallet2 = await LocalWallet.init({ walletGenerateLength: 12 })

const [account1] = await wallet1.getAccounts()
const [account2] = await wallet2.getAccounts()

const selectedAccounts = {
  cosmos: [
    { address: account1.address, pubkey: toBase64(account1.pubkey) },
    { address: account2.address, pubkey: toBase64(account2.pubkey) },
  ],
}

async function createSignClient() {
  signClient = await SignClient.init({
    logger: 'error',
    relayUrl: 'wss://relay.gotabit.dev',
    metadata: {
      name: 'Gotabit WalletConnect test',
      description: 'Gotabit WalletConnect test',
      url: 'https://sdk.gotabit.dev',
      icons: ['https://res.gotabit.io/svg/gotabit-coin.svg'],
    },
  })
}
const get_accounts = async (wc_params) => {
  const { requestEvent, requestSession } = wc_params
  const { topic, params, id } = requestEvent

  const { chainId, request } = params
  const accounts = selectedAccounts.cosmos
  const response = formatJsonRpcResult(id, accounts)

  console.log(chainId, request)
  await signClient.respond({
    topic,
    response,
  })
}

const onSessionProposal = async (proposal) => {
  const { id, params } = proposal
  const { proposer, requiredNamespaces, relays } = params
  const namespaces = {}

  Object.keys(requiredNamespaces).forEach((key) => {
    const accounts = []
    const accountData = []
    requiredNamespaces[key].chains.map((chain) => {
      selectedAccounts[key].map((acc) => {
        accounts.push(`${chain}:${acc.address}`)
        accountData.push({
          address: `${chain}:${acc.address}`,
          pubkey: acc.pubkey,
        })
      })
    })
    namespaces[key] = {
      accounts,
      accountData,
      methods: requiredNamespaces[key].methods,
      events: requiredNamespaces[key].events,
    }
  })

  const { acknowledged } = await signClient.approve({
    id,
    relayProtocol: relays[0].protocol,
    namespaces,
  })

  console.log(acknowledged)

  console.log('----SessionProposalModal', {
    proposal: id,
    metadata: proposer.metadata,
  })
}

const onSessionRequest = async (requestEvent) => {
  const { topic, params } = requestEvent
  const { request } = params
  const requestSession = signClient.session.get(topic)

  console.log('----onSessionRequest', {
    requestEvent,
    requestSession,
    method: request.method,
  })

  switch (request.method) {
    case COSMOS_METHODS.COSMOS_GET_ACCOUNTS:
      return await get_accounts({ requestEvent, requestSession })

    default:
      console.log('----onSessionRequest', {
        requestEvent,
        requestSession,
        method: request.method,
      })
  }
}

const uri =
'wc:2963a71a3987b3f8228562ea4cb681439f65925b1d8cf5624d9e7864dc90d45a@2?relay-protocol=irn&symKey=283cd308c3351a977a1fa9489883a9f03a9885d5e72627463896fc4880658cf8&relay-url=wss://relay.gotabit.dev'
await createSignClient()

const pair = await signClient.pair({ uri })

signClient.on('session_proposal', onSessionProposal)
signClient.on('session_request', onSessionRequest)
// TODOs
signClient.on('session_ping', (data) => console.log('ping', data))
signClient.on('session_event', (data) => console.log('event', data))
signClient.on('session_update', (data) => console.log('update', data))
signClient.on('session_delete', (data) => console.log('delete', data))
