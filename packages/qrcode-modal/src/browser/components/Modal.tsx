import React, { useCallback, useMemo, useState } from 'react'

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
  const [isDisplayQRCode, setIsDisplayQRCode] = useState(!mobile)

  const displayProps = useMemo(
    () => ({
      mobile,
      text: props.text,
      uri: props.uri,
    }),
    [props, mobile],
  )

  const rightSelected = useMemo(
    () => (mobile ? isDisplayQRCode : !isDisplayQRCode),
    [mobile, isDisplayQRCode],
  )

  const displayQRCode = useCallback(() => setIsDisplayQRCode(true), [])
  const displayMobileApp = useCallback(() => setIsDisplayQRCode(false), [])

  return (
    <div
      id={WALLETCONNECT_MODAL_ID}
      className="walletconnect-qrcode__base animated fadeIn"
    >
      <div className="walletconnect-modal__base">
        <Header onClose={props.onClose} />
        {mobile && (
          <div
            className={`walletconnect-modal__mobile__toggle${
              rightSelected ? ' right__selected' : ''
            }`}
          >
            <div className="walletconnect-modal__mobile__toggle_selector">
              {isDisplayQRCode ? props.text.qrcode : props.text.mobile}
            </div>
            <a
              className="walletconnect-modal__toggle_item"
              onClick={displayMobileApp}
            >
              {props.text.mobile}
            </a>
            <a
              className="walletconnect-modal__toggle_item"
              onClick={displayQRCode}
            >
              {props.text.qrcode}
            </a>
          </div>
        )}
        <div>
          {isDisplayQRCode ? (
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
