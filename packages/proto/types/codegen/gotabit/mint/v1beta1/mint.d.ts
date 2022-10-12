import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
    distributionProportions: DistributionProportions;
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
    distribution_proportions: DistributionProportionsSDKType;
    /**
     * minting_rewards_distribution_start_epoch start epoch to distribute minting
     * rewards
     */
    minting_rewards_distribution_start_epoch: Long;
    eco_fund_pool_address: string;
    developer_fund_pool_address: string;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
