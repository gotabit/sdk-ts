# Gotabit-wallet

Gotabit Wallet with Direct and Amino signing

### Install

npm install

```
npm i @gotabit/wallet
```

yarn install

```
yarn add @gotabit/wallet
```

### Connect wallet

```ts
import { KeplrWallet, Walletconnect, LocalWallet } from '@gotabit/wallet';

const keplrWallet = await KeplrWallet.init('test');

const walletconnect = await Walletconnect.init('test', {
  logger: 'debug',
  relayUrl: 'wss://relay.gotabit.dev',
  projectId: '2c921904d8ebc91517cd11c1cc4a267f',
  metadata: {
    name: 'Gotabit SDK WalletConnect test',
    description: 'Gotabit SDK WalletConnect test',
    url: 'https://sdk.gotabit.dev',
    icons: [`https:\/\/res.gotabit.io\/svg\/icon.svg`],
  },
});

// local wallet with mnemonic
const localWallet = await LocalWallet.init({
  mnemonic: 'your mnemonic',
});

// local wallet with privateKey
const localWallet = await LocalWallet.init({
  privateKey: 'your privateKey',
});

// local wallet with password
const localWallet = await LocalWallet.init({
  password: 'your password',
  serialization: 'your encrypted serialization',
});
```
