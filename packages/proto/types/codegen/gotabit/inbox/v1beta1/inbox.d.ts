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
export declare const Msg: {
    encode(message: Msg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Msg;
    fromPartial(object: DeepPartial<Msg>): Msg;
};
