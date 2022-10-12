import { GotabitProvider, useGotabitReact } from '@gotabit/react'
import React, { useState } from 'react'
import { keplrConnector, keplrHooks } from '../connectors/keplr'
import {
  walletconnectConnector,
  walletconnectHooks,
} from '../connectors/walletconnect'

const {
  useAccount: useKeplrAccount,
  useActive: useKeplrActive,
  useWallet: useKeplrWallet,
} = keplrHooks

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

function TestReactPackage() {
  return (
    <GotabitProvider>
      <SelectedState />
      <KeplrCard />
      <WalletConnectCard />
    </GotabitProvider>
  )
}

export default TestReactPackage
