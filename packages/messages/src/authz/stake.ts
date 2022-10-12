import { cosmos } from '@gotabit/proto'

import { ValueOf } from '../types'

const staking = cosmos.staking.v1beta1
const coin = cosmos.base.v1beta1.Coin

const AuthorizationType = staking.AuthorizationType

export function createStakeAuthorization(
  allowAddress: string,
  denom: string,
  maxTokens: string | undefined,
  authorizationType: ValueOf<typeof AuthorizationType>,
) {
  const msg = staking.StakeAuthorization.fromPartial({
    allowList: {
      address: [allowAddress],
    },
    maxTokens: maxTokens
      ? coin.fromPartial({
          denom,
          amount: maxTokens,
        })
      : undefined,
    authorizationType,
  })

  return {
    message: msg,
    path: '/StakeAuthorization',
  }
}
