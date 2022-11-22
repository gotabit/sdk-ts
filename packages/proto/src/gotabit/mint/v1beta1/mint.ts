/* eslint-disable */
import * as _m0 from 'protobufjs/minimal'
import { isSet, Long } from '../../../helpers'
export const protobufPackage = 'gotabit.mint.v1beta1'
/** Minter represents the minting state. */

export interface Minter {
  /** epoch_provisions represent rewards for the current epoch. */
  epochProvisions: string
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */

export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string
  /**
   * eco_fund_pool defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */

  ecoFundPool: string
  developerFundPool: string
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */

  communityPool: string
}
/** Params holds parameters for the x/mint module. */

export interface Params {
  /** mint_denom is the denom of the coin to mint. */
  mintDenom: string
  /** genesis_epoch_provisions epoch provisions from the first epoch. */

  genesisEpochProvisions: string
  /** epoch_identifier mint epoch identifier e.g. (day, week). */

  epochIdentifier: string
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */

  reductionPeriodInEpochs: Long
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */

  reductionFactor: string
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */

  distributionProportions?: DistributionProportions
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */

  mintingRewardsDistributionStartEpoch: Long
  ecoFundPoolAddress: string
  developerFundPoolAddress: string
}

function createBaseMinter(): Minter {
  return {
    epochProvisions: '',
  }
}

export const Minter = {
  encode(
    message: Minter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.epochProvisions !== '') {
      writer.uint32(10).string(message.epochProvisions)
    }

    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMinter()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string()
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): Minter {
    return {
      epochProvisions: isSet(object.epochProvisions)
        ? String(object.epochProvisions)
        : '',
    }
  },

  toJSON(message: Minter): unknown {
    const obj: any = {}
    message.epochProvisions !== undefined &&
      (obj.epochProvisions = message.epochProvisions)
    return obj
  },

  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter()
    message.epochProvisions = object.epochProvisions ?? ''
    return message
  },
}

function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: '',
    ecoFundPool: '',
    developerFundPool: '',
    communityPool: '',
  }
}

export const DistributionProportions = {
  encode(
    message: DistributionProportions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.staking !== '') {
      writer.uint32(10).string(message.staking)
    }

    if (message.ecoFundPool !== '') {
      writer.uint32(18).string(message.ecoFundPool)
    }

    if (message.developerFundPool !== '') {
      writer.uint32(26).string(message.developerFundPool)
    }

    if (message.communityPool !== '') {
      writer.uint32(34).string(message.communityPool)
    }

    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDistributionProportions()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string()
          break

        case 2:
          message.ecoFundPool = reader.string()
          break

        case 3:
          message.developerFundPool = reader.string()
          break

        case 4:
          message.communityPool = reader.string()
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): DistributionProportions {
    return {
      staking: isSet(object.staking) ? String(object.staking) : '',
      ecoFundPool: isSet(object.ecoFundPool) ? String(object.ecoFundPool) : '',
      developerFundPool: isSet(object.developerFundPool)
        ? String(object.developerFundPool)
        : '',
      communityPool: isSet(object.communityPool)
        ? String(object.communityPool)
        : '',
    }
  },

  toJSON(message: DistributionProportions): unknown {
    const obj: any = {}
    message.staking !== undefined && (obj.staking = message.staking)
    message.ecoFundPool !== undefined && (obj.ecoFundPool = message.ecoFundPool)
    message.developerFundPool !== undefined &&
      (obj.developerFundPool = message.developerFundPool)
    message.communityPool !== undefined &&
      (obj.communityPool = message.communityPool)
    return obj
  },

  fromPartial(
    object: Partial<DistributionProportions>,
  ): DistributionProportions {
    const message = createBaseDistributionProportions()
    message.staking = object.staking ?? ''
    message.ecoFundPool = object.ecoFundPool ?? ''
    message.developerFundPool = object.developerFundPool ?? ''
    message.communityPool = object.communityPool ?? ''
    return message
  },
}

function createBaseParams(): Params {
  return {
    mintDenom: '',
    genesisEpochProvisions: '',
    epochIdentifier: '',
    reductionPeriodInEpochs: Long.ZERO,
    reductionFactor: '',
    distributionProportions: undefined,
    mintingRewardsDistributionStartEpoch: Long.ZERO,
    ecoFundPoolAddress: '',
    developerFundPoolAddress: '',
  }
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mintDenom !== '') {
      writer.uint32(10).string(message.mintDenom)
    }

    if (message.genesisEpochProvisions !== '') {
      writer.uint32(18).string(message.genesisEpochProvisions)
    }

    if (message.epochIdentifier !== '') {
      writer.uint32(26).string(message.epochIdentifier)
    }

    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs)
    }

    if (message.reductionFactor !== '') {
      writer.uint32(42).string(message.reductionFactor)
    }

    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(
        message.distributionProportions,
        writer.uint32(50).fork(),
      ).ldelim()
    }

    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch)
    }

    if (message.ecoFundPoolAddress !== '') {
      writer.uint32(66).string(message.ecoFundPoolAddress)
    }

    if (message.developerFundPoolAddress !== '') {
      writer.uint32(74).string(message.developerFundPoolAddress)
    }

    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string()
          break

        case 2:
          message.genesisEpochProvisions = reader.string()
          break

        case 3:
          message.epochIdentifier = reader.string()
          break

        case 4:
          message.reductionPeriodInEpochs = reader.int64() as Long
          break

        case 5:
          message.reductionFactor = reader.string()
          break

        case 6:
          message.distributionProportions = DistributionProportions.decode(
            reader,
            reader.uint32(),
          )
          break

        case 7:
          message.mintingRewardsDistributionStartEpoch = reader.int64() as Long
          break

        case 8:
          message.ecoFundPoolAddress = reader.string()
          break

        case 9:
          message.developerFundPoolAddress = reader.string()
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : '',
      genesisEpochProvisions: isSet(object.genesisEpochProvisions)
        ? String(object.genesisEpochProvisions)
        : '',
      epochIdentifier: isSet(object.epochIdentifier)
        ? String(object.epochIdentifier)
        : '',
      reductionPeriodInEpochs: isSet(object.reductionPeriodInEpochs)
        ? Long.fromValue(object.reductionPeriodInEpochs)
        : Long.ZERO,
      reductionFactor: isSet(object.reductionFactor)
        ? String(object.reductionFactor)
        : '',
      distributionProportions: isSet(object.distributionProportions)
        ? DistributionProportions.fromJSON(object.distributionProportions)
        : undefined,
      mintingRewardsDistributionStartEpoch: isSet(
        object.mintingRewardsDistributionStartEpoch,
      )
        ? Long.fromValue(object.mintingRewardsDistributionStartEpoch)
        : Long.ZERO,
      ecoFundPoolAddress: isSet(object.ecoFundPoolAddress)
        ? String(object.ecoFundPoolAddress)
        : '',
      developerFundPoolAddress: isSet(object.developerFundPoolAddress)
        ? String(object.developerFundPoolAddress)
        : '',
    }
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom)
    message.genesisEpochProvisions !== undefined &&
      (obj.genesisEpochProvisions = message.genesisEpochProvisions)
    message.epochIdentifier !== undefined &&
      (obj.epochIdentifier = message.epochIdentifier)
    message.reductionPeriodInEpochs !== undefined &&
      (obj.reductionPeriodInEpochs = (
        message.reductionPeriodInEpochs || Long.ZERO
      ).toString())
    message.reductionFactor !== undefined &&
      (obj.reductionFactor = message.reductionFactor)
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined)
    message.mintingRewardsDistributionStartEpoch !== undefined &&
      (obj.mintingRewardsDistributionStartEpoch = (
        message.mintingRewardsDistributionStartEpoch || Long.ZERO
      ).toString())
    message.ecoFundPoolAddress !== undefined &&
      (obj.ecoFundPoolAddress = message.ecoFundPoolAddress)
    message.developerFundPoolAddress !== undefined &&
      (obj.developerFundPoolAddress = message.developerFundPoolAddress)
    return obj
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams()
    message.mintDenom = object.mintDenom ?? ''
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? ''
    message.epochIdentifier = object.epochIdentifier ?? ''
    message.reductionPeriodInEpochs =
      object.reductionPeriodInEpochs !== undefined &&
      object.reductionPeriodInEpochs !== null
        ? Long.fromValue(object.reductionPeriodInEpochs)
        : Long.ZERO
    message.reductionFactor = object.reductionFactor ?? ''
    message.distributionProportions =
      object.distributionProportions !== undefined &&
      object.distributionProportions !== null
        ? DistributionProportions.fromPartial(object.distributionProportions)
        : undefined
    message.mintingRewardsDistributionStartEpoch =
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
        ? Long.fromValue(object.mintingRewardsDistributionStartEpoch)
        : Long.ZERO
    message.ecoFundPoolAddress = object.ecoFundPoolAddress ?? ''
    message.developerFundPoolAddress = object.developerFundPoolAddress ?? ''
    return message
  },
}
