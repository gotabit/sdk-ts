import { MsgVote } from 'cosmjs-types/cosmos/gov/v1beta1/tx'

export function createMsgVote(
  proposalId: number,
  option: number,
  sender: string,
) {
  const message = MsgVote.fromPartial({
    proposalId,
    voter: sender,
    option,
  })

  return {
    value: message,
    typeUrl: '/cosmos.gov.v1beta1.MsgVote',
  }
}
