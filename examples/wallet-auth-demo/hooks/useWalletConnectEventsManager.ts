import { WCAuthClient } from '@gotabit/auth-client'
import ModalStore from '../store/ModalStore'

import { useCallback, useEffect } from 'react'

export default function useWalletConnectEventsManager(
  authClient?: WCAuthClient,
) {
  /******************************************************************************
   * Set up WalletConnect event listeners
   *****************************************************************************/
  useEffect(() => {
    if (authClient) {
      authClient.on('auth_request', ({ id, params }) => {
        ModalStore.open('AuthenticationRequest', {
          authenticationRequest: {
            id,
            params,
          },
        })
      })
    }
  }, [authClient])
}
