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
    KeplrWallet.init('dev').then((wallet) => {
      GotabitClient.init(wallet, 'dev').then(setGotabitInstance)
    })
  }, [])

  const handleQuery = async () => {
    if (!gotabit) return

    const stargateClient = await gotabit.stargateClient()
    const queryClient = stargateClient.makeQueryClient()
    const validators = await queryClient.staking.validators(
      'BOND_STATUS_BONDED',
    )
    console.log(validators)
  }

  const sendFeegrant = async () => {
    if (!gotabit) return
    const { chainId } = gotabit.config

    console.log(gotabit.config)
    const accounts = await gotabit.wallet?.getAccounts()
    const account = accounts?.[0].address

    if (!account) throw new Error('Failed to get accounts')

    console.log('to address', toAddress)
    const client = await gotabit.signStargateClient()
    const msg = createMsgGrantBasicAllowance(account, toAddress, [
      {
        amount: '3',
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

    console.log('to address', toAddress, account)
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
    <div className="text-center">
      <div>
        <label>To Address</label>
        <input type="text" onChange={handleChange} />
      </div>
      <button onClick={sendFeegrant}>test feegrant</button>
      <button onClick={sendTokenWithMsgSend}>test msgSend</button>
      <button onClick={handleQuery}>query validators</button>
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
