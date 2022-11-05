import { useState, ChangeEvent } from 'react'
import { GotabitWallet } from '@gotabit/wallet-gotabit'
import { createMsgSend } from '@gotabit/messages'
import { GotabitClient } from '@gotabit/client'

function WalletconnectPage() {
  const [account, setAccount] = useState<string>()

  const [toAddress, setToAddress] = useState<string>('')
  const [responseData, setResponseData] = useState<any>()
  const [gotabit, setGotabitInstance] = useState<GotabitClient>()
  const [transactionHash, setTransactionHash] = useState<string>()

  const handleConnect = async () => {
    const wallet = await GotabitWallet.init('test')

    GotabitClient.init(wallet, 'test').then(setGotabitInstance)

    const accounts = await wallet.getAccounts()

    console.log('---accounts', accounts);

    if (accounts?.[0]) setAccount(accounts?.[0].address)
  }

  const sendTokenWithMsgSend = async () => {
    if (!gotabit) return
    const { chainId } = gotabit.config
    const accounts = await gotabit.wallet?.getAccounts()
    const account = accounts?.[0].address

    if (!account) throw new Error('Failed to get accounts')
    const client = await gotabit?.signStargateClient()

    const msgSendtoken = createMsgSend(account, toAddress, '30', 'ugtb')
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
      <button onClick={handleConnect}>connect</button>
      <p>Address: {account}</p>
      <br />
      <div>
        <label>To Address</label>
        <input type="text" onChange={handleChange} />
      </div>
      <button onClick={sendTokenWithMsgSend}>test msgSend</button>
      <div>
        <a
          href={`https://explorer.hjcore.io/GotaBit-test/tx/${transactionHash}`}
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

export default WalletconnectPage
