import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx'

export function createMsgSend(
  fromAddress: string,
  toAddress: string,
  amount: string,
  denom: string,
) {
  const message = MsgSend.fromPartial({
    fromAddress,
    toAddress,
    amount: [
      {
        denom,
        amount,
      },
    ],
  })
  return {
    value: message,
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
  }
}
