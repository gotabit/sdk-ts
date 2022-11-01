# Gotabit-wallet-gotabit

Gotabit Gotabit Wallet with Direct and Amino signing

### Install

npm install

```
npm i @gotabit/wallet-gotabit
```

yarn install

```
yarn add @gotabit/wallet-gotabit
```

### Init Gotabit wallet

```ts
const wallet = await GotabitWallet.init('test');
```

With custom config

```ts
import { GotabitWallet } from '@gotabit/wallet-gotabit';

const wallet = await GotabitWallet.init({
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
});
```

## Credits

Code built with the help of these related projects:

- [k-extension](https://github.com/chainapsis/kepler-extension) Gotabit is a browser extension wallet for the Inter blockchain ecosystem.
