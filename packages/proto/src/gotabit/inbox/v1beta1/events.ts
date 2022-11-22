/* eslint-disable */
import * as _m0 from 'protobufjs/minimal'
import { Long, isSet } from '../../../helpers'
export const protobufPackage = 'gotabit.inbox.v1beta1'
/** EventMsgSend defines the event for MsgSend. */

export interface EventMsgSend {
  /** msg sender address */
  sender: string
  /** msg recipient address */

  receiver: string
  /** msg id */

  id: Long
}

function createBaseEventMsgSend(): EventMsgSend {
  return {
    sender: '',
    receiver: '',
    id: Long.UZERO,
  }
}

export const EventMsgSend = {
  encode(
    message: EventMsgSend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }

    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver)
    }

    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id)
    }

    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventMsgSend()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break

        case 2:
          message.receiver = reader.string()
          break

        case 3:
          message.id = reader.uint64() as Long
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): EventMsgSend {
    return {
      sender: isSet(object.sender) ? String(object.sender) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    }
  },

  toJSON(message: EventMsgSend): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial(object: Partial<EventMsgSend>): EventMsgSend {
    const message = createBaseEventMsgSend()
    message.sender = object.sender ?? ''
    message.receiver = object.receiver ?? ''
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO
    return message
  },
}
