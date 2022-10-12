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
export declare const EventMsgSend: {
    encode(message: EventMsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMsgSend;
    fromPartial(object: DeepPartial<EventMsgSend>): EventMsgSend;
};
