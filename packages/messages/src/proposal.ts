import { cosmos } from '@gotabit/proto'
import { toUtf8 } from '@cosmjs/encoding'
import { createAnyMessage } from './utils'

const gov = cosmos.gov.v1beta1

export function createMsgProposal(
  content: Record<string, any>,
  initialDeposit: Array<{
    denom: string
    amount: string
  }>,
  proposer: string,
) {
  return gov.MessageComposer.encoded.submitProposal({
    content: createAnyMessage({
      message: toUtf8(JSON.stringify(content)),
      path: '/cosmos.gov.v1beta1.submitProposal',
    }),
    initialDeposit,
    proposer,
  })
}
