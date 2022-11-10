import { HdPath } from '@cosmjs/crypto';
import { Decimal } from '@cosmjs/math';
import Long from 'long';

export interface SignDoc {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  bodyBytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */

  authInfoBytes: Uint8Array;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */

  chainId: string;
  /** account_number is the account number of the account in state */

  accountNumber: Long;
}

/**
 * A gas price, i.e. the price of a single unit of gas. This is typically a fraction of
 * the smallest fee token unit, such as 0.012utoken.
 */
declare class GasPrice {
  readonly amount: Decimal;

  readonly denom: string;

  constructor(amount: Decimal, denom: string);

  /**
   * Parses a gas price formatted as `<amount><denom>`, e.g. `GasPrice.fromString("0.012utoken")`.
   *
   * The denom must match the Cosmos SDK 0.42 pattern (https://github.com/cosmos/cosmos-sdk/blob/v0.42.4/types/coin.go#L599-L601).
   * See `GasPrice` in @cosmjs/stargate for a more generic matcher.
   *
   * Separators are not yet supported.
   */
  static fromString(gasPrice: string): GasPrice;

  /**
   * Returns a string representation of this gas price, e.g. "0.025uatom".
   * This can be used as an input to `GasPrice.fromString`.
   */
  toString(): string;
}

export enum ConfigTypeEnum {
  /** Local Environment */
  ConfigLocal = 'local',
  /** Test Environment */
  ConfigTest = 'test',
  /** Dev Environment */
  ConfigDev = 'dev',
  /** Main Environment */
  ConfigMain = 'main',
}

export type ConfigType = `${ConfigTypeEnum}`;

/**
 * For field meanings, please refer to: `https://docs.keplr.app/api/suggest-chain.html`
 */
export interface GotaBitConfig {
  rpc: string;
  chainId: string;
  gasPrices: GasPrice | string;
  gasAdjustment: number;

  rest: string;
  coinType: number;
  chainName: string;
  coinDenom: string;
  coinDecimals: number;
  coinMinimalDenom: string;
  coinGeckoId: string;
  gasPriceStep: {
    low: number;
    average: number;
    high: number;
  };
}

/**
 * Declare the GotaBitWalletOptions interface
 */
export interface GotaBitWalletOptions {
  bip39Password: string;
  hdPaths: HdPath[];
  prefix: string;
}

/**
 * Declare the GotaBitInitWalletOptions interface
 */
export interface GotaBitInitWalletOptions {
  bip39Password: string;
  hdPaths: string;
  prefix: string;
}
