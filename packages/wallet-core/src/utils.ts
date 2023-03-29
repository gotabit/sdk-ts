import * as secp from '@noble/secp256k1';
import {
  AminoMsg,
  pubkeyToAddress,
  serializeSignDoc,
  StdSignDoc,
  StdSignature,
  makeSignDoc as makeSignDocAmino,
} from '@cosmjs/amino';
import { Decimal } from '@cosmjs/math';
import { stringToPath, sha256 } from '@cosmjs/crypto';
import {
  fromBase64,
  fromHex,
  toBase64,
  toHex,
  fromBech32,
  toAscii,
} from '@cosmjs/encoding';
import { makeSignBytes, AccountData } from '@cosmjs/proto-signing';
import Long from 'long';
import equals from 'fast-deep-equal';

import {
  SignDoc,
  ConfigType,
  GotaBitConfig,
  ConfigTypeEnum,
  GotaBitWalletOptions,
  GotaBitInitWalletOptions,
} from './types';

import {
  TEST_CONFIG,
  LOCAL_CONFIG,
  MAIN_CONFIG,
  DEFAULT_GAS_PRICE,
  DEFAULT_HD_PATH,
  DEFAULT_ADDRESS_PREFIX,
  DEV_CONFIG,
} from './constants';
import { ICosmosWallet } from './core';

/**
 * Denom checker for the Cosmos SDK 0.42 denom pattern
 * (https://github.com/cosmos/cosmos-sdk/blob/v0.42.4/types/coin.go#L599-L601).
 *
 * This is like a regexp but with helpful error messages.
 */
function checkDenom(denom: string): void {
  if (denom.length < 3 || denom.length > 128) {
    throw new Error('Denom must be between 3 and 128 characters');
  }
}

/**
 * A gas price, i.e. the price of a single unit of gas. This is typically a fraction of
 * the smallest fee token unit, such as 0.012utoken.
 */
export class GasPrice {
  public readonly amount: Decimal;

  public readonly denom: string;

  public constructor(amount: Decimal, denom: string) {
    this.amount = amount;
    this.denom = denom;
  }

  /**
   * Parses a gas price formatted as `<amount><denom>`, e.g. `GasPrice.fromString("0.012utoken")`.
   *
   * The denom must match the Cosmos SDK 0.42 pattern (https://github.com/cosmos/cosmos-sdk/blob/v0.42.4/types/coin.go#L599-L601).
   * See `GasPrice` in @cosmjs/stargate for a more generic matcher.
   *
   * Separators are not yet supported.
   */
  public static fromString(gasPrice: string): GasPrice {
    // Use Decimal.fromUserInput and checkDenom for detailed checks and helpful error messages
    const matchResult = gasPrice.match(/^([0-9.]+)([a-z][a-z0-9]*)$/i);
    if (!matchResult) {
      throw new Error('Invalid gas price string');
    }
    const [_, amount, denom] = matchResult;
    checkDenom(denom);
    const fractionalDigits = 18;
    const decimalAmount = Decimal.fromUserInput(amount, fractionalDigits);
    return new GasPrice(decimalAmount, denom);
  }

  /**
   * Returns a string representation of this gas price, e.g. "0.025uatom".
   * This can be used as an input to `GasPrice.fromString`.
   */
  public toString(): string {
    return this.amount.toString() + this.denom;
  }
}

export interface ChainConfig extends GotaBitConfig {
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

    return { ...currentValue };
  };

  const customFormats =
    typeof chainConfig === 'string'
      ? getEnvObject(chainConfig)
      : {
          ...TEST_CONFIG,
          ...chainConfig,
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

const DEFAULT_SIGN_DOC = {
  chainId: '',
  accountNumber: '0',
  sequence: '0',
  fee: {
    gas: '0',
    amount: [],
  },
  memo: '',
};

/**
 * See ADR-036
 */
interface MsgSignData extends AminoMsg {
  readonly type: 'sign/MsgSignData';
  readonly value: {
    /** Bech32 account address */
    signer: string;
    /** Base64 encoded data */
    data: string;
  };
}

function getADR36SignDocAnimo(signer: string, data: string): StdSignDoc {
  const msg: MsgSignData = {
    type: 'sign/MsgSignData',
    value: {
      signer,
      data: toBase64(toAscii(data)),
    },
  };
  return makeSignDocAmino(
    [msg],
    DEFAULT_SIGN_DOC.fee,
    DEFAULT_SIGN_DOC.chainId,
    DEFAULT_SIGN_DOC.memo,
    DEFAULT_SIGN_DOC.accountNumber,
    DEFAULT_SIGN_DOC.sequence
  );
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

export function verifyDirectSignature(
  address: string,
  signature: string,
  signDoc: SignDoc
) {
  const messageHash = sha256(makeSignBytes(signDoc));
  return verifySignature(address, signature, messageHash);
}

export function verifyAminoSignature(
  address: string,
  signature: string,
  signDoc: StdSignDoc
) {
  const messageHash = sha256(serializeSignDoc(signDoc));
  return verifySignature(address, signature, messageHash);
}

export async function verifyArbitrary(
  signer: string,
  data: string,
  signature: StdSignature
) {
  const signDoc = getADR36SignDocAnimo(signer, data);
  const result = verifyAminoSignature(signer, signature.signature, signDoc);

  return result;
}

export async function signArbitraryWithWallet(
  wallet: ICosmosWallet,
  signer: string,
  data: string
): Promise<StdSignature> {
  const accountFromSigner = (await wallet.getAccounts()).find(
    (account: AccountData) => account.address === signer
  );
  if (!accountFromSigner) {
    throw new Error('Failed to retrieve account from signer');
  }
  const signDoc = getADR36SignDocAnimo(signer, data);
  const { signature, signed } = await wallet.signAmino(signer, signDoc);
  if (!equals(signDoc, signed)) {
    throw new Error(
      'The signed document differs from the signing instruction. This is not supported for ADR-036.'
    );
  }

  return signature;
}
