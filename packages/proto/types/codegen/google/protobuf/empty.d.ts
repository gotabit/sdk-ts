import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 * service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 * }
 */
export interface Empty {
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 * service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 * }
 */
export interface EmptySDKType {
}
export declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromPartial(_: DeepPartial<Empty>): Empty;
};
