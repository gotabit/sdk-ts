import * as _70 from "./wasm/v1/genesis";
import * as _71 from "./wasm/v1/ibc";
import * as _72 from "./wasm/v1/proposal";
import * as _73 from "./wasm/v1/query";
import * as _74 from "./wasm/v1/tx";
import * as _75 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _74.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _74.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _74.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _74.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _74.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _74.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _74.MsgStoreCode): {
                        typeUrl: string;
                        value: _74.MsgStoreCode;
                    };
                    instantiateContract(value: _74.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _74.MsgInstantiateContract;
                    };
                    executeContract(value: _74.MsgExecuteContract): {
                        typeUrl: string;
                        value: _74.MsgExecuteContract;
                    };
                    migrateContract(value: _74.MsgMigrateContract): {
                        typeUrl: string;
                        value: _74.MsgMigrateContract;
                    };
                    updateAdmin(value: _74.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _74.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _74.MsgClearAdmin): {
                        typeUrl: string;
                        value: _74.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _74.MsgStoreCode): {
                        typeUrl: string;
                        value: _74.MsgStoreCode;
                    };
                    instantiateContract(value: _74.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _74.MsgInstantiateContract;
                    };
                    executeContract(value: _74.MsgExecuteContract): {
                        typeUrl: string;
                        value: _74.MsgExecuteContract;
                    };
                    migrateContract(value: _74.MsgMigrateContract): {
                        typeUrl: string;
                        value: _74.MsgMigrateContract;
                    };
                    updateAdmin(value: _74.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _74.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _74.MsgClearAdmin): {
                        typeUrl: string;
                        value: _74.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _74.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _74.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _74.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _74.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _74.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _74.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _74.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _74.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _74.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _74.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _74.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _74.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _75.AccessType;
            accessTypeToJSON(object: _75.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _75.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _75.ContractCodeHistoryOperationType): string;
            AccessType: typeof _75.AccessType;
            AccessTypeSDKType: typeof _75.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _75.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _75.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _75.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.AccessTypeParam;
                fromPartial(object: {
                    value?: _75.AccessType;
                }): _75.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _75.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.AccessConfig;
                fromPartial(object: {
                    permission?: _75.AccessType;
                    address?: string;
                }): _75.AccessConfig;
            };
            Params: {
                encode(message: _75.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Params;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _75.AccessType;
                }): _75.Params;
            };
            CodeInfo: {
                encode(message: _75.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CodeInfo;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                }): _75.CodeInfo;
            };
            ContractInfo: {
                encode(message: _75.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _75.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _75.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _75.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _75.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _75.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.AbsoluteTxPosition;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _75.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _75.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _75.Model;
            };
            MsgStoreCode: {
                encode(message: _74.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                }): _74.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _74.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgStoreCodeResponseSDKType;
                fromPartial(object: {
                    codeId?: any;
                }): _74.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _74.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _74.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _74.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgInstantiateContractResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _74.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _74.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _74.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _74.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgExecuteContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _74.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _74.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _74.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _74.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgMigrateContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _74.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _74.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _74.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _74.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateAdminResponseSDKType;
                fromPartial(_: {}): _74.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _74.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _74.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _74.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgClearAdminResponseSDKType;
                fromPartial(_: {}): _74.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _73.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _73.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _73.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractInfoResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _73.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _73.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _73.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractHistoryResponseSDKType;
                fromPartial(object: {
                    entries?: {
                        operation?: _75.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _73.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractsByCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _73.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryContractsByCodeResponseSDKType;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _73.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _73.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryAllContractStateResponseSDKType;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _73.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _73.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _73.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryRawContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _73.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _73.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _73.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _73.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySmartContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _73.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _73.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                }): _73.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _73.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CodeInfoResponse;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                }): _73.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _73.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryCodeResponseSDKType;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                    };
                    data?: Uint8Array;
                }): _73.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _73.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _73.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryCodesResponseSDKType;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _73.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _73.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryPinnedCodesResponseSDKType;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromPartial(_: {}): _73.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _75.AccessType;
                    };
                }): _73.QueryParamsResponse;
            };
            StoreCodeProposal: {
                encode(message: _72.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                }): _72.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _72.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _72.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _72.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _72.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _72.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _72.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _72.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _72.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _72.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _72.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _72.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _72.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _72.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _72.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _72.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _72.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _72.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.AccessConfigUpdate;
                fromPartial(object: {
                    codeId?: any;
                    instantiatePermission?: {
                        permission?: _75.AccessType;
                        address?: string;
                    };
                }): _72.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _72.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UpdateInstantiateConfigProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: any;
                        instantiatePermission?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                    }[];
                }): _72.UpdateInstantiateConfigProposal;
            };
            MsgIBCSend: {
                encode(message: _71.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _71.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _71.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _71.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _75.AccessType;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _75.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _75.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _70.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _70.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState_GenMsgs;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _70.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _70.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Code;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _75.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _70.Code;
            };
            Contract: {
                encode(message: _70.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Contract;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _70.Contract;
            };
            Sequence: {
                encode(message: _70.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _70.Sequence;
            };
        };
    }
}
