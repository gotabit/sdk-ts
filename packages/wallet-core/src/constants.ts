import { GotaBitConfig } from './types';

export const LOCAL_CONFIG: GotaBitConfig = {
  rpc: 'http://localhost:26657',
  chainId: 'gotabit-local',
  chainName: 'GotaBit-local',
  rest: 'http://localhost:1317',
  coinType: 118,
  coinDenom: 'GTB',
  coinDecimals: 6,
  coinMinimalDenom: 'ugtb',
  coinGeckoId: 'gotabit',
  gasPriceStep: { low: 0.001, average: 0.0025, high: 0.003 },
  gasPrices: '',
  gasAdjustment: 0,
};

export const DEV_CONFIG: GotaBitConfig = {
  rpc: 'https://rpc-devnet.gotabit.dev:443',
  chainId: 'gotabit-dev-1',
  chainName: 'GotaBit-dev',
  rest: 'https://rest-devnet.gotabit.dev:443',
  coinType: 118,
  coinDenom: 'GTB',
  coinDecimals: 6,
  coinMinimalDenom: 'ugtb',
  coinGeckoId: 'gotabit',
  gasPriceStep: { low: 0.001, average: 0.0025, high: 0.003 },
  gasPrices: '',
  gasAdjustment: 0,
};

export const TEST_CONFIG: GotaBitConfig = {
  rpc: 'https://rpc-testnet.gotabit.dev:443',
  chainId: 'gotabit-test-1',
  chainName: 'GotaBit-test',
  rest: 'https://rest-testnet.gotabit.dev:443',
  coinType: 118,
  coinDenom: 'GTB',
  coinDecimals: 6,
  coinMinimalDenom: 'ugtb',
  coinGeckoId: 'gotabit',
  gasPriceStep: { low: 0.001, average: 0.0025, high: 0.003 },
  gasPrices: '',
  gasAdjustment: 0,
};

export const MAIN_CONFIG: GotaBitConfig = {
  rpc: 'https://rpc.gotabit.dev:443',
  chainId: 'gotabit-alpha',
  chainName: 'GotaBit',
  rest: 'https://rest.gotabit.dev:443',
  coinType: 118,
  coinDenom: 'GTB',
  coinDecimals: 6,
  coinMinimalDenom: 'ugtb',
  coinGeckoId: 'gotabit',
  gasPriceStep: { low: 0.001, average: 0.0025, high: 0.003 },
  gasPrices: '',
  gasAdjustment: 0,
};

export const DEFAULT_HD_PATH = "m/44'/118'/0'/0/0";

export const DEFAULT_ADDRESS_PREFIX = 'gio';

export const DEFAULT_GAS_PRICE = '0.0025ugtb';
