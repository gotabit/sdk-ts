import * as _121 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _121.HashOp;
    hashOpToJSON(object: _121.HashOp): string;
    lengthOpFromJSON(object: any): _121.LengthOp;
    lengthOpToJSON(object: _121.LengthOp): string;
    HashOp: typeof _121.HashOp;
    HashOpSDKType: typeof _121.HashOpSDKType;
    LengthOp: typeof _121.LengthOp;
    LengthOpSDKType: typeof _121.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _121.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _121.HashOp;
                prehashKey?: _121.HashOp;
                prehashValue?: _121.HashOp;
                length?: _121.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _121.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _121.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _121.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _121.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _121.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _121.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _121.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _121.HashOp;
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
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _121.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _121.HashOp;
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
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _121.HashOp;
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
                                hash?: _121.HashOp;
                                prehashKey?: _121.HashOp;
                                prehashValue?: _121.HashOp;
                                length?: _121.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _121.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _121.HashOp;
                                prehashKey?: _121.HashOp;
                                prehashValue?: _121.HashOp;
                                length?: _121.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _121.HashOp;
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
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
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
                                hash?: _121.HashOp;
                                prehashKey?: _121.HashOp;
                                prehashValue?: _121.HashOp;
                                length?: _121.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _121.HashOp;
                                prehashKey?: _121.HashOp;
                                prehashValue?: _121.HashOp;
                                length?: _121.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _121.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _121.CommitmentProof;
    };
    LeafOp: {
        encode(message: _121.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.LeafOp;
        fromPartial(object: {
            hash?: _121.HashOp;
            prehashKey?: _121.HashOp;
            prehashValue?: _121.HashOp;
            length?: _121.LengthOp;
            prefix?: Uint8Array;
        }): _121.LeafOp;
    };
    InnerOp: {
        encode(message: _121.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InnerOp;
        fromPartial(object: {
            hash?: _121.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _121.InnerOp;
    };
    ProofSpec: {
        encode(message: _121.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _121.HashOp;
                prehashKey?: _121.HashOp;
                prehashValue?: _121.HashOp;
                length?: _121.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _121.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _121.ProofSpec;
    };
    InnerSpec: {
        encode(message: _121.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _121.HashOp;
        }): _121.InnerSpec;
    };
    BatchProof: {
        encode(message: _121.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _121.HashOp;
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
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _121.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _121.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _121.BatchProof;
    };
    BatchEntry: {
        encode(message: _121.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _121.HashOp;
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
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _121.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _121.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _121.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _121.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
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
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _121.HashOp;
                            prehashKey?: _121.HashOp;
                            prehashValue?: _121.HashOp;
                            length?: _121.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _121.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _121.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _121.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
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
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _121.HashOp;
                        prehashKey?: _121.HashOp;
                        prehashValue?: _121.HashOp;
                        length?: _121.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _121.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _121.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _121.HashOp;
                prehashKey?: _121.HashOp;
                prehashValue?: _121.HashOp;
                length?: _121.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _121.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _121.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _121.HashOp;
                    prehashKey?: _121.HashOp;
                    prehashValue?: _121.HashOp;
                    length?: _121.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _121.CompressedNonExistenceProof;
    };
};
