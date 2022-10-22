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

### Sign Arbitary message

This is an experimental implementation of [ADR-36](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md). Use this feature at your own risk.

```ts
import { experimentalAdr36Verify } from '@gotabit/client'
const client = await gotabit.signStargateClient()

const signed = await client.experimentalAdr36Sign(
  account,
  JSON.stringify({ title: 'Hello Gotabit' }),
)
const ok = await experimentalAdr36Verify(signed)
```

### Query with extensions

Query base extensions

```ts
const client = await gotabit.stargateClient()
const queryClient = client.makeQueryClient()

const response = await queryClient.distribution.delegationRewards(
  delegatorAddress,
  validatorAddress,
)
```

Query with additional extensions

```ts
import { setupGovExtension } from '@cosmjs/stargate'

const client = await gotabit.stargateClient()
const queryClient = client.makeQueryClient(setupGovExtension)

const response = await queryClient.gov.vote(proposalId, voterAddress)
```

## Credits

Code built with the help of these related projects:

- [cosmos/cosmjs](https://github.com/cosmos/cosmjs) CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over browser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem.
