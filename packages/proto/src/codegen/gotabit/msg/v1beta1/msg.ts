import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Msg {
  id: Long;
  from: string;
  to: string;
  message: string;
}
export interface MsgSDKType {
  id: Long;
  from: string;
  to: string;
  message: string;
}

function createBaseMsg(): Msg {
  return {
    id: Long.UZERO,
    from: "",
    to: "",
    message: ""
  };
}

export const Msg = {
  encode(message: Msg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Msg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsg();

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

  fromPartial(object: DeepPartial<Msg>): Msg {
    const message = createBaseMsg();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.message = object.message ?? "";
    return message;
  }

};