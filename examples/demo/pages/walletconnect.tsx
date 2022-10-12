import { useState } from 'react'
import { Walletconnect } from '@gotabit/wallet-walletconnect'

function WalletconnectPage() {
  const [account, setAccount] = useState<string>()
  const handleConnect = async () => {
    const wallet = await Walletconnect.init(
      'test',
      {
        logger: 'debug',
        relayUrl: 'wss://relay.gotabit.dev',
        projectId: '2c921904d8ebc91517cd11c1cc4a267f',
        metadata: {
          name: 'Gotabit SDK WalletConnect test',
          description: 'Gotabit SDK WalletConnect test',
          url: 'https://sdk.gotabit.dev',
          icons: [`https:\/\/res.gotabit.io\/svg\/icon.svg`],
        },
      },
      {
        qrcodeModal: {
          options: {
            mobileLinks: [
              'keplrwallet://wcV1?wc:cb4a1255-a708-48c7-a06c-688766254084@1?bridge=https%3A%2F%2Fw.bridge.walletconnect.org&key=9d7c47713246c56e1862a92f73249230ecf13a37a4dcc7b8d84f434b6c4bf220',
              'wc:cb4a1255-a708-48c7-a06c-688766254084@1?bridge=https%3A%2F%2Fw.bridge.walletconnect.org&key=9d7c47713246c56e1862a92f73249230ecf13a37a4dcc7b8d84f434b6c4bf220',
            ],
          },
        },
      },
    )

    const accounts = await wallet.getAccounts()

    if (accounts?.[0]) setAccount(accounts?.[0].address)
  }

  return (
    <div>
      <button onClick={handleConnect}>connect</button>
      <p>Address: {account}</p>
    </div>
  )
}

export default WalletconnectPage
