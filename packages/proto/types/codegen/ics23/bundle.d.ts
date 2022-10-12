import * as _124 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _124.HashOp;
    hashOpToJSON(object: _124.HashOp): string;
    lengthOpFromJSON(object: any): _124.LengthOp;
    lengthOpToJSON(object: _124.LengthOp): string;
    HashOp: typeof _124.HashOp;
    HashOpSDKType: typeof _124.HashOpSDKType;
    LengthOp: typeof _124.LengthOp;
    LengthOpSDKType: typeof _124.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _124.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _124.HashOp;
                prehashKey?: _124.HashOp;
                prehashValue?: _124.HashOp;
                length?: _124.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _124.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _124.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _124.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _124.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _124.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _124.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _124.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _124.HashOp;
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
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _124.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _124.HashOp;
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
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _124.HashOp;
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
                                hash?: _124.HashOp;
                                prehashKey?: _124.HashOp;
                                prehashValue?: _124.HashOp;
                                length?: _124.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _124.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _124.HashOp;
                                prehashKey?: _124.HashOp;
                                prehashValue?: _124.HashOp;
                                length?: _124.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _124.HashOp;
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
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
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
                                hash?: _124.HashOp;
                                prehashKey?: _124.HashOp;
                                prehashValue?: _124.HashOp;
                                length?: _124.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _124.HashOp;
                                prehashKey?: _124.HashOp;
                                prehashValue?: _124.HashOp;
                                length?: _124.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _124.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _124.CommitmentProof;
    };
    LeafOp: {
        encode(message: _124.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.LeafOp;
        fromPartial(object: {
            hash?: _124.HashOp;
            prehashKey?: _124.HashOp;
            prehashValue?: _124.HashOp;
            length?: _124.LengthOp;
            prefix?: Uint8Array;
        }): _124.LeafOp;
    };
    InnerOp: {
        encode(message: _124.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.InnerOp;
        fromPartial(object: {
            hash?: _124.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _124.InnerOp;
    };
    ProofSpec: {
        encode(message: _124.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _124.HashOp;
                prehashKey?: _124.HashOp;
                prehashValue?: _124.HashOp;
                length?: _124.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _124.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _124.ProofSpec;
    };
    InnerSpec: {
        encode(message: _124.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _124.HashOp;
        }): _124.InnerSpec;
    };
    BatchProof: {
        encode(message: _124.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _124.HashOp;
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
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _124.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _124.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _124.BatchProof;
    };
    BatchEntry: {
        encode(message: _124.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _124.HashOp;
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
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _124.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _124.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _124.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _124.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
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
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _124.HashOp;
                            prehashKey?: _124.HashOp;
                            prehashValue?: _124.HashOp;
                            length?: _124.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _124.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _124.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _124.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
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
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _124.HashOp;
                        prehashKey?: _124.HashOp;
                        prehashValue?: _124.HashOp;
                        length?: _124.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _124.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _124.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _124.HashOp;
                prehashKey?: _124.HashOp;
                prehashValue?: _124.HashOp;
                length?: _124.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _124.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _124.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _124.HashOp;
                    prehashKey?: _124.HashOp;
                    prehashValue?: _124.HashOp;
                    length?: _124.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _124.CompressedNonExistenceProof;
    };
};
