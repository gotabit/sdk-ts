import { Msg, MsgSDKType } from "./inbox";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the inbox module's genesis state */
export interface GenesisState {
    messages: Msg[];
}
/** GenesisState defines the inbox module's genesis state */
export interface GenesisStateSDKType {
    messages: MsgSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
