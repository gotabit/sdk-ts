import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgMsg defines a message for sending a message */

export interface MsgMsg {
  sender: string;
  from: string;
  to: string;
  message: string;
}
/** MsgMsg defines a message for sending a message */

export interface MsgMsgSDKType {
  sender: string;
  from: string;
  to: string;
  message: string;
}
/** MsgMsgResponse defines the MsgMsg response type */

export interface MsgMsgResponse {
  id: Long;
  from: string;
  to: string;
  message: string;
}
/** MsgMsgResponse defines the MsgMsg response type */

export interface MsgMsgResponseSDKType {
  id: Long;
  from: string;
  to: string;
  message: string;
}

function createBaseMsgMsg(): MsgMsg {
  return {
    sender: "",
    from: "",
    to: "",
    message: ""
  };
}

export const MsgMsg = {
  encode(message: MsgMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }

    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMsg();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.from = reader.string();
          break;

        case 3:
          message.to = reader.string();
          break;

        case 4:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMsg>): MsgMsg {
    const message = createBaseMsgMsg();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.message = object.message ?? "";
    return message;
  }

};

function createBaseMsgMsgResponse(): MsgMsgResponse {
  return {
    id: Long.UZERO,
    from: "",
    to: "",
    message: ""
  };
}

export const MsgMsgResponse = {
  encode(message: MsgMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }

    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMsgResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMsgResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.from = reader.string();
          break;

        case 3:
          message.to = reader.string();
          break;

        case 4:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMsgResponse>): MsgMsgResponse {
    const message = createBaseMsgMsgResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.message = object.message ?? "";
    return message;
  }

};