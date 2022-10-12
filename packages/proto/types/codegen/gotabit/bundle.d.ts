import * as _87 from "./epochs/genesis";
import * as _88 from "./epochs/query";
import * as _89 from "./inbox/v1beta1/tx";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
export declare namespace gotabit {
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _88.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryEpochsInfoRequest;
                fromPartial(_: {}): _88.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _88.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryEpochsInfoResponseSDKType;
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
                }): _88.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _88.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCurrentEpochRequest;
                fromPartial(object: {
                    identifier?: string;
                }): _88.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _88.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCurrentEpochResponseSDKType;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _88.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _87.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EpochInfo;
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
                }): _87.EpochInfo;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
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
                }): _87.GenesisState;
            };
        };
    }
    const inbox: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                send(value: _89.MsgSend): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                send(value: _89.MsgSend): {
                    typeUrl: string;
                    value: _89.MsgSend;
                };
            };
            fromPartial: {
                send(value: _89.MsgSend): {
                    typeUrl: string;
                    value: _89.MsgSend;
                };
            };
        };
        AminoConverter: {
            "/gotabit.inbox.MsgSend": {
                aminoType: string;
                toAmino: ({ sender, to, topics, message }: _89.MsgSend) => {
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
                }) => _89.MsgSend;
            };
        };
        MsgSend: {
            encode(message: _89.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSend;
            fromPartial(object: {
                sender?: string;
                to?: string;
                topics?: string;
                message?: string;
            }): _89.MsgSend;
        };
        MsgSendResponse: {
            encode(message: _89.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSendResponseSDKType;
            fromPartial(object: {
                id?: any;
                sender?: string;
                to?: string;
                topics?: string;
                message?: string;
            }): _89.MsgSendResponse;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsRequest;
                fromPartial(_: {}): _92.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsResponseSDKType;
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
                }): _92.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _92.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _92.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _92.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryEpochProvisionsResponseSDKType;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _92.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _91.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _91.Minter;
            };
            DistributionProportions: {
                encode(message: _91.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    ecoFundPool?: string;
                    developerFundPool?: string;
                    communityPool?: string;
                }): _91.DistributionProportions;
            };
            Params: {
                encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
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
                }): _91.Params;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
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
                }): _90.GenesisState;
            };
        };
    }
}
