import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils'
import { LocalWallet } from '@gotabit/wallet-local'
import { toBase64 } from '@cosmjs/encoding'
import { SignClient } from '@walletconnect/sign-client'

import {
  parseSignDocValues,
  verifyAminoSignature,
  verifyDirectSignature,
} from '@gotabit/wallet-core'
export const wallet = await createCosmosWallet()

export const signClient = await createSignClient()

const cosmosAccounts = []

await Promise.all(
  Object.values(wallet.cosmosWallets).map(async (wallet) => {
    const [{ address, pubkey }] = await wallet.getAccounts()

    cosmosAccounts.push({
      address,
      pubkey: toBase64(pubkey),
    })
  }),
)

async function createSignClient() {
  const signClient = await SignClient.init({
    logger: 'error',
    relayUrl: 'wss://relay.gotabit.dev',
    metadata: {
      name: 'Gotabit WalletConnect test',
      description: 'Gotabit WalletConnect test',
      url: 'https://sdk.gotabit.dev',
      icons: ['https://res.gotabit.io/svg/gotabit-coin.svg'],
    },
  })

  return signClient
}

export async function createCosmosWallet() {
  const wallet1 = await LocalWallet.init({
    mnemonic:
      'virus rotate empty amused cherry shallow spell cruise lady lottery endorse tribe',
  })
  const wallet2 = await LocalWallet.init({
    mnemonic:
      'eagle escape crew record shield today minor choice funny void movie top',
  })

  const address1 = await wallet1.getAddress()
  const address2 = await wallet2.getAddress()

  const cosmosWallets = {
    [address1]: wallet1,
    [address2]: wallet2,
  }
  const cosmosAddresses = Object.keys(cosmosWallets)

  return {
    cosmosWallets,
    cosmosAddresses,
  }
}

export const getAccounts = async (wc_params) => {
  const { requestEvent, requestSession } = wc_params
  const { topic, params, id } = requestEvent

  const { chainId, request } = params
  const accounts = selectedAccounts.cosmos
  const response = formatJsonRpcResult(id, accounts)

  await signClient.respond({
    topic,
    response,
  })
}

export const signDirect = async (wc_params) => {
  const { requestEvent, requestSession } = wc_params
  const { topic, params, id } = requestEvent

  const { chainId, request } = params

  const signWallet = wallet.cosmosWallets[request.params.signerAddress]

  console.log(JSON.stringify(request.params.signDoc))

  const signedDirect = await signWallet.signDirect(
    request.params.signerAddress,
    parseSignDocValues(request.params.signDoc),
  )
  const response = formatJsonRpcResult(id, signedDirect.signature)

  console.log(signedDirect.signature);

  console.log(verifyDirectSignature(request.params.signerAddress, signedDirect.signature.signature, parseSignDocValues(request.params.signDoc)))
  await signClient.respond({
    topic,
    response,
  })
}

export const signAmino = async (wc_params) => {
  const { requestEvent, requestSession } = wc_params
  const { topic, params, id } = requestEvent

  const { chainId, request } = params
  const accounts = selectedAccounts.cosmos
  const response = formatJsonRpcResult(id, accounts)

}

export const selectedAccounts = {
  cosmos: cosmosAccounts,
}
