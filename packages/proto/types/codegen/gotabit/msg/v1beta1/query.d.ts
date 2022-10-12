import { Msg, MsgSDKType } from "./msg";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
    /** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */
    address: string;
}
/** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */
export interface ReceivedMessagesRequestSDKType {
    /** ReceivedMessagesRequest is request type for the Query/ReceivedMessages RPC method */
    address: string;
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
export declare const SentMessagesRequest: {
    encode(message: SentMessagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SentMessagesRequest;
    fromPartial(object: DeepPartial<SentMessagesRequest>): SentMessagesRequest;
};
export declare const SentMessagesResponse: {
    encode(message: SentMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SentMessagesResponseSDKType;
    fromPartial(object: DeepPartial<SentMessagesResponse>): SentMessagesResponse;
};
export declare const ReceivedMessagesRequest: {
    encode(message: ReceivedMessagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReceivedMessagesRequest;
    fromPartial(object: DeepPartial<ReceivedMessagesRequest>): ReceivedMessagesRequest;
};
export declare const ReceivedMessagesResponse: {
    encode(message: ReceivedMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReceivedMessagesResponseSDKType;
    fromPartial(object: DeepPartial<ReceivedMessagesResponse>): ReceivedMessagesResponse;
};
