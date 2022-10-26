# gotabit-walletconnect-qrcode-modal

Gotabit Walletconnect QRcode modal

### Install

npm install

```sh
npm i @gotabit/qrcode-modal
```

yarn install

```sh
yarn add @gotabit/qrcode-modal
```

### Open Qrcode modal with es import

```ts
import QRCodeModal from '@gotabit/qrcode-modal'

const onClose = () => {
  console.log('modal closed!')
}

QRCodeModal.open(uri, onClose)
```

### Open Qrcode modal with umd

```js
;<script src="https://unpkg.com/@gotabit/qrcode-modal"></script>

const onClose = () => {
  console.log('modal closed!')
}

window.GotabitQRCodeModal.open(uri, onClose)
```

## Credits

Code built with the help of these related projects:

- [@walletconnect/qrcode-modal](https://github.com/WalletConnect/walletconnect-monorepo/) QR Code Modal for WalletConnect
- [@walletconnect/browser-utils](https://github.com/WalletConnect/walletconnect-monorepo/) Browser Utilities for WalletConnect
