import type { StoreApi, UseBoundStore } from 'zustand'
import { ICosmosWallet } from '@gotabit/wallet-core'

import { GotabitState } from './store'
import { DEFAULT_CONTEXT } from './context'

const ACCOUNTS_EQUALITY_CHECKER = (
  oldAccounts?: string[],
  newAccounts?: string[],
) =>
  (oldAccounts === undefined && newAccounts === undefined) ||
  (oldAccounts !== undefined &&
    oldAccounts.length === newAccounts?.length &&
    oldAccounts.every((oldAccount, i) => oldAccount === newAccounts[i]))

export function getStateHooks<T extends ICosmosWallet>(
  useGotabitStore: UseBoundStore<StoreApi<GotabitState>>,
  gotabitStore: StoreApi<GotabitState>,
) {
  function useChainConfig() {
    return useGotabitStore(({ chainConfig }) => chainConfig)
  }

  function useChainId() {
    return useGotabitStore(({ chainConfig }) => chainConfig)?.chainId
  }

  function useAccounts() {
    return useGotabitStore(
      ({ accounts }) => accounts,
      ACCOUNTS_EQUALITY_CHECKER,
    )
  }

  function useAccount() {
    const accounts = useAccounts()

    return accounts?.[0]
  }

  function useActivating() {
    return useGotabitStore(({ activating }) => activating)
  }

  function useActive() {
    return useGotabitStore(({ active }) => active)
  }

  function useWallet() {
    const wallet = useGotabitStore(({ wallet }) => wallet)

    return wallet ? (wallet as T) : undefined
  }

  function useGotabitClient() {
    return useGotabitStore(({ gotabitClient }) => gotabitClient)
  }

  function useError() {
    return useGotabitStore(({ error }) => error)
  }

  function useDisconnect() {
    const wallet = useGotabitStore(({ wallet }) => wallet)
    if (wallet?.type === 'walletconnect') {
      ;(wallet as any).disconnect()
    }
    gotabitStore.setState(DEFAULT_CONTEXT)
  }

  return {
    useChainConfig,
    useChainId,
    useAccounts,
    useAccount,
    useActivating,
    useActive,
    useWallet,
    useGotabitClient,
    useError,
    useDisconnect,
  }
}
