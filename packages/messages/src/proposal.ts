import { MsgSubmitProposal } from 'cosmjs-types/cosmos/gov/v1beta1/tx'
import { toUtf8 } from '@cosmjs/encoding'
import { createAnyMessage } from './utils'

export function createMsgProposal(
  content: Record<string, any>,
  initialDeposit: Array<{
    denom: string
    amount: string
  }>,
  proposer: string,
) {
  const message = MsgSubmitProposal.fromPartial({
    content: createAnyMessage({
      value: toUtf8(JSON.stringify(content)),
      typeUrl: '/cosmos.gov.v1beta1.submitProposal',
    }),
    initialDeposit,
    proposer,
  })

  return {
    value: message,
    typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
  }
}
