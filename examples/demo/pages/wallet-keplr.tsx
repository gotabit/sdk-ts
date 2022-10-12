import { useState } from 'react'
import { KeplrWallet } from '@gotabit/wallet-keplr'

function WalletKeplr() {
  const [account, setAccount] = useState<string>()
  const handleConnect = async () => {
    const wallet = await KeplrWallet.init('test')

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

export default WalletKeplr
