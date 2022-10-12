# Messages

Message generator for Gotabit.

### Install

npm install

```
npm i @gotabit/messages
```

yarn install

```
yarn add @gotabit/messages
```

### Create a MsgSend message

```ts
import { createMsgSend } from '@gotabit/messages'

const account = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8'
const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'

const msgSend = createMsgSend(account, toAddress, '3000000', 'ugtb')
```

### Create a MsgGrant message

```ts
import { createMsgGrantBasicAllowance, createMsgSend } from '@gotabit/messages'

const account = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8'
const toAddress = 'gio1qdgzfy4vta5p43l4urdtmawka3qv2ldh4h0jay'

const msgGrant = createMsgGrantBasicAllowance(account, toAddress, [
  {
    amount: '3000000',
    denom: 'ugtb',
  },
])
```
