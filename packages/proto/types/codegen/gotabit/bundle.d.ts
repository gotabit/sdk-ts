import * as _84 from "./epochs/genesis";
import * as _85 from "./epochs/query";
import * as _86 from "./inbox/v1beta1/tx";
import * as _87 from "./mint/v1beta1/genesis";
import * as _88 from "./mint/v1beta1/mint";
import * as _89 from "./mint/v1beta1/query";
export declare namespace gotabit {
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _85.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryEpochsInfoRequest;
                fromPartial(_: {}): _85.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _85.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryEpochsInfoResponse;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _85.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _85.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryCurrentEpochRequest;
                fromPartial(object: {
                    identifier?: string;
                }): _85.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _85.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryCurrentEpochResponse;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _85.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _84.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.EpochInfo;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _84.EpochInfo;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _84.GenesisState;
            };
        };
    }
    const inbox: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                send(value: _86.MsgSend): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                send(value: _86.MsgSend): {
                    typeUrl: string;
                    value: _86.MsgSend;
                };
            };
            fromPartial: {
                send(value: _86.MsgSend): {
                    typeUrl: string;
                    value: _86.MsgSend;
                };
            };
        };
        AminoConverter: {
            "/gotabit.inbox.MsgSend": {
                aminoType: string;
                toAmino: ({ sender, to, topics, message }: _86.MsgSend) => {
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
                }) => _86.MsgSend;
            };
        };
        MsgSend: {
            encode(message: _86.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgSend;
            fromPartial(object: {
                sender?: string;
                to?: string;
                topics?: string;
                message?: string;
            }): _86.MsgSend;
        };
        MsgSendResponse: {
            encode(message: _86.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgSendResponse;
            fromPartial(object: {
                id?: any;
                sender?: string;
                to?: string;
                topics?: string;
                message?: string;
            }): _86.MsgSendResponse;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _89.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsRequest;
                fromPartial(_: {}): _89.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _89.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            ecoFundPool?: string;
                            developerFundPool?: string;
                            communityPool?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: any;
                        ecoFundPoolAddress?: string;
                        developerFundPoolAddress?: string;
                    };
                }): _89.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _89.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _89.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _89.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _89.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _88.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _88.Minter;
            };
            DistributionProportions: {
                encode(message: _88.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    ecoFundPool?: string;
                    developerFundPool?: string;
                    communityPool?: string;
                }): _88.DistributionProportions;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        ecoFundPool?: string;
                        developerFundPool?: string;
                        communityPool?: string;
                    };
                    mintingRewardsDistributionStartEpoch?: any;
                    ecoFundPoolAddress?: string;
                    developerFundPoolAddress?: string;
                }): _88.Params;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            ecoFundPool?: string;
                            developerFundPool?: string;
                            communityPool?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: any;
                        ecoFundPoolAddress?: string;
                        developerFundPoolAddress?: string;
                    };
                    reductionStartedEpoch?: any;
                }): _87.GenesisState;
            };
        };
    }
}
