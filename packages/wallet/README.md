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

## Credits

Code built with the help of these related projects:

- [WalletConnect/cosmos-wallet](https://github.com/WalletConnect/cosmos-wallet) Cosmos Wallet with Direct and Amino signing.
- [@walletconnect/qrcode-modal](https://github.com/WalletConnect/walletconnect-monorepo/) QR Code Modal for WalletConnect
- [@walletconnect/sign-client](https://github.com/WalletConnect/walletconnect-monorepo/) Sign Client for WalletConnect Protocol
- [keplr-extension](https://github.com/chainapsis/kepler-extension) Keplr is a browser extension wallet for the Inter blockchain ecosystem.
- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
