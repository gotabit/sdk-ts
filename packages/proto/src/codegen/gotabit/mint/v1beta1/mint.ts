import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** Minter represents the minting state. */

export interface Minter {
  /** epoch_provisions represent rewards for the current epoch. */
  epochProvisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  /** epoch_provisions represent rewards for the current epoch. */
  epoch_provisions: string;
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
  staking: string;
  /**
   * eco_fund_pool defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */

  ecoFundPool: string;
  developerFundPool: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */

  communityPool: string;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */

export interface DistributionProportionsSDKType {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * eco_fund_pool defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */

  eco_fund_pool: string;
  developer_fund_pool: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */

  community_pool: string;
}
/** Params holds parameters for the x/mint module. */

export interface Params {
  /** mint_denom is the denom of the coin to mint. */
  mintDenom: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */

  genesisEpochProvisions: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */

  epochIdentifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */

  reductionPeriodInEpochs: Long;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */

  reductionFactor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */

  distributionProportions?: DistributionProportions;
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */

  mintingRewardsDistributionStartEpoch: Long;
  ecoFundPoolAddress: string;
  developerFundPoolAddress: string;
}
/** Params holds parameters for the x/mint module. */

export interface ParamsSDKType {
  /** mint_denom is the denom of the coin to mint. */
  mint_denom: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */

  genesis_epoch_provisions: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */

  epoch_identifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */

  reduction_period_in_epochs: Long;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */

  reduction_factor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */

  distribution_proportions?: DistributionProportionsSDKType;
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */

  minting_rewards_distribution_start_epoch: Long;
  eco_fund_pool_address: string;
  developer_fund_pool_address: string;
}

function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  }

};

function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    ecoFundPool: "",
    developerFundPool: "",
    communityPool: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }

    if (message.ecoFundPool !== "") {
      writer.uint32(18).string(message.ecoFundPool);
    }

    if (message.developerFundPool !== "") {
      writer.uint32(26).string(message.developerFundPool);
    }

    if (message.communityPool !== "") {
      writer.uint32(34).string(message.communityPool);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;

        case 2:
          message.ecoFundPool = reader.string();
          break;

        case 3:
          message.developerFundPool = reader.string();
          break;

        case 4:
          message.communityPool = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.ecoFundPool = object.ecoFundPool ?? "";
    message.developerFundPool = object.developerFundPool ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: Long.ZERO,
    reductionFactor: "",
    distributionProportions: undefined,
    mintingRewardsDistributionStartEpoch: Long.ZERO,
    ecoFundPoolAddress: "",
    developerFundPoolAddress: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }

    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }

    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }

    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }

    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }

    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }

    if (message.ecoFundPoolAddress !== "") {
      writer.uint32(66).string(message.ecoFundPoolAddress);
    }

    if (message.developerFundPoolAddress !== "") {
      writer.uint32(74).string(message.developerFundPoolAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;

        case 2:
          message.genesisEpochProvisions = reader.string();
          break;

        case 3:
          message.epochIdentifier = reader.string();
          break;

        case 4:
          message.reductionPeriodInEpochs = (reader.int64() as Long);
          break;

        case 5:
          message.reductionFactor = reader.string();
          break;

        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        case 7:
          message.mintingRewardsDistributionStartEpoch = (reader.int64() as Long);
          break;

        case 8:
          message.ecoFundPoolAddress = reader.string();
          break;

        case 9:
          message.developerFundPoolAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? Long.fromValue(object.reductionPeriodInEpochs) : Long.ZERO;
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO;
    message.ecoFundPoolAddress = object.ecoFundPoolAddress ?? "";
    message.developerFundPoolAddress = object.developerFundPoolAddress ?? "";
    return message;
  }

};