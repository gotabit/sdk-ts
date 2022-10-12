# SDK

JS and TS libs for Gotabit

## Example

### Connect wallet

Connect Keplr wallet

```ts
import { KeplrWallet } from '@gotabit/wallet-keplr'

const wallet = await KeplrWallet.init('test')

const accounts = await wallet.getAccounts()
```

Connect walletconnect

```ts
import { Walletconnect } from '@gotabit/wallet-walletconnect'

const wallet = await Walletconnect.init('test', {
  logger: 'debug',
  relayUrl: 'wss://relay.gotabit.dev',
  projectId: '2c921904d8ebc91517cd11c1cc4a267f',
  metadata: {
    name: 'Gotabit SDK WalletConnect test',
    description: 'Gotabit SDK WalletConnect test',
    url: 'https://sdk.gotabit.dev',
    icons: [`https:\/\/res.gotabit.io\/svg\/icon.svg`],
  },
})

const accounts = await wallet.getAccounts()
```

Connect local wallet

```ts
import { LocalWallet } from '@gotabit/wallet-local'

// with mnemonic
const wallet = await LocalWallet.init({
  mnemonic: 'your mnemonic',
})

// with privateKey
const wallet = await LocalWallet.init({
  privateKey: 'your privateKey',
})

// with password
const wallet = await LocalWallet.init({
  password: 'your password',
  serialization: 'your encrypted serialization',
})
```

Connect wallet with React

```tsx
import { GotabitProvider, useGotabitReact } from '@gotabit/react'
import { initializeConnectorWrapper } from '@gotabit/react'
import { KeplrWallet } from '@gotabit/wallet-keplr'
import { Walletconnect } from '@gotabit/wallet-walletconnect'

export const [walletconnectConnector, walletconnectHooks] =
  initializeConnectorWrapper(() =>
    Walletconnect.init('test', {
      logger: 'debug',
      relayUrl: 'wss://relay.gotabit.dev',
      projectId: '2c921904d8ebc91517cd11c1cc4a267f',
      metadata: {
        name: 'Gotabit SDK WalletConnect test',
        description: 'Gotabit SDK WalletConnect test',
        url: 'https://sdk.gotabit.dev',
        icons: [`https:\/\/res.gotabit.io\/svg\/icon.svg`],
      },
    }),
  )

export const [keplrConnector, keplrHooks] = initializeConnectorWrapper(() =>
  KeplrWallet.init('test'),
)

const { useAccount: useKeplrAccount, useActive: useKeplrActive } = keplrHooks

const {
  useAccount: useWalletconnectAccount,
  useActive: useWalletconnectActive,
} = walletconnectHooks

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

function KeplrCard() {
  const active = useKeplrActive()
  const account = useKeplrAccount()
  const wallet = useKeplrWallet()

  const handleSwitch = (chain: 'main' | 'test') => {
    wallet?.switchChain(chain)
  }

  return (
    <Card>
      <button onClick={keplrConnector}>connect keplr</button>
      <p>active: {active ? 'true' : 'false'}</p>
      <p>account: {account}</p>
      <button onClick={() => handleSwitch('test')}>
        Switch Keplr wallet to test
      </button>
      <button onClick={() => handleSwitch('main')}>
        Switch Keplr wallet to main
      </button>
    </Card>
  )
}

function WalletConnectCard() {
  const active = useWalletconnectActive()
  const account = useWalletconnectAccount()

  return (
    <Card>
      <button>connect walletconnect</button>
      <p>active: {active ? 'true' : 'false'}</p>
      <p>account: {account}</p>
    </Card>
  )
}

function SelectedState() {
  const { active, accounts } = useGotabitReact()

  return (
    <Card>
      <button onClick={walletconnectConnector}>Current state</button>
      <p>active: {active ? 'true' : 'false'}</p>
      <p>account: {accounts?.[0]}</p>
    </Card>
  )
}

function App() {
  return (
    <GotabitProvider>
      <SelectedState />
      <KeplrCard />
      <WalletConnectCard />
    </GotabitProvider>
  )
}
```

### Create transaction Messages

Create a MsgSend message

```ts
import { createMsgSend } from '@gotabit/messages'

const account = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8'
const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'

const msgSend = createMsgSend(account, toAddress, '3000000', 'ugtb')
```

Create a MsgGrant message

```ts
import { createMsgGrantBasicAllowance, createMsgSend } from '@gotabit/messages'

const account = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8'
const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'

const msgGrant = createMsgGrantBasicAllowance(account, toAddress, [
  {
    amount: '3000000',
    denom: 'ugtb',
  },
])
```

### Sign with client and broadcast

After creating the transaction message we need to send the payload to wallet so it can be signed. With the signature we can broadcast the transaction.

```ts
import { GotabitClient } from '@gotabit/client'
import { KeplrWallet } from '@gotabit/wallet-keplr'

const wallet = await KeplrWallet.init('test')

const gotabit = await GotabitClient.init(wallet, 'test')
const accounts = await gotabit.wallet.getAccounts()

const account = accounts[0].address

const client = await gotabit.signStargateClient()

const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'
const msgSendtoken = createMsgSend(account, toAddress, '3000000', 'ugtb')

const result = await client.signAndBroadcast(account, [msgSendtoken], 'auto')
```
