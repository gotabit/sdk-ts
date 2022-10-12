import * as _93 from "./applications/interchain_accounts/controller/v1/controller";
import * as _94 from "./applications/interchain_accounts/controller/v1/query";
import * as _95 from "./applications/interchain_accounts/host/v1/host";
import * as _96 from "./applications/interchain_accounts/host/v1/query";
import * as _97 from "./applications/interchain_accounts/v1/account";
import * as _98 from "./applications/interchain_accounts/v1/genesis";
import * as _99 from "./applications/interchain_accounts/v1/metadata";
import * as _100 from "./applications/interchain_accounts/v1/packet";
import * as _101 from "./applications/transfer/v1/genesis";
import * as _102 from "./applications/transfer/v1/query";
import * as _103 from "./applications/transfer/v1/transfer";
import * as _104 from "./applications/transfer/v1/tx";
import * as _105 from "./applications/transfer/v2/packet";
import * as _106 from "./core/channel/v1/channel";
import * as _107 from "./core/channel/v1/genesis";
import * as _108 from "./core/channel/v1/query";
import * as _109 from "./core/channel/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _114 from "./core/commitment/v1/commitment";
import * as _115 from "./core/connection/v1/connection";
import * as _116 from "./core/connection/v1/genesis";
import * as _117 from "./core/connection/v1/query";
import * as _118 from "./core/connection/v1/tx";
import * as _119 from "./core/types/v1/genesis";
import * as _120 from "./lightclients/localhost/v1/localhost";
import * as _121 from "./lightclients/solomachine/v1/solomachine";
import * as _122 from "./lightclients/solomachine/v2/solomachine";
import * as _123 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryParamsRequest: {
                        encode(_: _94.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsRequest;
                        fromPartial(_: {}): _94.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _94.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsResponseSDKType;
                        fromPartial(object: {
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _94.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
                        fromPartial(object: {
                            controllerEnabled?: boolean;
                        }): _93.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryParamsRequest: {
                        encode(_: _96.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsRequest;
                        fromPartial(_: {}): _96.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _96.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsResponseSDKType;
                        fromPartial(object: {
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _96.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
                        fromPartial(object: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        }): _95.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _100.Type;
                typeToJSON(object: _100.Type): string;
                Type: typeof _100.Type;
                TypeSDKType: typeof _100.TypeSDKType;
                InterchainAccountPacketData: {
                    encode(message: _100.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.InterchainAccountPacketData;
                    fromPartial(object: {
                        type?: _100.Type;
                        data?: Uint8Array;
                        memo?: string;
                    }): _100.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _100.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CosmosTx;
                    fromPartial(object: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _100.CosmosTx;
                };
                Metadata: {
                    encode(message: _99.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Metadata;
                    fromPartial(object: {
                        version?: string;
                        controllerConnectionId?: string;
                        hostConnectionId?: string;
                        address?: string;
                        encoding?: string;
                        txType?: string;
                    }): _99.Metadata;
                };
                GenesisState: {
                    encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
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
                    }): _98.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _98.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ControllerGenesisState;
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
                    }): _98.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _98.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.HostGenesisState;
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
                    }): _98.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _98.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ActiveChannel;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        channelId?: string;
                    }): _98.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _98.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.RegisteredInterchainAccount;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        accountAddress?: string;
                    }): _98.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _97.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.InterchainAccount;
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
                    }): _97.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _104.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _104.MsgTransfer): {
                            typeUrl: string;
                            value: _104.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _104.MsgTransfer): {
                            typeUrl: string;
                            value: _104.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _104.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
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
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _104.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _104.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgTransfer;
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
                    }): _104.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _104.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgTransferResponseSDKType;
                    fromPartial(_: {}): _104.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _103.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _103.DenomTrace;
                };
                Params: {
                    encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _103.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _102.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _102.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _102.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomTraceResponseSDKType;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _102.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _102.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _102.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _102.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomTracesResponseSDKType;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _102.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                    fromPartial(_: {}): _102.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _102.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _102.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomHashRequest;
                    fromPartial(object: {
                        trace?: string;
                    }): _102.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _102.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomHashResponseSDKType;
                    fromPartial(object: {
                        hash?: string;
                    }): _102.QueryDenomHashResponse;
                };
                GenesisState: {
                    encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
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
                    }): _101.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _105.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _105.FungibleTokenPacketData;
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
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: _109.MsgRecvPacket;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: _109.MsgTimeout;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _109.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _109.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: _109.MsgRecvPacket;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: _109.MsgTimeout;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _109.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _109.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _109.MsgChannelOpenInit) => {
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
                        }) => _109.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _109.MsgChannelOpenTry) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _109.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _109.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _109.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _109.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _109.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _109.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _109.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _109.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _109.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _109.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _109.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _109.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _109.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _106.State;
                            ordering?: _106.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _109.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _109.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenInitResponseSDKType;
                    fromPartial(object: {
                        channelId?: string;
                    }): _109.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _109.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _106.State;
                            ordering?: _106.Order;
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
                    }): _109.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _109.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenTryResponseSDKType;
                    fromPartial(_: {}): _109.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _109.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenAck;
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
                    }): _109.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _109.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenAckResponseSDKType;
                    fromPartial(_: {}): _109.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _109.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _109.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _109.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _109.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _109.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _109.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _109.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelCloseInitResponseSDKType;
                    fromPartial(_: {}): _109.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _109.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _109.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _109.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgChannelCloseConfirmResponseSDKType;
                    fromPartial(_: {}): _109.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _109.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgRecvPacket;
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
                    }): _109.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _109.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgRecvPacketResponseSDKType;
                    fromPartial(_: {}): _109.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _109.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTimeout;
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
                    }): _109.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _109.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTimeoutResponseSDKType;
                    fromPartial(_: {}): _109.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _109.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTimeoutOnClose;
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
                    }): _109.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _109.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTimeoutOnCloseResponseSDKType;
                    fromPartial(_: {}): _109.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _109.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAcknowledgement;
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
                    }): _109.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _109.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAcknowledgementResponseSDKType;
                    fromPartial(_: {}): _109.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _108.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _108.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _108.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelResponseSDKType;
                    fromPartial(object: {
                        channel?: {
                            state?: _106.State;
                            ordering?: _106.Order;
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
                    }): _108.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _108.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _108.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _108.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _106.State;
                            ordering?: _106.Order;
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
                    }): _108.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _108.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _108.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _108.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryConnectionChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _106.State;
                            ordering?: _106.Order;
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
                    }): _108.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _108.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _108.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _108.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelClientStateResponseSDKType;
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
                    }): _108.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _108.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _108.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _108.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryChannelConsensusStateResponseSDKType;
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
                    }): _108.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _108.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _108.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _108.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketCommitmentResponseSDKType;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _108.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketCommitmentsRequest;
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
                    }): _108.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _108.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketCommitmentsResponseSDKType;
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
                    }): _108.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _108.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _108.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _108.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketReceiptResponseSDKType;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _108.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _108.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _108.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketAcknowledgementResponseSDKType;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _108.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketAcknowledgementsRequest;
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
                    }): _108.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _108.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPacketAcknowledgementsResponseSDKType;
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
                    }): _108.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _108.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _108.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _108.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUnreceivedPacketsResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _108.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _108.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _108.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUnreceivedAcksResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _108.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _108.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _108.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryNextSequenceReceiveResponseSDKType;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _108.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _106.State;
                            ordering?: _106.Order;
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
                    }): _107.GenesisState;
                };
                PacketSequence: {
                    encode(message: _107.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _107.PacketSequence;
                };
                stateFromJSON(object: any): _106.State;
                stateToJSON(object: _106.State): string;
                orderFromJSON(object: any): _106.Order;
                orderToJSON(object: _106.Order): string;
                State: typeof _106.State;
                StateSDKType: typeof _106.StateSDKType;
                Order: typeof _106.Order;
                OrderSDKType: typeof _106.OrderSDKType;
                Channel: {
                    encode(message: _106.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Channel;
                    fromPartial(object: {
                        state?: _106.State;
                        ordering?: _106.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _106.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _106.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _106.State;
                        ordering?: _106.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _106.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _106.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _106.Counterparty;
                };
                Packet: {
                    encode(message: _106.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Packet;
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
                    }): _106.Packet;
                };
                PacketState: {
                    encode(message: _106.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _106.PacketState;
                };
                Acknowledgement: {
                    encode(message: _106.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _106.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _113.MsgCreateClient) => {
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
                        }) => _113.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _113.MsgUpdateClient) => {
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
                        }) => _113.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _113.MsgUpgradeClient) => {
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
                        }) => _113.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _113.MsgSubmitMisbehaviour) => {
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
                        }) => _113.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _113.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateClient;
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
                    }): _113.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _113.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateClientResponseSDKType;
                    fromPartial(_: {}): _113.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _113.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _113.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _113.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateClientResponseSDKType;
                    fromPartial(_: {}): _113.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _113.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpgradeClient;
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
                    }): _113.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _113.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpgradeClientResponseSDKType;
                    fromPartial(_: {}): _113.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _113.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _113.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _113.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgSubmitMisbehaviourResponseSDKType;
                    fromPartial(_: {}): _113.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _112.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _112.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _112.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStateResponseSDKType;
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
                    }): _112.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _112.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _112.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _112.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStatesResponseSDKType;
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
                    }): _112.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _112.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    }): _112.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _112.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryConsensusStateResponseSDKType;
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
                    }): _112.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _112.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _112.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _112.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryConsensusStatesResponseSDKType;
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
                    }): _112.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _112.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _112.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _112.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientStatusResponseSDKType;
                    fromPartial(object: {
                        status?: string;
                    }): _112.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _112.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientParamsRequest;
                    fromPartial(_: {}): _112.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _112.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryClientParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _112.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _112.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _112.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _112.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryUpgradedClientStateResponseSDKType;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _112.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _112.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _112.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _112.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryUpgradedConsensusStateResponseSDKType;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _112.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
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
                    }): _111.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _111.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _111.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _111.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _111.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _110.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _110.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _110.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _110.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _110.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ClientConsensusStates;
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
                    }): _110.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _110.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _110.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _110.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.UpgradeProposal;
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
                    }): _110.UpgradeProposal;
                };
                Height: {
                    encode(message: _110.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Height;
                    fromPartial(object: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _110.Height;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _110.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _114.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _114.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _114.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _114.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _114.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _114.MerklePath;
                };
                MerkleProof: {
                    encode(message: _114.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MerkleProof;
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
                    }): _114.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _118.MsgConnectionOpenInit) => {
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
                        }) => _118.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _118.MsgConnectionOpenTry) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _118.MsgConnectionOpenAck) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _118.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _118.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenInit;
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
                    }): _118.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _118.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenInitResponseSDKType;
                    fromPartial(_: {}): _118.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _118.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenTry;
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
                    }): _118.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _118.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenTryResponseSDKType;
                    fromPartial(_: {}): _118.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _118.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenAck;
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
                    }): _118.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _118.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenAckResponseSDKType;
                    fromPartial(_: {}): _118.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _118.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _118.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _118.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgConnectionOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _118.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _117.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _117.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _117.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionResponseSDKType;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _115.State;
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
                    }): _117.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _117.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _117.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionsResponseSDKType;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _115.State;
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
                    }): _117.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _117.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _117.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _117.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientConnectionsResponseSDKType;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _117.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _117.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _117.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _117.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionClientStateResponseSDKType;
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
                    }): _117.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _117.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _117.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _117.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionConsensusStateResponseSDKType;
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
                    }): _117.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _115.State;
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
                    }): _116.GenesisState;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.StateSDKType;
                ConnectionEnd: {
                    encode(message: _115.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _115.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _115.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _115.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _115.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _115.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _115.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _115.Counterparty;
                };
                ClientPaths: {
                    encode(message: _115.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _115.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _115.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _115.ConnectionPaths;
                };
                Version: {
                    encode(message: _115.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _115.Version;
                };
                Params: {
                    encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: any;
                    }): _115.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GenesisState;
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
                                state?: _115.State;
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
                                state?: _106.State;
                                ordering?: _106.Order;
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
                    }): _119.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _120.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _120.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _121.DataType;
                dataTypeToJSON(object: _121.DataType): string;
                DataType: typeof _121.DataType;
                DataTypeSDKType: typeof _121.DataTypeSDKType;
                ClientState: {
                    encode(message: _121.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ClientState;
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
                    }): _121.ClientState;
                };
                ConsensusState: {
                    encode(message: _121.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _121.ConsensusState;
                };
                Header: {
                    encode(message: _121.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _121.Header;
                };
                Misbehaviour: {
                    encode(message: _121.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _121.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _121.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _121.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _121.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _121.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _121.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _121.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _121.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _121.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _121.DataType;
                        data?: Uint8Array;
                    }): _121.SignBytes;
                };
                HeaderData: {
                    encode(message: _121.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _121.HeaderData;
                };
                ClientStateData: {
                    encode(message: _121.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _121.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _121.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _121.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _121.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _115.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _121.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _121.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _106.State;
                            ordering?: _106.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _121.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _121.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _121.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _121.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _121.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _121.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _121.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _121.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _121.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _122.DataType;
                dataTypeToJSON(object: _122.DataType): string;
                DataType: typeof _122.DataType;
                DataTypeSDKType: typeof _122.DataTypeSDKType;
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
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
                    }): _122.ClientState;
                };
                ConsensusState: {
                    encode(message: _122.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _122.ConsensusState;
                };
                Header: {
                    encode(message: _122.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _122.Header;
                };
                Misbehaviour: {
                    encode(message: _122.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _122.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _122.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _122.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _122.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _122.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _122.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _122.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _122.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _122.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _122.DataType;
                        data?: Uint8Array;
                    }): _122.SignBytes;
                };
                HeaderData: {
                    encode(message: _122.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _122.HeaderData;
                };
                ClientStateData: {
                    encode(message: _122.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _122.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _122.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _122.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _122.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _115.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _122.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _122.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _106.State;
                            ordering?: _106.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _122.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _122.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _122.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _122.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _122.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _122.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _122.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _122.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _122.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
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
                    }): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _123.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header_1?: {
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
                        header_2?: {
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
                    }): _123.Misbehaviour;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
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
                    }): _123.Header;
                };
                Fraction: {
                    encode(message: _123.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Fraction;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _123.Fraction;
                };
            };
        }
    }
}
