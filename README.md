<div align="center">

<a href="https://github.com/gotabit/gotabitjs"><img alt="GotaBit" src="https://res.gotabit.io/svg/icon.svg" width="150"/></a>

## GotaBit SDK

### Javascript and TypeScript SDK for GotaBit Chain

[![npm version](https://img.shields.io/npm/v/@gotabit/sdk)](https://www.npmjs.com/package/@gotabit/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@gotabit/sdk)](https://www.npmjs.com/package/@gotabit/sdk)
[![GitHub license](https://img.shields.io/github/license/gotabit/sdk-ts)](https://github.com/gotabit/sdk-ts/blob/master/LICENSE)

</div>

## ⚡ Get started

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

const {
  useAccount: useKeplrAccount,
  useActive: useKeplrActive,
  useWallet: useKeplrWallet,
  useDisconnect: useKeplrDisconnect,
} = keplrHooks

const {
  useAccount: useWalletconnectAccount,
  useActive: useWalletconnectActive,
  useDisconnect: useWalletconnectDisconnect,
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
  const disconnect = useKeplrDisconnect()

  const handleSwitch = (chain: 'main' | 'test') => {
    wallet?.switchChain(chain)
  }

  return (
    <Card>
      <button onClick={keplrConnector}>connect keplr</button>
      <button onClick={disconnect}>disconnect</button>
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
  const disconnect = useWalletconnectDisconnect()

  return (
    <Card>
      <button onClick={walletconnectConnector}>connect walletconnect</button>
      <p>active: {active ? 'true' : 'false'}</p>
      <p>account: {account}</p>
      <button onClick={disconnect}>disconnect</button>
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

const msgSend = createMsgSend(account, toAddress, '3', 'ugtb')
```

Create a MsgGrant message

```ts
import { createMsgGrantBasicAllowance, createMsgSend } from '@gotabit/messages'

const account = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8'
const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'

const msgGrant = createMsgGrantBasicAllowance(account, toAddress, [
  {
    amount: '3',
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
const msgSendtoken = createMsgSend(account, toAddress, '3', 'ugtb')

const result = await client.signAndBroadcast(account, [msgSendtoken], 'auto')
```

## ⚡ Credits

Code built with the help of these related projects:

- [WalletConnect/cosmos-wallet](https://github.com/WalletConnect/cosmos-wallet) Cosmos Wallet with Direct and Amino signing.
- [@walletconnect/qrcode-modal](https://github.com/WalletConnect/walletconnect-monorepo/) QR Code Modal for WalletConnect
- [@walletconnect/sign-client](https://github.com/WalletConnect/walletconnect-monorepo/) Sign Client for WalletConnect Protocol
- [keplr-extension](https://github.com/chainapsis/kepler-extension) Keplr is a browser extension wallet for the Inter blockchain ecosystem.
- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [osmojs](https://github.com/osmosis-labs/osmojs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.
- [evmosjs](https://github.com/evmos/evmosjs) JS and TS libs for Evmos.
- [react](https://github.com/facebook/react) React is a JavaScript library for building user interfaces.
- [zustand](https://github.com/pmndrs/zustand) A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.
