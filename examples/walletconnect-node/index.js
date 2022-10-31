import { COSMOS_METHODS } from '@gotabit/wallet-walletconnect'
import {
  getAccounts,
  signDirect,
  signAmino,
  selectedAccounts,
  signClient,
} from './cosmos.js'

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
          address: acc.address,
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
    method: request.method,
  })

  switch (request.method) {
    case COSMOS_METHODS.COSMOS_GET_ACCOUNTS:
      return await getAccounts({ requestEvent, requestSession })

    case COSMOS_METHODS.COSMOS_SIGN_DIRECT:
      return await signDirect({ requestEvent, requestSession })

    case COSMOS_METHODS.COSMOS_SIGN_AMINO:
      return await signAmino({ requestEvent, requestSession })

    default:
      console.log('----onSessionRequest', {
        requestEvent,
        requestSession,
        method: request.method,
      })
  }
}

const uri =
'wc:ced50b7e2661f01d201e889cb5abc8faf1ae1228c5171e69459afa7e8f3f8204@2?relay-protocol=irn&symKey=f72a923b41528b6f006c0517f898c3e651a467630fcd25c20be0ea4a15b45518&relay-url=wss://relay.gotabit.dev'

const pair = await signClient.pair({ uri })

signClient.on('session_proposal', onSessionProposal)
signClient.on('session_request', onSessionRequest)
// TODOs
signClient.on('session_ping', (data) => console.log('ping', data))
signClient.on('session_event', (data) => console.log('event', data))
signClient.on('session_update', (data) => console.log('update', data))
signClient.on('session_delete', (data) => console.log('delete', data))
