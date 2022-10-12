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
