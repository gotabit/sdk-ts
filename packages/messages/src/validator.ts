import { MsgEditValidator } from 'cosmjs-types/cosmos/staking/v1beta1/tx'
import staking from 'cosmjs-types/cosmos/staking/v1beta1/staking'

const NOT_MODIFY = '[do-not-modify]'

export interface MsgEditValidatorProtoInterface {
  typeUrl: string
  message: MsgEditValidator
}

export function createMsgEditValidator(
  moniker: string | undefined,
  identity: string | undefined,
  website: string | undefined,
  securityContact: string | undefined,
  details: string | undefined,
  validatorAddress: string,
  commissionRate: string,
  minSelfDelegation: string,
) {
  const message = MsgEditValidator.fromPartial({
    description: staking.Description.fromPartial({
      moniker: moniker || NOT_MODIFY,
      identity: identity || NOT_MODIFY,
      website: website || NOT_MODIFY,
      securityContact: securityContact || NOT_MODIFY,
      details: details || NOT_MODIFY,
    }),
    validatorAddress,
    commissionRate,
    minSelfDelegation,
  })

  return {
    value: message,
    typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
  }
}
