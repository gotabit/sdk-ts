import React from 'react'

import GotabitIcon from './gotabitIcon'
import KeplrIcon from './KeplrIcon'

import { WALLETCONNECT_CONNECT_BUTTON_ID } from '../constants'

const URL_PROTOCOL = 'gio:'
const URL_HOST_WC = 'wc'

const WALLET_LIST = (uri: string) => [
  {
    name: 'Gotabit',
    logo: <GotabitIcon />,
    href: `${URL_PROTOCOL}//${URL_HOST_WC}?${uri}`,
  },
  {
    name: 'Keplr',
    logo: <KeplrIcon />,
    href: `keplrwallet://wcV1?${uri}`,
  },
]

function MobileDisplay({ uri }: { uri: string }) {
  return (
    <div className="walletconnect-connect__buttons__wrapper">
      {WALLET_LIST(uri).map((wallet) => (
        <div className="walletconnect-connect__item">
          <a
            className="walletconnect-connect__button"
            href={wallet.href}
            id={`${WALLETCONNECT_CONNECT_BUTTON_ID}-${wallet.name}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {wallet.logo}
          </a>
          <p style={{ margin: '8px 0' }}>{wallet.name}</p>
        </div>
      ))}
    </div>
  )
}

export default MobileDisplay
