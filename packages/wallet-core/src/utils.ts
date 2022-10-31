import { GasPrice } from '@cosmjs/stargate';
import * as secp from '@noble/secp256k1';
import { pubkeyToAddress, serializeSignDoc, StdSignDoc } from '@cosmjs/amino';

import { stringToPath, sha256 } from '@cosmjs/crypto';
import {
  fromBase64,
  fromHex,
  toBase64,
  toHex,
  fromBech32,
} from '@cosmjs/encoding';
import { makeSignBytes } from '@cosmjs/proto-signing';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';

import {
  TEST_CONFIG,
  LOCAL_CONFIG,
  MAIN_CONFIG,
  DEFAULT_GAS_PRICE,
  DEFAULT_HD_PATH,
  DEFAULT_ADDRESS_PREFIX,
  DEV_CONFIG,
} from './constants';
import {
  ConfigType,
  GotaBitConfig,
  ConfigTypeEnum,
  GotaBitWalletOptions,
  GotaBitInitWalletOptions,
} from './types';

export interface ChainConfig extends GotaBitConfig {
  chainType: ConfigType;
  gasPrices: GasPrice;
}

export function getChainConfig(
  chainConfig: ConfigType | GotaBitConfig
): ChainConfig {
  /**
   * If the type is "local" | "test" | "main"
   * return the defined environment variable
   * @param type
   * @returns
   */
  const getEnvObject = (type: ConfigType) => {
    let currentValue = TEST_CONFIG;
    switch (type) {
      case ConfigTypeEnum.ConfigLocal:
        currentValue = LOCAL_CONFIG;
        break;
      case ConfigTypeEnum.ConfigTest:
        currentValue = TEST_CONFIG;
        break;
      case ConfigTypeEnum.ConfigDev:
        currentValue = DEV_CONFIG;
        break;
      case ConfigTypeEnum.ConfigMain:
        currentValue = MAIN_CONFIG;
        break;
      default:
        currentValue = MAIN_CONFIG;
        break;
    }

    return { ...currentValue, chainType: type };
  };

  const customFormats =
    typeof chainConfig === 'string'
      ? getEnvObject(chainConfig)
      : {
          ...TEST_CONFIG,
          ...chainConfig,
          chainType: ConfigTypeEnum.ConfigTest,
        };

  customFormats.gasPrices =
    typeof customFormats.gasPrices === 'string'
      ? GasPrice.fromString(customFormats.gasPrices || DEFAULT_GAS_PRICE)
      : customFormats.gasPrices;

  return customFormats as ChainConfig;
}

export function getGotabitOptions(
  option?: Partial<GotaBitInitWalletOptions> | null
): GotaBitWalletOptions {
  const mainWalletOptions: GotaBitWalletOptions = {
    bip39Password: option?.bip39Password || '',
    hdPaths: [stringToPath(option?.hdPaths || DEFAULT_HD_PATH)],
    prefix: option?.prefix || DEFAULT_ADDRESS_PREFIX,
  };
  return mainWalletOptions;
}

export function stringifySignDocValues(signDoc: any) {
  return {
    ...signDoc,
    bodyBytes: toHex(signDoc.bodyBytes),
    authInfoBytes: toHex(signDoc.authInfoBytes),
    accountNumber: signDoc.accountNumber.toString(16),
  };
}

export function parseSignDocValues(signDoc: any) {
  return {
    ...signDoc,
    bodyBytes: fromHex(signDoc.bodyBytes),
    authInfoBytes: fromHex(signDoc.authInfoBytes),
    accountNumber: Long.fromString(signDoc.accountNumber, false, 16),
  };
}

export function recoverSigningAddress(
  /** signature with base64 * */
  signature: string,
  hash: string | Uint8Array,
  recoveryIndex: number,
  prefix: string
): string | null {
  if (recoveryIndex > 3) {
    throw new Error('Invalid recovery index');
  }
  try {
    const recoveredPubKey = secp.recoverPublicKey(
      hash,
      fromBase64(signature),
      recoveryIndex,
      true
    );
    return pubkeyToAddress(
      {
        type: 'tendermint/PubKeySecp256k1',
        value: toBase64(recoveredPubKey),
      },
      prefix
    );
  } catch {
    return null;
  }
}

export function verifySignature(
  address: string,
  signature: string,
  hash: string | Uint8Array
): boolean {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    const { prefix } = fromBech32(address);

    const recoveredAddress = recoverSigningAddress(signature, hash, i, prefix);

    if (recoveredAddress === address) {
      return true;
    }
  }

  return false;
}

export const verifyDirectSignature = (
  address: string,
  signature: string,
  signDoc: SignDoc
) => {
  const messageHash = sha256(makeSignBytes(signDoc));
  return verifySignature(address, signature, messageHash);
};

export const verifyAminoSignature = (
  address: string,
  signature: string,
  signDoc: StdSignDoc
) => {
  const messageHash = sha256(serializeSignDoc(signDoc));
  return verifySignature(address, signature, messageHash);
};
