import { cosmos } from '@gotabit/proto'

const staking = cosmos.staking.v1beta1

const NOT_MODIFY = '[do-not-modify]'

export interface MsgEditValidatorProtoInterface {
  path: string
  message: typeof staking.MsgEditValidator
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
  return staking.MessageComposer.encoded.editValidator({
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
}
