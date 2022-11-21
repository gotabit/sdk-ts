import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import { MsgTransfer } from 'cosmjs-types/ibc/applications/transfer/v1/tx'
import { Height } from 'cosmjs-types/ibc/core/client/v1/client'

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
  const token = Coin.fromPartial({
    denom,
    amount,
  })

  const timeoutHeight = Height.fromPartial({
    revisionNumber,
    revisionHeight,
  })

  const message = MsgTransfer.fromPartial({
    sourcePort,
    sourceChannel,
    token,
    sender,
    receiver,
    timeoutHeight,
    timeoutTimestamp: parseInt(timeoutTimestamp, 10),
  })

  return {
    value: message,
    typeUrl: '/cosmos.ibc.applications.transfer.v1.MsgTransfer',
  }
}
