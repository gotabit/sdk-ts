/* eslint-disable */
import { Msg } from './inbox'
import * as _m0 from 'protobufjs/minimal'
import { isSet } from '../../../helpers'
export const protobufPackage = 'gotabit.inbox.v1beta1'
/** SentMessagesRequest is request type for the Query/SentMessages RPC method */

export interface SentMessagesRequest {
  /** SentMessagesRequest is request type for the Query/SentMessages RPC method */
  address: string
}
/** SentMessagesResponse is response type for the Query/SentMessages RPC method */

export interface SentMessagesResponse {
  /** SentMessagesResponse is response type for the Query/SentMessages RPC method */
  messages: Msg[]
}
/** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesRequest {
  address: string
  topics: string
}
/** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesResponse {
  /** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */
  messages: Msg[]
}

function createBaseSentMessagesRequest(): SentMessagesRequest {
  return {
    address: '',
  }
}

export const SentMessagesRequest = {
  encode(
    message: SentMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }

    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSentMessagesRequest()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): SentMessagesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    }
  },

  toJSON(message: SentMessagesRequest): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: Partial<SentMessagesRequest>): SentMessagesRequest {
    const message = createBaseSentMessagesRequest()
    message.address = object.address ?? ''
    return message
  },
}

function createBaseSentMessagesResponse(): SentMessagesResponse {
  return {
    messages: [],
  }
}

export const SentMessagesResponse = {
  encode(
    message: SentMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim()
    }

    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SentMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSentMessagesResponse()

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

  fromJSON(object: any): SentMessagesResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Msg.fromJSON(e))
        : [],
    }
  },

  toJSON(message: SentMessagesResponse): unknown {
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

  fromPartial(object: Partial<SentMessagesResponse>): SentMessagesResponse {
    const message = createBaseSentMessagesResponse()
    message.messages = object.messages?.map((e) => Msg.fromPartial(e)) || []
    return message
  },
}

function createBaseReceivedMessagesRequest(): ReceivedMessagesRequest {
  return {
    address: '',
    topics: '',
  }
}

export const ReceivedMessagesRequest = {
  encode(
    message: ReceivedMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }

    if (message.topics !== '') {
      writer.uint32(18).string(message.topics)
    }

    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ReceivedMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseReceivedMessagesRequest()

    while (reader.pos < end) {
      const tag = reader.uint32()

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break

        case 2:
          message.topics = reader.string()
          break

        default:
          reader.skipType(tag & 7)
          break
      }
    }

    return message
  },

  fromJSON(object: any): ReceivedMessagesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      topics: isSet(object.topics) ? String(object.topics) : '',
    }
  },

  toJSON(message: ReceivedMessagesRequest): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.topics !== undefined && (obj.topics = message.topics)
    return obj
  },

  fromPartial(
    object: Partial<ReceivedMessagesRequest>,
  ): ReceivedMessagesRequest {
    const message = createBaseReceivedMessagesRequest()
    message.address = object.address ?? ''
    message.topics = object.topics ?? ''
    return message
  },
}

function createBaseReceivedMessagesResponse(): ReceivedMessagesResponse {
  return {
    messages: [],
  }
}

export const ReceivedMessagesResponse = {
  encode(
    message: ReceivedMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim()
    }

    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ReceivedMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseReceivedMessagesResponse()

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

  fromJSON(object: any): ReceivedMessagesResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Msg.fromJSON(e))
        : [],
    }
  },

  toJSON(message: ReceivedMessagesResponse): unknown {
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

  fromPartial(
    object: Partial<ReceivedMessagesResponse>,
  ): ReceivedMessagesResponse {
    const message = createBaseReceivedMessagesResponse()
    message.messages = object.messages?.map((e) => Msg.fromPartial(e)) || []
    return message
  },
}
