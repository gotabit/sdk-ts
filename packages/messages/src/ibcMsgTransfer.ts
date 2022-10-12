import { cosmos, ibc } from '@gotabit/proto'
import { Long } from '@osmonauts/helpers'

const coin = cosmos.base.v1beta1.Coin
const ibcMsg = ibc.applications.transfer.v1
const ibcCore = ibc.core.client.v1

export function createIBCMsgTransfer(
  // Channel
  sourcePort: string,
  sourceChannel: string,
  // Token
  amount: string,
  denom: string,
  // Addresses
  sender: string,
  receiver: string,
  // Timeout
  revisionNumber: number,
  revisionHeight: number,
  timeoutTimestamp: string,
) {
  const token = coin.fromPartial({
    denom,
    amount,
  })

  const timeoutHeight = ibcCore.Height.fromPartial({
    revisionNumber,
    revisionHeight,
  })

  return ibcMsg.MessageComposer.fromPartial.transfer({
    sourcePort,
    sourceChannel,
    token,
    sender,
    receiver,
    timeoutHeight,
    timeoutTimestamp: new Long(parseInt(timeoutTimestamp, 10)),
  })
}
