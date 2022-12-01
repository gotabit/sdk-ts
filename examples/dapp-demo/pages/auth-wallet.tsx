import { WCAuthClient, KeplrAuthClient } from '@gotabit/auth-client'
import { useEffect, useState } from 'react'

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '16px',
        margin: '24px',
        border: '1px solid #000',
      }}
    >
      {children}
    </div>
  )
}

function AuthWalletPage() {
  const [client, setClient] = useState<WCAuthClient | null>()
  const [wcUri, setWcUri] = useState<string>()
  const [address, setAddress] = useState<string>('')
  const handleSignInWalletconnect = async () => {
    const client = await WCAuthClient.init({
      relayUrl: 'wss://relay.gotabit.dev',
      projectId: '2c921904d8ebc91517cd11c1cc4a267f',
      metadata: {
        name: 'GotaBit login',
        description: 'GotaBit login description',
        url: 'https://faucet.gotabit.dev/',
        icons: ['https://res.gotabit.io/svg/gotabit-coin.svg'],
      },
    })
    const result = await client.request({
      aud: 'http://localhost:3001/',
      domain: 'localhost:3001',
      messageData: JSON.stringify({
        msg: 'hello world',
      }),
      statement: 'Sign in with wallet.',
    })

    console.log(result, '=--------wc result')
    setClient(client)
    setWcUri(result.uri)
  }

  const handleSignKepr = async () => {
    const client = await KeplrAuthClient.init('dev')

    const accounts = await client.wallet.getAccounts()
    const result = await client.loginAndSign(
      accounts[0].address,
      JSON.stringify({
        msg: 'hello world',
      }),
    )

    console.log(result, '====keplr result')
  }

  useEffect(() => {
    if (!client) return
    console.log('===res======')
    client.on('auth_response', (res) => {
      console.log(res, '===res')
      // if (res.params.result.s) {
      //   setAddress(res.params.result.p.signerAddress)
      // }
    })
  }, [client])
  return (
    <div>
      <Card>
        <p>Sign in with walletconnect</p>
        <button onClick={handleSignInWalletconnect}>sign in</button>
        <p>
          uri: <code>{wcUri}</code>
        </p>
        <p>address: {address}</p>
      </Card>
      <Card>
        <p>Sign in with keplr</p>
        <button onClick={handleSignKepr}>sign in</button>
      </Card>
    </div>
  )
}

export default AuthWalletPage
