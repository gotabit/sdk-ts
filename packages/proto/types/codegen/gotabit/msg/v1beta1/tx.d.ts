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
export declare const MsgMsg: {
    encode(message: MsgMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMsg;
    fromPartial(object: DeepPartial<MsgMsg>): MsgMsg;
};
export declare const MsgMsgResponse: {
    encode(message: MsgMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMsgResponseSDKType;
    fromPartial(object: DeepPartial<MsgMsgResponse>): MsgMsgResponse;
};
