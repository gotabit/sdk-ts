import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import {
  StakeAuthorization,
  AuthorizationType,
} from 'cosmjs-types/cosmos/staking/v1beta1/authz'

export function createStakeAuthorization(
  allowAddress: string,
  denom: string,
  maxTokens: string | undefined,
  authorizationType: AuthorizationType,
) {
  const msg = StakeAuthorization.fromPartial({
    allowList: {
      address: [allowAddress],
    },
    maxTokens: maxTokens
      ? Coin.fromPartial({
          denom,
          amount: maxTokens,
        })
      : undefined,
    authorizationType,
  })

  return {
    value: msg,
    typeUrl: '/cosmos.staking.v1beta1.StakeAuthorization',
  }
}
