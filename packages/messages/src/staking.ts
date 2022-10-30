import { cosmos } from '@gotabit/proto'

const staking = cosmos.staking.v1beta1
const coin = cosmos.base.v1beta1.Coin
const dist = cosmos.distribution.v1beta1 as any

export function createMsgDelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.fromPartial({
    denom,
    amount,
  })

  return staking.MessageComposer.fromPartial.delegate({
    delegatorAddress,
    validatorAddress,
    amount: value,
  })
}

export function createMsgBeginRedelegate(
  delegatorAddress: string,
  validatorSrcAddress: string,
  validatorDstAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.fromPartial({
    denom,
    amount,
  })

  return staking.MessageComposer.fromPartial.beginRedelegate({
    delegatorAddress,
    validatorSrcAddress,
    validatorDstAddress,
    amount: value,
  })
}

export function createMsgUndelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = coin.fromPartial({
    denom,
    amount,
  })

  return staking.MessageComposer.fromPartial.undelegate({
    delegatorAddress,
    validatorAddress,
    amount: value,
  })
}

export interface MsgWithdrawDelegatorRewardProtoInterface {
  path: string
  message: Uint8Array
}

export function createMsgWithdrawDelegatorReward(
  delegatorAddress: string,
  validatorAddress: string,
) {
  return dist.MessageComposer.fromPartial.withdrawDelegatorReward({
    delegatorAddress,
    validatorAddress,
  })
}

export interface MsgWithdrawValidatorCommissionProtoInterface {
  path: string
  message: typeof dist.MsgWithdrawValidatorCommission
}

export function createMsgWithdrawValidatorCommission(validatorAddress: string) {
  return dist.MessageComposer.fromPartial.withdrawValidatorCommission({
    validatorAddress,
  })
}
