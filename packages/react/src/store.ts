import { ICosmosWallet, ChainConfig } from '@gotabit/wallet-core'
import create, { createStore, UseBoundStore, StoreApi } from 'zustand'
import { GotabitClient } from '@gotabit/client'

export interface DisconnectParams {
  topic: string
  reason: {
    code: number
    message: string
    data?: string
  }
}

export interface GotabitState {
  gotabitClient?: GotabitClient
  chainConfig?: ChainConfig
  active: boolean
  activating: boolean
  accounts?: string[]
  wallet?: ICosmosWallet
  error?: Error
  disconnect: (params: DisconnectParams) => void
}

const DEFAULT_GOTABIT_STATE: GotabitState = {
  active: false,
  activating: false,
  disconnect: () => void 0,
}

const useDefaultStore = (f?: (state: GotabitState) => any) =>
  f ? f?.(DEFAULT_GOTABIT_STATE) : DEFAULT_GOTABIT_STATE

export function createGotabitStore() {
  const gotabitStore = createStore<GotabitState>(() => DEFAULT_GOTABIT_STATE)

  const useGotabitStore =
    typeof window === 'undefined'
      ? (useDefaultStore as UseBoundStore<StoreApi<GotabitState>>)
      : create(gotabitStore)

  return { gotabitStore, useGotabitStore }
}

export const selectedGotabitStore = createStore<GotabitState>(
  () => DEFAULT_GOTABIT_STATE,
)

export const useSelectedGotabitStore =
  typeof window === 'undefined'
    ? (useDefaultStore as UseBoundStore<StoreApi<GotabitState>>)
    : create(selectedGotabitStore)
