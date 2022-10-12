import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMsg } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        msg(value: MsgMsg): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        msg(value: MsgMsg): {
            typeUrl: string;
            value: MsgMsg;
        };
    };
    fromPartial: {
        msg(value: MsgMsg): {
            typeUrl: string;
            value: MsgMsg;
        };
    };
};
