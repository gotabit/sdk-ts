import { ChangeEvent, useState, useEffect } from 'react'

import { createMsgGrantBasicAllowance, createMsgSend } from '@gotabit/messages'
import { GotabitClient } from '@gotabit/client'
import { KeplrWallet } from '@gotabit/wallet-keplr'

function CreateMsgSend() {
  const [toAddress, setToAddress] = useState<string>('')
  const [responseData, setResponseData] = useState<any>()
  const [gotabit, setGotabitInstance] = useState<GotabitClient>()
  const [transactionHash, setTransactionHash] = useState<string>()

  useEffect(() => {
    KeplrWallet.init('test').then((wallet) => {
      GotabitClient.init(wallet, 'test').then(setGotabitInstance)
    })
  }, [])

  const sendFeegrant = async () => {
    if (!gotabit) return
    const { chainId } = gotabit.config

    console.log(gotabit.config)
    const accounts = await gotabit.wallet?.getAccounts()
    const account = accounts?.[0].address

    if (!account) throw new Error('Failed to get accounts')
    const client = await gotabit.signStargateClient()
    const msg = createMsgGrantBasicAllowance(account, toAddress, [
      {
        amount: '3000000',
        denom: 'ugtb',
      },
    ])
    const result = await client.signAndBroadcast(account, [msg], 'auto')

    setResponseData(result)
    setTransactionHash(result.transactionHash)
    console.log('--------feegrant', result)
  }

  const sendTokenWithMsgSend = async () => {
    if (!gotabit) return
    const { chainId } = gotabit.config
    const accounts = await gotabit.wallet?.getAccounts()
    const account = accounts?.[0].address

    if (!account) throw new Error('Failed to get accounts')
    const client = await gotabit?.signStargateClient()

    const msgSendtoken = createMsgSend(account, toAddress, '3000000', 'ugtb')
    const result = await client.signAndBroadcast(
      account,
      [msgSendtoken],
      'auto',
    )

    setResponseData(result)
    setTransactionHash(result.transactionHash)

    console.log('--------feegrant', result)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToAddress(event.target.value)
  }

  return (
    <div className="text-center">
      <div>
        <label>To Address</label>
        <input type="text" onChange={handleChange} />
      </div>
      <button onClick={sendFeegrant}>test feegrant</button>
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

export default CreateMsgSend
