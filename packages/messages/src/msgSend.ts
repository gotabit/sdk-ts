import { cosmos } from '@gotabit/proto'

export function createMsgSend(
  fromAddress: string,
  toAddress: string,
  amount: string,
  denom: string,
) {
  return cosmos.bank.v1beta1.MessageComposer.fromPartial.send({
    fromAddress,
    toAddress,
    amount: [
      {
        denom,
        amount,
      },
    ],
  })
}
