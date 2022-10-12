import { cosmos } from '@gotabit/proto'
import { MessageGenerated } from '../types'

import { createAnyMessage } from '../utils'

export function createMsgGrant(
  granter: string,
  grantee: string,
  grantMessage: MessageGenerated,
  seconds: number,
) {
  return cosmos.authz.v1beta1.MessageComposer.fromPartial.grant({
    granter,
    grantee,
    grant: cosmos.authz.v1beta1.Grant.fromPartial({
      authorization: createAnyMessage(grantMessage),
      expiration: new Date(seconds * 1000),
    }),
  })
}

export enum RevokeMessages {
  REVOKE_MSG_DELEGATE = '/cosmos.staking.v1beta1.MsgDelegate',
  REVOKE_MSG_WITHDRAW_DELEGATOR_REWARDS = '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
}

export function createMsgRevoke(
  granter: string,
  grantee: string,
  type: string | RevokeMessages,
) {
  return cosmos.authz.v1beta1.MessageComposer.fromPartial.revoke({
    granter,
    grantee,
    msgTypeUrl: type,
  })
}
