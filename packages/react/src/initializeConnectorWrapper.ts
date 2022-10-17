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
        gotabitStore.setState({ activating: true })
        const wallet = await f()
        const accounts = await wallet.getAccounts()
        const chainConfig = wallet.chainConfig
        const client = await GotabitClient.init(wallet, chainConfig.chainType)

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
              ;(wallet as any).client.disconnect()
            }
            gotabitStore.setState(DEFAULT_CONTEXT)
          },
        }
        gotabitStore.setState(state)
        selectedGotabitStore.setState(state)

        handleKeplrAccountChange = async () => {
          const accounts = await wallet.getAccounts()
          gotabitStore.setState({
            accounts: mapAccounts(accounts),
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

        return state
      } catch (e) {
        gotabitStore.setState({ error: e as Error })

        throw e
      }
    },
    getStateHooks<T>(useGotabitStore, gotabitStore),
  ] as const
}
