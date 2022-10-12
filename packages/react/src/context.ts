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
}

export const DEFAULT_CONTEXT: GotabitContextType = {
  active: false,
  activating: false,
}

export const GotabitContext = createContext<GotabitContextType>(DEFAULT_CONTEXT)
