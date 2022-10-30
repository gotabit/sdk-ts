import { useCallback, useEffect, useState } from 'react'
import SignClient from '@walletconnect/sign-client'
import SettingsStore from '../store/SettingsStore'
import { createOrRestoreCosmosWallet } from '../utils/CosmosWalletUtil'
import { createSignClient } from '../utils/WalletConnectUtil'

export function useSignClient() {
  const [signClient, setSignClient] = useState<SignClient>()

  const initial = useCallback(async () => {
    const { cosmosAddresses } = await createOrRestoreCosmosWallet()
    SettingsStore.setCosmosAddress(cosmosAddresses[0])
  }, [])
  useEffect(() => {
    if (signClient) return
    initial()
    createSignClient().then(setSignClient)
  }, [signClient])

  return signClient
}
