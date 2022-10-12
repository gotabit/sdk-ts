import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventMsgSend {
  sender: string;
  receiver: string;
  id: Long;
}
export interface EventMsgSendSDKType {
  sender: string;
  receiver: string;
  id: Long;
}

function createBaseEventMsgSend(): EventMsgSend {
  return {
    sender: "",
    receiver: "",
    id: Long.UZERO
  };
}

export const EventMsgSend = {
  encode(message: EventMsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMsgSend>): EventMsgSend {
    const message = createBaseEventMsgSend();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};