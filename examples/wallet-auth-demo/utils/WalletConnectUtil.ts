import { WCAuthClient } from '@gotabit/auth-client'

export let authClient: WCAuthClient
export let loading = false

export async function createAuthClient(address: string) {
  if (authClient || loading) return

  loading = true
  const client = await WCAuthClient.init({
    relayUrl: 'wss://relay.gotabit.dev',
    projectId: '2c921904d8ebc91517cd11c1cc4a267f',
    signerAddress: address,
    metadata: {
      name: 'GotaBit login',
      description: 'GotaBit login description',
      url: 'https://faucet.gotabit.dev/',
      icons: ['https://res.gotabit.io/svg/gotabit-coin.svg'],
    },
  })

  authClient = client
  loading = false

  return client
}
