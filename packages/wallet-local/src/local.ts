import { fromHex, toHex } from '@cosmjs/encoding';
import {
  StdSignDoc,
  StdSignature,
  Secp256k1HdWallet,
  AminoSignResponse,
  Secp256k1Wallet,
} from '@cosmjs/amino';
import { stringToPath } from '@cosmjs/crypto';
import {
  AccountData,
  DirectSecp256k1HdWallet,
  DirectSignResponse,
  DirectSecp256k1Wallet,
} from '@cosmjs/proto-signing';
import { getEncryptParams } from '@gotabit/crypto';
import {
  SignDoc,
  ICosmosWallet,
  WalletType,
  ChainConfig,
  getChainConfig,
  ConfigTypeEnum,
  signArbitraryWithWallet,
  DEFAULT_ADDRESS_PREFIX,
  DEFAULT_HD_PATH,
} from '@gotabit/wallet-core';

export type WalletGenerateLength = 12 | 15 | 18 | 21 | 24;

/**
 * Types
 */
interface CommonInitArguments {
  path?: string;
  prefix?: string;
}

interface MnemonicArguments extends CommonInitArguments {
  mnemonic: string;
  password?: string;
}

interface WalletGenerateArguments extends CommonInitArguments {
  walletGenerateLength: WalletGenerateLength;
}

interface PasswordArguments extends CommonInitArguments {
  password: string;
  serialization: string;
}

interface PrivateKeyArguments extends CommonInitArguments {
  privateKey: string;
}

type DirectSigner = DirectSecp256k1HdWallet | DirectSecp256k1Wallet;

type AminoSigner = Secp256k1HdWallet | Secp256k1Wallet;
/**
 * Library
 */
export class LocalWallet implements ICosmosWallet {
  public readonly chainConfig: ChainConfig;

  private mnemonic: string;

  private privateKey: string;

  public directSigner: DirectSigner;

  public aminoSigner: AminoSigner;

  public type: WalletType;

  private constructor({
    mnemonic,
    privateKey,
    directSigner,
    aminoSigner,
  }: {
    mnemonic: string;
    privateKey: string;
    directSigner: DirectSigner;
    aminoSigner: AminoSigner;
  }) {
    this.mnemonic = mnemonic;
    this.privateKey = privateKey;
    this.directSigner = directSigner;
    this.aminoSigner = aminoSigner;
    this.type = 'local';
    this.chainConfig = getChainConfig(ConfigTypeEnum.ConfigLocal);
  }

  static async init({
    path,
    prefix,
    ...args
  }:
    | MnemonicArguments
    | PasswordArguments
    | PrivateKeyArguments
    | WalletGenerateArguments) {
    const { walletGenerateLength } = args as WalletGenerateArguments;
    const { mnemonic } = args as MnemonicArguments;
    const password = (args as PasswordArguments)?.password;
    const { serialization } = args as PasswordArguments;
    const { privateKey } = args as PrivateKeyArguments;
    const prefixVal = prefix ?? DEFAULT_ADDRESS_PREFIX;

    const options = {
      hdPaths: [stringToPath(path ?? DEFAULT_HD_PATH)],
      prefix: prefixVal,
      bip39Password: password,
    };

    if (
      (!serialization || !password) &&
      !mnemonic &&
      !privateKey &&
      !walletGenerateLength
    )
      throw new Error(
        'Please init with mnemonic, walletGenerateLength, private key or encryption key with password!'
      );

    let directSigner: DirectSigner;
    let aminoSigner: AminoSigner;

    if (mnemonic) {
      directSigner = await DirectSecp256k1HdWallet.fromMnemonic(
        mnemonic,
        options
      );
      aminoSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, options);
    } else if (walletGenerateLength) {
      directSigner = await DirectSecp256k1HdWallet.generate(
        walletGenerateLength,
        options
      );
      aminoSigner = await Secp256k1HdWallet.generate(
        walletGenerateLength,
        options
      );
    } else if (privateKey) {
      directSigner = await DirectSecp256k1Wallet.fromKey(
        fromHex(privateKey),
        prefixVal
      );
      aminoSigner = await Secp256k1Wallet.fromKey(
        fromHex(privateKey),
        prefixVal
      );
    } else {
      directSigner = await DirectSecp256k1HdWallet.deserialize(
        serialization,
        password
      );
      aminoSigner = await Secp256k1HdWallet.deserialize(
        serialization,
        password
      );
    }

    return new LocalWallet({ mnemonic, privateKey, directSigner, aminoSigner });
  }

  public getMnemonic() {
    return (
      this.mnemonic || (this.directSigner as DirectSecp256k1HdWallet).mnemonic
    );
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    const accounts = await this.directSigner.getAccounts();

    return accounts;
  }

  public async getAddress() {
    const accounts = await this.directSigner.getAccounts();

    return accounts[0].address;
  }

  public async getSharedKey(method?: 'basic' | 'ecies') {
    const [account] = await this.getAccounts();
    const privKey = await this.getPrivateKey();
    return getEncryptParams(privKey, account.pubkey, method);
  }

  public async signDirect(
    address: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    const sign = await this.directSigner.signDirect(address, signDoc);

    return sign;
  }

  public async signAmino(
    address: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    const sign = await this.aminoSigner.signAmino(address, signDoc);

    return sign;
  }

  public async getPrivateKey(): Promise<string> {
    if (this.privateKey) return this.privateKey;
    const [{ privkey }] = await (
      this.aminoSigner as any
    ).getAccountsWithPrivkeys();

    return toHex(privkey as Uint8Array);
  }

  public async signArbitrary(
    signer: string,
    data: string
  ): Promise<StdSignature> {
    return signArbitraryWithWallet(this, signer, data);
  }
}
