import { Any } from 'cosmjs-types/google/protobuf/any'
import { MessageGenerated } from './types'

export function createAnyMessage(msg: MessageGenerated) {
  return Any.fromPartial(msg)
}

export function encodeBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str, 'utf8').toString('base64')
    : window.btoa(str)
}
