import * as _90 from "./applications/interchain_accounts/controller/v1/controller";
import * as _91 from "./applications/interchain_accounts/controller/v1/query";
import * as _92 from "./applications/interchain_accounts/host/v1/host";
import * as _93 from "./applications/interchain_accounts/host/v1/query";
import * as _94 from "./applications/interchain_accounts/v1/account";
import * as _95 from "./applications/interchain_accounts/v1/genesis";
import * as _96 from "./applications/interchain_accounts/v1/metadata";
import * as _97 from "./applications/interchain_accounts/v1/packet";
import * as _98 from "./applications/transfer/v1/genesis";
import * as _99 from "./applications/transfer/v1/query";
import * as _100 from "./applications/transfer/v1/transfer";
import * as _101 from "./applications/transfer/v1/tx";
import * as _102 from "./applications/transfer/v2/packet";
import * as _103 from "./core/channel/v1/channel";
import * as _104 from "./core/channel/v1/genesis";
import * as _105 from "./core/channel/v1/query";
import * as _106 from "./core/channel/v1/tx";
import * as _107 from "./core/client/v1/client";
import * as _108 from "./core/client/v1/genesis";
import * as _109 from "./core/client/v1/query";
import * as _110 from "./core/client/v1/tx";
import * as _111 from "./core/commitment/v1/commitment";
import * as _112 from "./core/connection/v1/connection";
import * as _113 from "./core/connection/v1/genesis";
import * as _114 from "./core/connection/v1/query";
import * as _115 from "./core/connection/v1/tx";
import * as _116 from "./core/types/v1/genesis";
import * as _117 from "./lightclients/localhost/v1/localhost";
import * as _118 from "./lightclients/solomachine/v1/solomachine";
import * as _119 from "./lightclients/solomachine/v2/solomachine";
import * as _120 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryParamsRequest: {
                        encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                        fromPartial(_: {}): _91.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                        fromPartial(object: {
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _91.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                        fromPartial(object: {
                            controllerEnabled?: boolean;
                        }): _90.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryParamsRequest: {
                        encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
                        fromPartial(_: {}): _93.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
                        fromPartial(object: {
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _93.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                        fromPartial(object: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        }): _92.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _97.Type;
                typeToJSON(object: _97.Type): string;
                Type: typeof _97.Type;
                TypeSDKType: typeof _97.TypeSDKType;
                InterchainAccountPacketData: {
                    encode(message: _97.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.InterchainAccountPacketData;
                    fromPartial(object: {
                        type?: _97.Type;
                        data?: Uint8Array;
                        memo?: string;
                    }): _97.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _97.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CosmosTx;
                    fromPartial(object: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _97.CosmosTx;
                };
                Metadata: {
                    encode(message: _96.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Metadata;
                    fromPartial(object: {
                        version?: string;
                        controllerConnectionId?: string;
                        hostConnectionId?: string;
                        address?: string;
                        encoding?: string;
                        txType?: string;
                    }): _96.Metadata;
                };
                GenesisState: {
                    encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                    fromPartial(object: {
                        controllerGenesisState?: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            ports?: string[];
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        };
                        hostGenesisState?: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            port?: string;
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        };
                    }): _95.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _95.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ControllerGenesisState;
                    fromPartial(object: {
                        activeChannels?: {
                            connectionId?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        interchainAccounts?: {
                            connectionId?: string;
                            portId?: string;
                            accountAddress?: string;
                        }[];
                        ports?: string[];
                        params?: {
                            controllerEnabled?: boolean;
                        };
                    }): _95.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _95.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.HostGenesisState;
                    fromPartial(object: {
                        activeChannels?: {
                            connectionId?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        interchainAccounts?: {
                            connectionId?: string;
                            portId?: string;
                            accountAddress?: string;
                        }[];
                        port?: string;
                        params?: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        };
                    }): _95.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _95.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ActiveChannel;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        channelId?: string;
                    }): _95.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _95.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RegisteredInterchainAccount;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        accountAddress?: string;
                    }): _95.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _94.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.InterchainAccount;
                    fromPartial(object: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        accountOwner?: string;
                    }): _94.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: _101.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: _101.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _101.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _101.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _101.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _101.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _101.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgTransferResponse;
                    fromPartial(_: {}): _101.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _100.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _100.DenomTrace;
                };
                Params: {
                    encode(message: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _100.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _99.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _99.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _99.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _99.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _99.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _99.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _99.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _99.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _99.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsRequest;
                    fromPartial(_: {}): _99.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _99.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _99.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _99.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomHashRequest;
                    fromPartial(object: {
                        trace?: string;
                    }): _99.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _99.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomHashResponse;
                    fromPartial(object: {
                        hash?: string;
                    }): _99.QueryDenomHashResponse;
                };
                GenesisState: {
                    encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _98.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _102.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _102.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: _106.MsgRecvPacket;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: _106.MsgTimeout;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _106.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _106.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: _106.MsgRecvPacket;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: _106.MsgTimeout;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _106.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _106.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _106.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _106.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _106.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _106.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _106.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _106.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _106.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _106.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _106.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _106.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _106.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _106.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _106.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _106.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _106.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _106.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _106.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenInitResponse;
                    fromPartial(object: {
                        channelId?: string;
                    }): _106.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _106.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _106.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenTryResponse;
                    fromPartial(_: {}): _106.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _106.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _106.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenAckResponse;
                    fromPartial(_: {}): _106.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _106.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _106.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenConfirmResponse;
                    fromPartial(_: {}): _106.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _106.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _106.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _106.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseInitResponse;
                    fromPartial(_: {}): _106.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _106.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _106.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseConfirmResponse;
                    fromPartial(_: {}): _106.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _106.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _106.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRecvPacketResponse;
                    fromPartial(_: {}): _106.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _106.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _106.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _106.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutResponse;
                    fromPartial(_: {}): _106.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _106.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _106.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _106.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutOnCloseResponse;
                    fromPartial(_: {}): _106.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _106.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _106.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _106.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAcknowledgementResponse;
                    fromPartial(_: {}): _106.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _105.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _105.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _105.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _105.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _105.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _105.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _105.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _105.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _105.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _105.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _105.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _105.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _105.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _105.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _105.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _105.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _105.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _105.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _105.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _105.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _105.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _105.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _105.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _105.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _105.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _105.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _105.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _105.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    }): _105.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _105.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _105.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _105.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _105.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _105.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _105.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _105.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _105.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _105.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _105.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _105.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    }): _104.GenesisState;
                };
                PacketSequence: {
                    encode(message: _104.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _104.PacketSequence;
                };
                stateFromJSON(object: any): _103.State;
                stateToJSON(object: _103.State): string;
                orderFromJSON(object: any): _103.Order;
                orderToJSON(object: _103.Order): string;
                State: typeof _103.State;
                StateSDKType: typeof _103.StateSDKType;
                Order: typeof _103.Order;
                OrderSDKType: typeof _103.OrderSDKType;
                Channel: {
                    encode(message: _103.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Channel;
                    fromPartial(object: {
                        state?: _103.State;
                        ordering?: _103.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _103.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _103.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _103.State;
                        ordering?: _103.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _103.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _103.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _103.Counterparty;
                };
                Packet: {
                    encode(message: _103.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Packet;
                    fromPartial(object: {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _103.Packet;
                };
                PacketState: {
                    encode(message: _103.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _103.PacketState;
                };
                Acknowledgement: {
                    encode(message: _103.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _103.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: _110.MsgCreateClient;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: _110.MsgUpdateClient;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _110.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _110.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: _110.MsgCreateClient;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: _110.MsgUpdateClient;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _110.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _110.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _110.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _110.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _110.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _110.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _110.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _110.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _110.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _110.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateClientResponse;
                    fromPartial(_: {}): _110.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _110.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _110.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _110.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpdateClientResponse;
                    fromPartial(_: {}): _110.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _110.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _110.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _110.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpgradeClientResponse;
                    fromPartial(_: {}): _110.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _110.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _110.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _110.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: {}): _110.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _109.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _109.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _109.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStateResponse;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _109.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _109.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _109.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatesResponse;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _109.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _109.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    }): _109.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _109.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _109.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _109.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _109.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _109.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _109.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _109.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _109.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _109.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _109.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientParamsRequest;
                    fromPartial(_: {}): _109.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _109.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _109.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _109.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _109.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _109.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _109.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _109.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _109.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _109.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _109.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    }): _108.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _108.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _108.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _108.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _108.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _107.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _107.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _107.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _107.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _107.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _107.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _107.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _107.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _107.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _107.UpgradeProposal;
                };
                Height: {
                    encode(message: _107.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Height;
                    fromPartial(object: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _107.Height;
                };
                Params: {
                    encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _107.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _111.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _111.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _111.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _111.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _111.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _111.MerklePath;
                };
                MerkleProof: {
                    encode(message: _111.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../proofs").HashOp;
                                    prehashKey?: import("../proofs").HashOp;
                                    prehashValue?: import("../proofs").HashOp;
                                    length?: import("../proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../proofs").HashOp;
                                        prehashKey?: import("../proofs").HashOp;
                                        prehashValue?: import("../proofs").HashOp;
                                        length?: import("../proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../proofs").HashOp;
                                        prehashKey?: import("../proofs").HashOp;
                                        prehashValue?: import("../proofs").HashOp;
                                        length?: import("../proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../proofs").HashOp;
                                            prehashKey?: import("../proofs").HashOp;
                                            prehashValue?: import("../proofs").HashOp;
                                            length?: import("../proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../proofs").HashOp;
                                            prehashKey?: import("../proofs").HashOp;
                                            prehashValue?: import("../proofs").HashOp;
                                            length?: import("../proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _111.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _115.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _115.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _115.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _115.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _115.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _115.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    }): _115.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _115.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenInitResponse;
                    fromPartial(_: {}): _115.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _115.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _115.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _115.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenTryResponse;
                    fromPartial(_: {}): _115.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _115.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _115.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _115.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenAckResponse;
                    fromPartial(_: {}): _115.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _115.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _115.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _115.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: {}): _115.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _114.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _114.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _114.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _112.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _114.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _114.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _114.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _114.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _112.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _114.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _114.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _114.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _114.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _114.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _114.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _114.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _114.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _114.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _114.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _114.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _114.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _114.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _112.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    }): _113.GenesisState;
                };
                stateFromJSON(object: any): _112.State;
                stateToJSON(object: _112.State): string;
                State: typeof _112.State;
                StateSDKType: typeof _112.StateSDKType;
                ConnectionEnd: {
                    encode(message: _112.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _112.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _112.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _112.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _112.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _112.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _112.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _112.Counterparty;
                };
                ClientPaths: {
                    encode(message: _112.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _112.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _112.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _112.ConnectionPaths;
                };
                Version: {
                    encode(message: _112.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _112.Version;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: any;
                    }): _112.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _112.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _103.State;
                                ordering?: _103.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    }): _116.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _117.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _117.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _118.DataType;
                dataTypeToJSON(object: _118.DataType): string;
                DataType: typeof _118.DataType;
                DataTypeSDKType: typeof _118.DataTypeSDKType;
                ClientState: {
                    encode(message: _118.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _118.ClientState;
                };
                ConsensusState: {
                    encode(message: _118.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _118.ConsensusState;
                };
                Header: {
                    encode(message: _118.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _118.Header;
                };
                Misbehaviour: {
                    encode(message: _118.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _118.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _118.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _118.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _118.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _118.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _118.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _118.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _118.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _118.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _118.DataType;
                        data?: Uint8Array;
                    }): _118.SignBytes;
                };
                HeaderData: {
                    encode(message: _118.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _118.HeaderData;
                };
                ClientStateData: {
                    encode(message: _118.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _118.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _118.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _118.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _118.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _112.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _118.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _118.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _118.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _118.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _118.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _118.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _118.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _118.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _118.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _118.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _118.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _119.DataType;
                dataTypeToJSON(object: _119.DataType): string;
                DataType: typeof _119.DataType;
                DataTypeSDKType: typeof _119.DataTypeSDKType;
                ClientState: {
                    encode(message: _119.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _119.ClientState;
                };
                ConsensusState: {
                    encode(message: _119.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _119.ConsensusState;
                };
                Header: {
                    encode(message: _119.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _119.Header;
                };
                Misbehaviour: {
                    encode(message: _119.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _119.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _119.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _119.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _119.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _119.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _119.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _119.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _119.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _119.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _119.DataType;
                        data?: Uint8Array;
                    }): _119.SignBytes;
                };
                HeaderData: {
                    encode(message: _119.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _119.HeaderData;
                };
                ClientStateData: {
                    encode(message: _119.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _119.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _119.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _112.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _119.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _119.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _103.State;
                            ordering?: _103.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _119.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _119.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _119.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _119.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _119.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _119.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _119.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _119.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _119.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _120.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../proofs").HashOp;
                                prehashKey?: import("../proofs").HashOp;
                                prehashValue?: import("../proofs").HashOp;
                                length?: import("../proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _120.ClientState;
                };
                ConsensusState: {
                    encode(message: _120.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _120.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _120.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    }): _120.Misbehaviour;
                };
                Header: {
                    encode(message: _120.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Header;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    }): _120.Header;
                };
                Fraction: {
                    encode(message: _120.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Fraction;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _120.Fraction;
                };
            };
        }
    }
}
