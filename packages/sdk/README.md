# SDK

The package includes messages, client and wallets.

### Install

npm install

```
npm i @gotabit/sdk
```

yarn install

```
yarn add @gotabit/sdk
```

```ts
import { createMsgSend, KeplrWallet, GotabitClient } from '@gotabit/sdk'

const wallet = await KeplrWallet.init('test')

const gotabit = await GotabitClient.init(wallet, 'test')
const accounts = await client.wallet.getAccounts()

const account = accounts.[0].address

const client = await gotabit.signStargateClient()

const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'
const msgSendtoken = createMsgSend(account, toAddress, '3000000', 'ugtb')

const result = await client.signAndBroadcast(
  account,
  [msgSendtoken],
  'auto',
)
```

## Credits

Code built with the help of these related projects:

- [WalletConnect/cosmos-wallet](https://github.com/WalletConnect/cosmos-wallet) Cosmos Wallet with Direct and Amino signing.
- [@walletconnect/qrcode-modal](https://github.com/WalletConnect/walletconnect-monorepo/) QR Code Modal for WalletConnect
- [@walletconnect/sign-client](https://github.com/WalletConnect/walletconnect-monorepo/) Sign Client for WalletConnect Protocol
- [keplr-extension](https://github.com/chainapsis/kepler-extension) Keplr is a browser extension wallet for the Inter blockchain ecosystem.
- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [osmojs](https://github.com/osmosis-labs/osmojs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.
- [evmosjs](https://github.com/evmos/evmosjs) JS and TS libs for Evmos.
- [react](https://github.com/facebook/react) React is a JavaScript library for building user interfaces.
- [zustand](https://github.com/pmndrs/zustand) A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.
