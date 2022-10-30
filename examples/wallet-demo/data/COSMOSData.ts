/**
 * Types
 */
export type TCosmosChain = keyof typeof COSMOS_MAINNET_CHAINS

/**
 * Chains
 */
export const COSMOS_MAINNET_CHAINS = {
  'cosmos:gotabit-test-1': {
    chainId: 'gotabit-test-1',
    name: 'Gotabit Testnet',
    logo: 'https://res.gotabit.io/svg/logo.svg',
    rgb: '107, 111, 147',
    rpc: 'https://rpc-testnet.gotabit.dev:443',
  },
}

/**
 * Methods
 */
export const COSMOS_SIGNING_METHODS = {
  COSMOS_GET_ACCOUNTS: 'cosmos_getAccounts',
  COSMOS_SIGN_DIRECT: 'cosmos_signDirect',
  COSMOS_SIGN_AMINO: 'cosmos_signAmino',
}

export const COSMOS_TESTNET_CHAINS = {
  'cosmos:gotabit-test-1': {
    chainId: 'gotabit-test-1',
    name: 'Gotabit Testnet',
    logo: 'https://res.gotabit.io/svg/logo.svg',
    rgb: '107, 111, 147',
    rpc: 'https://rpc-testnet.gotabit.dev:443',
  },
  'cosmos:gotabit-dev-1': {
    chainId: 'gotabit-dev-1',
    name: 'Gotabit Devnet',
    logo: 'https://res.gotabit.io/svg/logo.svg',
    rgb: '107, 111, 147',
    rpc: 'https://rpc-devtnet.gotabit.dev:443',
  },
}
