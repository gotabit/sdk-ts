// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
import * as React from 'react'
// @ts-ignore
import { createRoot } from 'react-dom/client'

import { WALLETCONNECT_STYLE_SHEET } from './assets/style'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Modal from './components/Modal'
import Languages from './languages'
import {
  ANIMATION_DURATION,
  WALLETCONNECT_WRAPPER_ID,
  WALLETCONNECT_MODAL_ID,
  WALLETCONNECT_STYLE_ID,
} from './constants'

import { TextMap } from './types'

function getFromWindow<T>(name: string): T | undefined {
  let res: T | undefined = undefined
  if (
    typeof window !== 'undefined' &&
    typeof window[name as any] !== 'undefined'
  ) {
    res = window[name as any] as T
  }
  return res
}

function getFromWindowOrThrow<T>(name: string): T {
  const res = getFromWindow<T>(name)
  if (!res) {
    throw new Error(`${name} is not defined in Window`)
  }
  return res
}

function getDocumentOrThrow(): Document {
  return getFromWindowOrThrow<Document>('document')
}

function getNavigatorOrThrow(): Navigator {
  return getFromWindowOrThrow<Navigator>('navigator')
}

function injectStyleSheet() {
  const doc = getDocumentOrThrow()
  const prev = doc.getElementById(WALLETCONNECT_STYLE_ID)
  if (prev) {
    doc.head.removeChild(prev)
  }
  const style = doc.createElement('style')
  style.setAttribute('id', WALLETCONNECT_STYLE_ID)
  style.innerText = WALLETCONNECT_STYLE_SHEET
  doc.head.appendChild(style)
}

function renderWrapper(): HTMLDivElement {
  const doc = getDocumentOrThrow()
  const wrapper = doc.createElement('div')
  wrapper.setAttribute('id', WALLETCONNECT_WRAPPER_ID)
  doc.body.appendChild(wrapper)
  return wrapper
}

function triggerCloseAnimation(): void {
  const doc = getDocumentOrThrow()
  const modal = doc.getElementById(WALLETCONNECT_MODAL_ID)
  if (modal) {
    modal.className = modal.className.replace('fadeIn', 'fadeOut')
    setTimeout(() => {
      const wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID)
      if (wrapper) {
        doc.body.removeChild(wrapper)
      }
    }, ANIMATION_DURATION)
  }
}

function getWrappedCallback(cb: any): any {
  return () => {
    triggerCloseAnimation()
    if (cb) {
      cb()
    }
  }
}

function getText(): TextMap {
  const lang = getNavigatorOrThrow().language.split('-')[0] || 'en'
  return Languages[lang] || Languages['en']
}

export function open(uri: string, cb: any) {
  injectStyleSheet()
  const wrapper = renderWrapper()
  createRoot(wrapper).render(
    <Modal text={getText()} uri={uri} onClose={getWrappedCallback(cb)} />,
  )
}

export function close() {
  triggerCloseAnimation()
}
