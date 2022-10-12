import React, { ReactNode, useContext } from 'react'

import { useSelectedGotabitStore } from './store'
import { GotabitContext, GotabitContextType } from './context'

interface GotabitProviderProps {
  children: ReactNode
}

export function GotabitProvider({ children }: GotabitProviderProps) {
  const state = useSelectedGotabitStore()

  return (
    <GotabitContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </GotabitContext.Provider>
  )
}

export function useGotabitReact(): GotabitContextType {
  return useContext(GotabitContext)
}
