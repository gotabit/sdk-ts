import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const gotabitAminoConverters: {
    "/gotabit.inbox.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, to, topics, message }: import("./inbox/v1beta1/tx").MsgSend) => {
            sender: string;
            to: string;
            topics: string;
            message: string;
        };
        fromAmino: ({ sender, to, topics, message }: {
            sender: string;
            to: string;
            topics: string;
            message: string;
        }) => import("./inbox/v1beta1/tx").MsgSend;
    };
};
export declare const gotabitProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGotabitClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGotabitClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
