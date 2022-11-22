import {
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
} from 'cosmjs-types/cosmos/staking/v1beta1/tx'
import coin from 'cosmjs-types/cosmos/base/v1beta1/coin'
import dist from 'cosmjs-types/cosmos/distribution/v1beta1/tx'

export function createMsgDelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.Coin.fromPartial({
    denom,
    amount,
  })

  const message = MsgDelegate.fromPartial({
    delegatorAddress,
    validatorAddress,
    amount: value,
  })

  return {
    value: MsgDelegate.encode(message).finish(),
    typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
  }
}

export function createMsgBeginRedelegate(
  delegatorAddress: string,
  validatorSrcAddress: string,
  validatorDstAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.Coin.fromPartial({
    denom,
    amount,
  })

  const message = MsgBeginRedelegate.fromPartial({
    delegatorAddress,
    validatorSrcAddress,
    validatorDstAddress,
    amount: value,
  })

  return {
    value: message,
    typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
  }
}

export function createMsgUndelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.Coin.fromPartial({
    denom,
    amount,
  })

  const message = MsgUndelegate.fromPartial({
    delegatorAddress,
    validatorAddress,
    amount: value,
  })

  return {
    value: message,
    typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
  }
}

export interface MsgWithdrawDelegatorRewardProtoInterface {
  typeUrl: string
  message: Uint8Array
}

export function createMsgWithdrawDelegatorReward(
  delegatorAddress: string,
  validatorAddress: string,
) {
  const message = dist.MsgWithdrawDelegatorReward.fromPartial({
    delegatorAddress,
    validatorAddress,
  })

  return {
    value: message,
    typeUrl: '/cosmos.dist.v1beta1.MsgWithdrawDelegatorReward',
  }
}

export interface MsgWithdrawValidatorCommissionProtoInterface {
  typeUrl: string
  message: typeof dist.MsgWithdrawValidatorCommission
}

export function createMsgWithdrawValidatorCommission(validatorAddress: string) {
  const message = dist.MsgWithdrawValidatorCommission.fromPartial({
    validatorAddress,
  })

  return {
    value: message,
    typeUrl: '/cosmos.dist.v1beta1.MsgWithdrawValidatorCommission',
  }
}
