import { LocalWallet } from '@gotabit/wallet-local'
import { useCallback, useEffect, useState } from 'react'

export default function LocalWalletPage() {
  const [account, setAccount] = useState<string>()
  const initWallet = useCallback(async () => {
    const wallet = await LocalWallet.init({
      mnemonic:
        'dinner proud piano mention silk plunge forest fold trial duck electric define',
    })
    wallet.getAddress().then(setAccount)
  }, [])
  useEffect(() => {
    initWallet()
  }, [initWallet])
  return <div>{account}</div>
}
