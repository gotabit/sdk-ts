# cosmos-walletconnect

Gotabit Walletconnect with Direct and Amino signing

### Install

npm install

```
npm i @gotabit/wallet-walletconnect
```

yarn install

```
yarn add @gotabit/wallet-walletconnect
```

### Init Walletconnect

```ts
import { Walletconnect } from '@gotabit/wallet-walletconnect';

const wallet = await Walletconnect.init('test', {
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
```

## Credits

Code built with the help of these related projects:

- [@walletconnect/qrcode-modal](https://github.com/WalletConnect/walletconnect-monorepo/) QR Code Modal for WalletConnect
- [@walletconnect/sign-client](https://github.com/WalletConnect/walletconnect-monorepo/) Sign Client for WalletConnect Protocol
