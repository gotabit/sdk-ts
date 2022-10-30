import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** Msg defines the inbox item - msg */

export interface Msg {
  /** msg id */
  id: Long;
  /** msg sender address */

  sender: string;
  /** msg recipient address */

  to: string;
  /** msg topics */

  topics: string;
  /** msg message */

  message: string;
}
/** Msg defines the inbox item - msg */

export interface MsgSDKType {
  /** msg id */
  id: Long;
  /** msg sender address */

  sender: string;
  /** msg recipient address */

  to: string;
  /** msg topics */

  topics: string;
  /** msg message */

  message: string;
}

function createBaseMsg(): Msg {
  return {
    id: Long.UZERO,
    sender: "",
    to: "",
    topics: "",
    message: ""
  };
}

export const Msg = {
  encode(message: Msg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }

    if (message.topics !== "") {
      writer.uint32(34).string(message.topics);
    }

    if (message.message !== "") {
      writer.uint32(42).string(message.message);
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
          message.sender = reader.string();
          break;

        case 3:
          message.to = reader.string();
          break;

        case 4:
          message.topics = reader.string();
          break;

        case 5:
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
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.topics = object.topics ?? "";
    message.message = object.message ?? "";
    return message;
  }

};