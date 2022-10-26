import React, { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Header from './Header'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MobileDisplay from './MobileDisplay'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import QRCodeDisplay from './QRCodeDisplay'

import { WALLETCONNECT_MODAL_ID } from '../constants'
import { TextMap } from '../types'

export function isMobile(): boolean {
  return (
    window.navigator.userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i,
    ) !== null
  )
}

interface ModalProps {
  text: TextMap
  uri: string
  onClose: any
}

function Modal(props: ModalProps) {
  const mobile = isMobile()
  const displayProps = useMemo(
    () => ({
      mobile,
      text: props.text,
      uri: props.uri,
    }),
    [props, mobile],
  )

  return (
    <div
      id={WALLETCONNECT_MODAL_ID}
      className="walletconnect-qrcode__base animated fadeIn"
    >
      <div className="walletconnect-modal__base">
        <Header onClose={props.onClose} />

        <div>
          {!isMobile() ? (
            <QRCodeDisplay {...displayProps} />
          ) : (
            <MobileDisplay uri={props.uri} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
