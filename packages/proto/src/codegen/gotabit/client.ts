import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as gotabitInboxV1beta1TxRegistry from "./inbox/v1beta1/tx.registry";
import * as gotabitInboxV1beta1TxAmino from "./inbox/v1beta1/tx.amino";
export const gotabitAminoConverters = { ...gotabitInboxV1beta1TxAmino.AminoConverter
};
export const gotabitProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...gotabitInboxV1beta1TxRegistry.registry];
export const getSigningGotabitClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...gotabitProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...gotabitAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningGotabitClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGotabitClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};