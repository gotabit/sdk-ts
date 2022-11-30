import { WCAuthClient } from '@gotabit/auth-client'
import SettingsStore from '../store/SettingsStore'
import { createOrRestoreCosmosWallet } from '../utils/CosmosWalletUtil'
import { createAuthClient } from '../utils/WalletConnectUtil'
import { useCallback, useEffect, useState } from 'react'

export default function useInitialization() {
  const [client, setAuthClient] = useState<WCAuthClient>()

  const onInitialize = useCallback(async () => {
    try {
      const { cosmosAddresses } = await createOrRestoreCosmosWallet()

      SettingsStore.setCosmosAddress(cosmosAddresses[0])

      const client = await createAuthClient(cosmosAddresses[0])

      setAuthClient(client)
    } catch (err: unknown) {
      alert(err)
    }
  }, [])

  useEffect(() => {
    if (!client) {
      onInitialize()
    }
  }, [client, onInitialize])

  return client
}
