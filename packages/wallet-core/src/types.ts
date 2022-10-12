import { HdPath } from '@cosmjs/crypto';
import { GasPrice } from '@cosmjs/stargate';

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
