# Gotabit-wallet-keplr

Gotabit Keplr Wallet with Direct and Amino signing

### Install

npm install

```
npm i @gotabit/wallet-keplr
```

yarn install

```
yarn add @gotabit/wallet-keplr
```

### Init Keplr wallet

```ts
const wallet = await KeplrWallet.init('test');
```

With custom config

```ts
import { KeplrWallet } from '@gotabit/wallet-keplr';

const wallet = await KeplrWallet.init({
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

- [keplr-extension](https://github.com/chainapsis/kepler-extension) Keplr is a browser extension wallet for the Inter blockchain ecosystem.
