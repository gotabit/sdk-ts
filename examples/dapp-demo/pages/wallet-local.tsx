import { LocalWallet } from '@gotabit/wallet-local'
import { getChainConfig, DEV_CONFIG } from '@gotabit/wallet-core'
import { GotabitClient } from '@gotabit/client'
import { useCallback, useEffect, useState, ChangeEvent } from 'react'
import { createMsgSend } from '@gotabit/messages'

export default function LocalWalletPage() {
  const [toAddress, setToAddress] = useState<string>('')
  const [account, setAccount] = useState<string>('')
  const [client, setClient] = useState<GotabitClient>()
  const [responseData, setResponseData] = useState<any>()
  const [transactionHash, setTransactionHash] = useState<string>()

  const initWallet = useCallback(async () => {
    const wallet = await LocalWallet.init({
      mnemonic: process.env.TEST_MNEMONIC ?? '',
    })
    wallet.getAddress().then(setAccount)

    const client = await GotabitClient.init(wallet, getChainConfig(DEV_CONFIG))

    setClient(client)
  }, [])

  const sendGtb = async () => {
    if (!client) return
    const signClient = await client.signStargateClient()
    const msgSendToken = createMsgSend(account, toAddress, '3', 'ugtb')
    const result = await signClient?.signAndBroadcast(
      account,
      [msgSendToken],
      'auto',
    )

    setResponseData(result)
    setTransactionHash(result.transactionHash)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToAddress(event.target.value)
  }
  useEffect(() => {
    initWallet()
  }, [initWallet])
  return (
    <div>
      account: {account}
      <div>
        <label>To Address</label>
        <input type="text" onChange={handleChange} />
      </div>
      <button onClick={sendGtb}>send gtb</button>
      <div>
        <a
          href={`https://explorer.hjcore.io/GotaBit-dev/tx/${transactionHash}`}
          target="_blank"
          rel="noreferrer"
        >
          See your transation in explorer
        </a>
      </div>
      <p>result: {JSON.stringify(responseData)}</p>
    </div>
  )
}
