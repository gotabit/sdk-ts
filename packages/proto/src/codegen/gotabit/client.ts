import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as gotabitMsgV1beta1TxRegistry from "./msg/v1beta1/tx.registry";
import * as gotabitMsgV1beta1TxAmino from "./msg/v1beta1/tx.amino";
export const getSigningGotabitClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...gotabitMsgV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...gotabitMsgV1beta1TxAmino.AminoConverter
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