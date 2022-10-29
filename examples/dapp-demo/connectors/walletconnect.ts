import { initializeConnectorWrapper } from '@gotabit/react'

import { Walletconnect } from '@gotabit/wallet-walletconnect'

export const [walletconnectConnector, walletconnectHooks] =
  initializeConnectorWrapper(() =>
    Walletconnect.init('test', {
      logger: 'debug',
      relayUrl: 'wss://relay.gotabit.dev',
      projectId: '2c921904d8ebc91517cd11c1cc4a267f',
      metadata: {
        name: 'Gotabit SDK WalletConnect test',
        description: 'Gotabit SDK WalletConnect test',
        url: 'https://sdk.gotabit.dev',
        icons: [`https:\/\/res.gotabit.io\/svg\/icon.svg`],
      },
    }),
  )
