import { ICosmosWallet } from '@gotabit/wallet-core'
import { GotabitClient } from '@gotabit/client'

import { createGotabitStore, selectedGotabitStore } from './store'
import { getStateHooks } from './hooks'
import { DEFAULT_CONTEXT } from './context'

export function initializeConnectorWrapper<T extends ICosmosWallet>(
  f: () => Promise<T>,
) {
  const { gotabitStore, useGotabitStore } = createGotabitStore()

  let handleKeplrAccountChange: () => void

  return [
    async () => {
      try {
        const initialState = { activating: true }

        gotabitStore.setState(initialState)
        selectedGotabitStore.setState(initialState)

        const wallet = await f()
        const accounts: Array<{ address: string }> =
          wallet.type === 'walletconnect'
            ? (wallet as any).getAddresses()
            : await wallet.getAccounts()
        const { chainConfig } = wallet
        const client = await GotabitClient.init(wallet, chainConfig)

        const mapAccounts = (accountData: typeof accounts) =>
          accountData.map((_) => _.address)

        const state = {
          activating: false,
          active: true,
          wallet,
          accounts: mapAccounts(accounts),
          chainConfig,
          client,
          disconnect: () => {
            if (wallet.type === 'walletconnect') {
              ;(wallet as any).disconnect()
            }
            gotabitStore.setState(DEFAULT_CONTEXT)
            selectedGotabitStore.setState(DEFAULT_CONTEXT)
          },
        }
        gotabitStore.setState(state)
        selectedGotabitStore.setState(state)

        handleKeplrAccountChange = async () => {
          const accounts = await wallet.getAccounts()
          gotabitStore.setState({
            accounts: mapAccounts(accounts as any),
          })
        }

        if (wallet.type === 'keplr') {
          window.removeEventListener(
            'keplr_keystorechange',
            handleKeplrAccountChange,
          )
          window.addEventListener(
            'keplr_keystorechange',
            handleKeplrAccountChange,
          )
        }

        if (wallet.type === 'walletconnect') {
          ;(wallet as any).client.on('session_delete', () => {
            gotabitStore.setState(DEFAULT_CONTEXT)
            selectedGotabitStore.setState(DEFAULT_CONTEXT)
          })
        }

        return state
      } catch (e) {
        const errorState = { error: e as Error }
        gotabitStore.setState(errorState)
        selectedGotabitStore.setState(errorState)

        throw e
      }
    },
    getStateHooks<T>(useGotabitStore, gotabitStore),
  ] as const
}
