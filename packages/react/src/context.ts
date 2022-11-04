import { createContext } from 'react'

import { ICosmosWallet } from '@gotabit/wallet-core'
import { GotabitClient } from '@gotabit/client'

export interface GotabitContextType {
  client?: GotabitClient
  active: boolean
  activating: boolean
  accounts?: string[]
  wallet?: ICosmosWallet
  error?: Error
  disconnect: () => void
}

export const DEFAULT_CONTEXT: GotabitContextType = {
  client: undefined,
  accounts: undefined,
  wallet: undefined,
  error: undefined,
  active: false,
  activating: false,
  disconnect: () => void 0,
}

export const GotabitContext = createContext<GotabitContextType>(DEFAULT_CONTEXT)
