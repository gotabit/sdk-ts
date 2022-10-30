import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** MsgSend defines a message for sending a message */
export interface MsgSend {
    /** msg sender address */
    sender: string;
    /** msg recipient address */
    to: string;
    /** msg topics */
    topics: string;
    /** msg message */
    message: string;
}
/** MsgSend defines a message for sending a message */
export interface MsgSendSDKType {
    /** msg sender address */
    sender: string;
    /** msg recipient address */
    to: string;
    /** msg topics */
    topics: string;
    /** msg message */
    message: string;
}
/** MsgSendResponse defines the MsgSend response type */
export interface MsgSendResponse {
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
/** MsgSendResponse defines the MsgSend response type */
export interface MsgSendResponseSDKType {
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
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromPartial(object: DeepPartial<MsgSend>): MsgSend;
};
export declare const MsgSendResponse: {
    encode(message: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromPartial(object: DeepPartial<MsgSendResponse>): MsgSendResponse;
};
