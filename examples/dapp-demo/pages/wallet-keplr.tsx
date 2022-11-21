import { useState, useEffect, ChangeEvent } from 'react'
import { KeplrWallet } from '@gotabit/wallet-keplr'
import { GotabitClient } from '@gotabit/client'
import { createMsgSend } from '@gotabit/messages'

function WalletKeplr() {
  const [toAddress, setToAddress] = useState<string>('')
  const [responseData, setResponseData] = useState<any>()
  const [gotabit, setGotabitInstance] = useState<GotabitClient>()
  const [transactionHash, setTransactionHash] = useState<string>()
  const [account, setAccount] = useState<string>()

  useEffect(() => {
    KeplrWallet.init('dev').then((wallet) => {
      GotabitClient.init(wallet, 'dev').then(setGotabitInstance)
    })
  }, [])
  const handleConnect = async () => {
    const wallet = await KeplrWallet.init('dev')

    const accounts = await wallet.getAccounts()

    if (accounts?.[0]) setAccount(accounts?.[0].address)
  }

  const sendTokenWithMsgSend = async () => {
    if (!gotabit) return
    const { chainId } = gotabit.config
    const accounts = await gotabit.wallet?.getAccounts()
    const account = accounts?.[0].address

    if (!account) throw new Error('Failed to get accounts')
    const client = await gotabit?.signStargateClient()

    const msgSendtoken = createMsgSend(account, toAddress, '3', 'ugtb')
    const result = await client.signAndBroadcast(
      account,
      [msgSendtoken],
      'auto',
    )

    setResponseData(result)
    setTransactionHash(result.transactionHash)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToAddress(event.target.value)
  }

  return (
    <div>
      <p>
        <label>To Address</label>
        <input type="text" onChange={handleChange} />
      </p>
      <br />
      <button onClick={handleConnect}>connect</button>
      <p>Address: {account}</p>
      <button onClick={sendTokenWithMsgSend}>test msgSend</button>
      <br />
      <p>
        <a
          href={`https://explorer.hjcore.io/GotaBit-test/tx/${transactionHash}`}
          target="_blank"
          rel="noreferrer"
        >
          See your transation in explorer
        </a>
      </p>
      <p>result: {JSON.stringify(responseData)}</p>
    </div>
  )
}

export default WalletKeplr
