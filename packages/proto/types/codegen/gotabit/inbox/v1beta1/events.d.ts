import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** EventMsgSend defines the event for MsgSend. */
export interface EventMsgSend {
    /** msg sender address */
    sender: string;
    /** msg recipient address */
    receiver: string;
    /** msg id */
    id: Long;
}
/** EventMsgSend defines the event for MsgSend. */
export interface EventMsgSendSDKType {
    /** msg sender address */
    sender: string;
    /** msg recipient address */
    receiver: string;
    /** msg id */
    id: Long;
}
export declare const EventMsgSend: {
    encode(message: EventMsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMsgSend;
    fromPartial(object: DeepPartial<EventMsgSend>): EventMsgSend;
};
