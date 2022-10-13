# Client

Client for Gotabit.

### Install

npm install

```
npm i @gotabit/client
```

yarn install

```
yarn add @gotabit/client
```

### Sign with client and broadcast

After creating the transaction message we need to send the payload to wallet so it can be signed. With the signature we can broadcast the transaction.

```ts
import { GotabitClient } from '@gotabit/client'
import { KeplrWallet } from '@gotabit/wallet-keplr'

const wallet = await KeplrWallet.init('test')

const gotabit = await GotabitClient.init(wallet, 'test')
const accounts = await gotabit.wallet.getAccounts()

const account = accounts[0].address

const client = await gotabit.signStargateClient()

const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'
const msgSendtoken = createMsgSend(account, toAddress, '3000000', 'ugtb')

const result = await client.signAndBroadcast(account, [msgSendtoken], 'auto')
```

## Credits

Code built with the help of these related projects:

- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
