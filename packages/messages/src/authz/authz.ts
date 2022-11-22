import { MsgGrant, MsgRevoke } from 'cosmjs-types/cosmos/authz/v1beta1/tx'
import { Grant } from 'cosmjs-types/cosmos/authz/v1beta1/authz'
import * as google from 'cosmjs-types/google/protobuf/timestamp'
import { MessageGenerated } from '../types'

import { createAnyMessage } from '../utils'

export function createMsgGrant(
  granter: string,
  grantee: string,
  grantMessage: MessageGenerated,
  seconds: number,
) {
  const msg = MsgGrant.fromPartial({
    granter,
    grantee,
    grant: Grant.fromPartial({
      authorization: createAnyMessage(grantMessage),
      expiration: google.Timestamp.fromPartial({
        seconds,
        nanos: 0,
      }),
    }),
  })
  return {
    value: msg,
    typeUrl: '/cosmos.authz.v1beta1.MsgGrant',
  }
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
  const msg = MsgRevoke.fromPartial({
    granter,
    grantee,
    msgTypeUrl: type,
  })

  return {
    value: msg,
    typeUrl: 'cosmos.authz.v1beta1.MsgRevoke',
  }
}
