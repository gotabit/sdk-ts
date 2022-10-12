# Gotabit Proto

## usage

```sh
npm install @gotabit/proto
```

### Send token

```js
import { cosmos } from '@gotabit/proto'

const { send } = cosmos.bank.v1beta1.MessageComposer.fromPartial
const msg = send({
  fromAddress: 'from address',
  toAddress: 'receiver address',
  amount: [
    {
      amount: '3000000',
      denom: 'ugtb',
    },
  ],
})
```

### IBC Messages

```js
import { ibc } from '@gotabit/proto'

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from '@gotabit/proto'

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial

const { multiSend, send } = cosmos.bank.v1beta1.MessageComposer.fromPartial

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate,
} = cosmos.staking.v1beta1.MessageComposer.fromPartial

const { deposit, submitProposal, vote, voteWeighted } =
  cosmos.gov.v1beta1.MessageComposer.fromPartial
```

### CosmWasm Messages

```js
import { cosmwasm } from '@gotabit/proto'

const {
  clearAdmin,
  executeContract,
  instantiateContract,
  migrateContract,
  storeCode,
  updateAdmin,
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [osmojs](https://github.com/osmosis-labs/osmojs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.

## Disclaimer

AS DESCRIBED IN THE `@gotabit/proto` LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating `@gotabit/proto` will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the `@gotabit/proto` code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
