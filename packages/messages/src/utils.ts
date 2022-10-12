import { google } from '@gotabit/proto'
import { MessageGenerated } from './types'

export function createAnyMessage(msg: MessageGenerated) {
  return google.protobuf.Any.fromPartial({
    typeUrl: msg.path,
    value: msg.message,
  })
}
