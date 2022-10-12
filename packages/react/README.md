# React

React provider and hooks for Gotabit.

### Connect wallet with React

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
      <button onClick={walletconnectConnector}>connect walletconnect</button>
      <p>active: {active ? 'true' : 'false'}</p>
      <p>account: {account}</p>
    </Card>
  )
}

function SelectedState() {
  const { active, accounts } = useGotabitReact()

  return (
    <Card>
      <button>Current state</button>
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
