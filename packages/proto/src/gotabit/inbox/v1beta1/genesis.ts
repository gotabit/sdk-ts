/* eslint-disable */
import { Msg } from './inbox'
import * as _m0 from 'protobufjs/minimal'
export const protobufPackage = 'gotabit.inbox.v1beta1'
/** GenesisState defines the inbox module's genesis state */

export interface GenesisState {
  messages: Msg[]
}

function createBaseGenesisState(): GenesisState {
  return {
    messages: [],
  }
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim()
    }

    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisState()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Msg.decode(reader, reader.uint32()))
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): GenesisState {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Msg.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}

    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Msg.toJSON(e) : undefined,
      )
    } else {
      obj.messages = []
    }

    return obj
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState()
    message.messages = object.messages?.map((e) => Msg.fromPartial(e)) || []
    return message
  },
}
