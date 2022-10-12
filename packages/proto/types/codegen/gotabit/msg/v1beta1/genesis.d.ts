import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the msg module's genesis state */
export interface GenesisState {
}
/** GenesisState defines the msg module's genesis state */
export interface GenesisStateSDKType {
}
export declare const GenesisState: {
    encode(_: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(_: DeepPartial<GenesisState>): GenesisState;
};
