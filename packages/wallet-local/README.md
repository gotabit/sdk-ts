# Gotabit-wallet-local

Gotabit Local Wallet with Direct and Amino signing

### Install

npm install

```
npm i @gotabit/wallet-local
```

yarn install

```
yarn add @gotabit/wallet-local
```

### Init Local wallet

```ts
import { LocalWallet } from '@gotabit/wallet-local';

// with mnemonic
const wallet = await LocalWallet.init({
  mnemonic: 'your mnemonic',
});

// with privateKey
const wallet = await LocalWallet.init({
  privateKey: 'your privateKey',
});

// with password
const wallet = await LocalWallet.init({
  password: 'your password',
  serialization: 'your encrypted serialization',
});
```

## Credits

Code built with the help of these related projects:

- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
