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
export declare const Msg: {
    encode(message: Msg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Msg;
    fromPartial(object: DeepPartial<Msg>): Msg;
};
