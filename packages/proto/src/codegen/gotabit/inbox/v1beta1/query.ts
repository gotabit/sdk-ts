import { Msg, MsgSDKType } from "./inbox";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** SentMessagesRequest is request type for the Query/SentMessages RPC method */

export interface SentMessagesRequest {
  /** SentMessagesRequest is request type for the Query/SentMessages RPC method */
  address: string;
}
/** SentMessagesRequest is request type for the Query/SentMessages RPC method */

export interface SentMessagesRequestSDKType {
  /** SentMessagesRequest is request type for the Query/SentMessages RPC method */
  address: string;
}
/** SentMessagesResponse is response type for the Query/SentMessages RPC method */

export interface SentMessagesResponse {
  /** SentMessagesResponse is response type for the Query/SentMessages RPC method */
  messages: Msg[];
}
/** SentMessagesResponse is response type for the Query/SentMessages RPC method */

export interface SentMessagesResponseSDKType {
  /** SentMessagesResponse is response type for the Query/SentMessages RPC method */
  messages: MsgSDKType[];
}
/** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesRequest {
  address: string;
  topics: string;
}
/** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesRequestSDKType {
  address: string;
  topics: string;
}
/** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesResponse {
  /** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */
  messages: Msg[];
}
/** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */

export interface ReceivedMessagesResponseSDKType {
  /** ReceivedMessagesResponse is response type for the Query/ReceivedMessages RPC method */
  messages: MsgSDKType[];
}

function createBaseSentMessagesRequest(): SentMessagesRequest {
  return {
    address: ""
  };
}

export const SentMessagesRequest = {
  encode(message: SentMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentMessagesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SentMessagesRequest>): SentMessagesRequest {
    const message = createBaseSentMessagesRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseSentMessagesResponse(): SentMessagesResponse {
  return {
    messages: []
  };
}

export const SentMessagesResponse = {
  encode(message: SentMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentMessagesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Msg.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SentMessagesResponse>): SentMessagesResponse {
    const message = createBaseSentMessagesResponse();
    message.messages = object.messages?.map(e => Msg.fromPartial(e)) || [];
    return message;
  }

};

function createBaseReceivedMessagesRequest(): ReceivedMessagesRequest {
  return {
    address: "",
    topics: ""
  };
}

export const ReceivedMessagesRequest = {
  encode(message: ReceivedMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.topics !== "") {
      writer.uint32(18).string(message.topics);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceivedMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceivedMessagesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.topics = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ReceivedMessagesRequest>): ReceivedMessagesRequest {
    const message = createBaseReceivedMessagesRequest();
    message.address = object.address ?? "";
    message.topics = object.topics ?? "";
    return message;
  }

};

function createBaseReceivedMessagesResponse(): ReceivedMessagesResponse {
  return {
    messages: []
  };
}

export const ReceivedMessagesResponse = {
  encode(message: ReceivedMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceivedMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceivedMessagesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Msg.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ReceivedMessagesResponse>): ReceivedMessagesResponse {
    const message = createBaseReceivedMessagesResponse();
    message.messages = object.messages?.map(e => Msg.fromPartial(e)) || [];
    return message;
  }

};