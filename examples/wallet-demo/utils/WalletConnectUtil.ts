import SignClient from '@walletconnect/sign-client'

export let signClient: SignClient

export async function createSignClient() {
  signClient = await SignClient.init({
    logger: 'debug',
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
