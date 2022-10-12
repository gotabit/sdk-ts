import { cosmos } from '@gotabit/proto'
import { Long } from '@osmonauts/helpers'

const gov = cosmos.gov.v1beta1

export function createMsgVote(
  proposalId: number,
  option: number,
  sender: string,
) {
  return gov.MessageComposer.encoded.vote({
    proposalId: new Long(proposalId),
    voter: sender,
    option,
  })
}
