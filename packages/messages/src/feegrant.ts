import {
  BasicAllowance,
  PeriodicAllowance,
} from 'cosmjs-types/cosmos/feegrant/v1beta1/feegrant'
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from 'cosmjs-types/cosmos/feegrant/v1beta1/tx'
import * as coin from 'cosmjs-types/cosmos/base/v1beta1/coin'
import * as google from 'cosmjs-types/google/protobuf/duration'
import { createAnyMessage } from './utils'

const googleDuration = google.Duration

export interface AllowanceItem {
  amount: string
  denom: string
}
export type Allowance = AllowanceItem[]

/**
 * BasicAllowance is permission for grantee to use fee from a granter's account
 *
 * @typedef {Object} Allowance
 * @typedef {BasicAllowance} feegrantAllowance.cosmos.v1beta1.BasicAllowance
 * @param {Allowance} allowance specifies the maximum amount of tokens that can be spent before the expiration.
 * @param {number} expiration specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.
 * @returns {BasicAllowance} feegrantAllowance.cosmos.v1beta1.BasicAllowance
 */
export function createBasicAllowance(
  allowance: Allowance,
  expiration?: number,
) {
  const spendLimit = allowance.map((item) =>
    coin.Coin.fromPartial({
      denom: item.denom,
      amount: item.amount,
    }),
  )

  return BasicAllowance.fromPartial({
    spendLimit,
    expiration: expiration ? new Date(expiration * 1000) : undefined,
  })
}

/**
 * PeriodAllowance is a repeating fee allowance for the mentioned period
 * we can mention when the grant can expire as well as when a period can reset. We can also define the maximum number of coins that can be used in a mentioned period of time.
 *
 * @typedef {{amount: string, denom: string}} Allowance
 * @typedef {BasicAllowance} feegrantAllowance.cosmos.v1beta1.BasicAllowance
 * @typedef {PeriodicAllowance} feegrantAllowance.cosmos.v1beta1.PeriodicAllowance
 * @typedef {{allowance: Allowance, expiration: number, periodDuration: number, periodAllowance?: Allowance, periodAlloanceBeforeReset?: Allowance, periodResetTimestamp: number}} createPeriodAllowanceParam
 * @param {createPeriodAllowanceParam} createPeriodAllowanceParam
 * @param {number} createPeriodAllowanceParam.expiration specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.
 * @param {number} createPeriodAllowanceParam.periodDuration is the specific period of time, after each period passes, period_can_spend will be reset.
 * @param {Allowance} createPeriodAllowanceParam.periodAllowance specifies the maximum amount of tokens that can be spent before the expiration.
 * @param {Allowance} createPeriodAllowanceParam.periodAlloanceBeforeReset is the maximum amount of coins left to be spent before the period_reset time.
 * @param {number} createPeriodAllowanceParam.periodResetTimestamp keeps track of when a next period reset should happen.
 * @returns {PeriodicAllowance}
 */
export function createPeriodAllowance({
  allowance,
  expiration,
  periodDuration,
  periodAllowance,
  periodAlloanceBeforeReset,
  periodResetTimestamp,
}: {
  allowance: Allowance
  expiration?: number
  periodDuration?: number
  periodAllowance?: Allowance
  periodAlloanceBeforeReset?: Allowance
  periodResetTimestamp?: number
}) {
  const basicAllowance = createBasicAllowance(allowance, expiration)

  const getAllownce = (allowance?: Allowance) =>
    allowance?.map((item) =>
      coin.Coin.fromPartial({
        denom: item.denom,
        amount: item.amount,
      }),
    )
  const periodSpendLimit = getAllownce(periodAllowance)
  const periodCanSpendBeforeReset = getAllownce(periodAlloanceBeforeReset)

  return PeriodicAllowance.fromPartial({
    basic: basicAllowance,
    period: googleDuration.fromPartial({
      seconds: periodDuration,
    }),
    periodSpendLimit,
    periodCanSpend: periodCanSpendBeforeReset,
    periodReset: periodResetTimestamp
      ? new Date(periodResetTimestamp * 1000)
      : undefined,
  })
}

export function createMsgPeriodAllowance({
  allowance,
  expiration,
  periodDuration,
  periodAllowance,
  periodAlloanceBeforeReset,
  periodResetTimestamp,
}: {
  allowance: Allowance
  expiration?: number
  periodDuration?: number
  periodAllowance?: Allowance
  periodAlloanceBeforeReset?: Allowance
  periodResetTimestamp?: number
}) {
  const periodAllowanceMsg = createPeriodAllowance({
    allowance,
    expiration,
    periodDuration,
    periodAllowance,
    periodAlloanceBeforeReset,
    periodResetTimestamp,
  })

  const msgBytes = Uint8Array.from(
    PeriodicAllowance.encode(periodAllowanceMsg).finish(),
  )

  return {
    value: msgBytes,
    typeUrl: '/cosmos.feegrant.v1beta1.PeriodicAllowance',
  }
}

/**
 * BasicAllowance message creator
 *
 * @typedef {Object} Allowance
 * @param {string} granter granter is an account address who is giving permission to grantee (the beneficiary account address) to pay for some or all of grantee's transaction fees.
 * @param {string} grantee grantee(the beneficiary account address) is an account address who is permitted by granter
 * @param {Allowance} allowance specifies the maximum amount of tokens that can be spent before the expiration.
 * @param {number} expiration specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.
 * @returns {{value: Message, typeUrl: string}}
 */
export function createMsgGrantBasicAllowance(
  granter: string,
  grantee: string,
  allowance: Allowance,
  expiration?: number,
) {
  const basicAllowanceMsg = createBasicAllowance(allowance, expiration)
  const msgBytes = Uint8Array.from(
    BasicAllowance.encode(basicAllowanceMsg).finish(),
  )

  const message = MsgGrantAllowance.fromPartial({
    granter,
    grantee,
    allowance: createAnyMessage({
      value: msgBytes,
      typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
    }),
  })

  return {
    value: MsgGrantAllowance.encode(message).finish(),
    typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
  }
}

/**
 * GrantPeriodAllowance message creator
 *
 * @typedef {{amount: string, denom: string}} Allowance
 * @typedef {{granter: string, grantee: string, allowance: Allowance, expiration: number, periodDuration: number, periodAllowance?: Allowance, periodAlloanceBeforeReset?: Allowance, periodResetTimestamp: number}} createPeriodAllowanceParam
 * @param {createMstGrantPeriodAllowanceParam} createPeriodAllowanceParam
 * @param {string} granter granter is an account address who is giving permission to grantee (the beneficiary account address) to pay for some or all of grantee's transaction fees.
 * @param {string} grantee grantee((the beneficiary account address)) is an account address who is permitted by granter
 * @param {number} createMstGrantPeriodAllowanceParam.expiration specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.
 * @param {number} createMstGrantPeriodAllowanceParam.periodDuration is the specific period of time, after each period passes, period_can_spend will be reset.
 * @param {Allowance} createMstGrantPeriodAllowanceParam.periodAllowance specifies the maximum amount of tokens that can be spent before the expiration.
 * @param {Allowance} createMstGrantPeriodAllowanceParam.periodAlloanceBeforeReset is the maximum amount of coins left to be spent before the period_reset time.
 * @param {number} createMstGrantPeriodAllowanceParam.periodResetTimestamp keeps track of when a next period reset should happen.
 * @returns {{value: Message, typeUrl: string}}
 */
export function createMsgGrantPeriodAllowance({
  granter,
  grantee,
  allowance,
  expiration,
  periodDuration,
  periodAllowance,
  periodAlloanceBeforeReset,
  periodResetTimestamp,
}: {
  granter: string
  grantee: string
  allowance: Allowance
  expiration?: number
  periodDuration?: number
  periodAllowance?: Allowance
  periodAlloanceBeforeReset?: Allowance
  periodResetTimestamp?: number
}) {
  const periodAllowanceMsg = createPeriodAllowance({
    allowance,
    expiration,
    periodDuration,
    periodAllowance,
    periodAlloanceBeforeReset,
    periodResetTimestamp,
  })

  const msgBytes = Uint8Array.from(
    PeriodicAllowance.encode(periodAllowanceMsg).finish(),
  )

  const message = MsgGrantAllowance.fromPartial({
    granter,
    grantee,
    allowance: createAnyMessage({
      value: msgBytes,
      typeUrl: '/cosmos.feegrant.v1beta1.PeriodicAllowance',
    }),
  })

  return {
    value: MsgGrantAllowance.encode(message).finish(),
    typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
  }
}

export function createMsgRevokeAllowance(granter: string, grantee: string) {
  const message = MsgRevokeAllowance.fromPartial({
    granter,
    grantee,
  })

  return {
    value: message,
    typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
  }
}
