import SignClient from '@walletconnect/sign-client'

export let signClient: SignClient

export async function createSignClient() {
  signClient = await SignClient.init({
    logger: 'debug',
    projectId: '2c921904d8ebc91517cd11c1cc4a267f',
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
