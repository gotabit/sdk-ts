import { google } from '@gotabit/proto'
import { MessageGenerated } from './types'

export function createAnyMessage(msg: MessageGenerated) {
  return google.protobuf.Any.fromPartial({
    typeUrl: msg.path,
    value: msg.message,
  })
}

export function encodeBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str, 'utf8').toString('base64')
    : window.btoa(str)
}
