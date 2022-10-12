import * as _87 from "./epochs/genesis";
import * as _88 from "./epochs/query";
import * as _89 from "./mint/v1beta1/genesis";
import * as _90 from "./mint/v1beta1/mint";
import * as _91 from "./mint/v1beta1/query";
import * as _92 from "./msg/v1beta1/tx";
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
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                fromPartial(_: {}): _91.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponseSDKType;
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
                }): _91.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _91.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _91.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _91.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochProvisionsResponseSDKType;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _91.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _90.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _90.Minter;
            };
            DistributionProportions: {
                encode(message: _90.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    ecoFundPool?: string;
                    developerFundPool?: string;
                    communityPool?: string;
                }): _90.DistributionProportions;
            };
            Params: {
                encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
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
                }): _90.Params;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState;
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
                }): _89.GenesisState;
            };
        };
    }
    const msg: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                msg(value: _92.MsgMsg): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                msg(value: _92.MsgMsg): {
                    typeUrl: string;
                    value: _92.MsgMsg;
                };
            };
            fromPartial: {
                msg(value: _92.MsgMsg): {
                    typeUrl: string;
                    value: _92.MsgMsg;
                };
            };
        };
        AminoConverter: {
            "/gotabit.msg.MsgMsg": {
                aminoType: string;
                toAmino: ({ sender, from, to, message }: _92.MsgMsg) => {
                    sender: string;
                    from: string;
                    to: string;
                    message: string;
                };
                fromAmino: ({ sender, from, to, message }: {
                    sender: string;
                    from: string;
                    to: string;
                    message: string;
                }) => _92.MsgMsg;
            };
        };
        MsgMsg: {
            encode(message: _92.MsgMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgMsg;
            fromPartial(object: {
                sender?: string;
                from?: string;
                to?: string;
                message?: string;
            }): _92.MsgMsg;
        };
        MsgMsgResponse: {
            encode(message: _92.MsgMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgMsgResponseSDKType;
            fromPartial(object: {
                id?: any;
                from?: string;
                to?: string;
                message?: string;
            }): _92.MsgMsgResponse;
        };
    };
}
