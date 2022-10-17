import { encodeBase64 } from './utils'

export function createMsgSignData(message: string, address: string) {
  return {
    chain_id: '',
    account_number: '0',
    sequence: '0',
    fee: {
      gas: '0',
      amount: [],
    },
    msgs: [
      {
        type: 'sign/MsgSignData',
        value: {
          signer: address,
          data: encodeBase64(message),
        },
      },
    ],
    memo: '',
  }
}
