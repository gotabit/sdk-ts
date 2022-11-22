/* eslint-disable no-dupe-class-members */
import { StdSignDoc, AccountData, AminoSignResponse } from '@cosmjs/amino';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import {
  SignDoc,
  ICosmosWallet,
  WalletType,
  GotaBitConfig,
  getGotabitOptions,
  GotaBitWalletOptions,
  ConfigType,
  ChainConfig,
  getChainConfig,
  GotaBitInitWalletOptions,
} from '@gotabit/wallet-core';

const ASSERT_GOTABIT_ERROR = 'Gotabit Wallet is not supported or installed!';

interface Gotabit extends ICosmosWallet {
  readonly version: string;
  enable(chainIds: string | string[]): Promise<void>;
  getOfflineSigner(chainIds: string | string[]): ICosmosWallet;
  getSharedSecret: (
    signerAddress: string,
    pubkey: string,
    method: 'basic' | 'ecies'
  ) => {
    tmpPubKey?: string;
    pubEncrypt?: string;
    encryptKey: string;
  };
}

interface GotabitWindow {
  gotabit?: Gotabit;
}

/**
 * Redeclare the window type, inheriting from the GotabitWindow type
 */
declare global {
  interface Window extends GotabitWindow {}
}

export class GotabitWallet implements ICosmosWallet {
  public type: WalletType;

  public chainConfig: ChainConfig;

  private signer: ICosmosWallet;

  private walletOptions: GotaBitWalletOptions;

  public static async init(
    chainConfig: ConfigType | GotaBitConfig,
    option?: Partial<GotaBitInitWalletOptions> | null
  ): Promise<GotabitWallet>;

  public static async init(
    chainConfig: ConfigType | GotaBitConfig,
    option: Partial<GotaBitInitWalletOptions> | null,
    settings: {
      mobileLink: string;
    }
  ): Promise<undefined>;

  public static async init(
    chainConfig: ConfigType | GotaBitConfig,
    option?: Partial<GotaBitInitWalletOptions> | null,
    settings?: {
      mobileLink?: string;
    }
  ): Promise<GotabitWallet | undefined> {
    if (!window.gotabit) {
      if (settings?.mobileLink) {
        window.open(`gio://web?url=${settings.mobileLink}`);
        return;
      }
      throw new Error(ASSERT_GOTABIT_ERROR);
    }

    const config = getChainConfig(chainConfig);
    const gotabitOptions = getGotabitOptions(option);

    // try to enable gotabit with given chainId
    await window.gotabit.enable(config.chainId).catch(() => {
      throw new Error("Gotabit can't connect to this chainId!");
    });

    // Setup signer
    const signer = window.gotabit.getOfflineSigner(config.chainId);

    return new GotabitWallet(signer, config, gotabitOptions);
  }

  private constructor(
    signer: ICosmosWallet,
    config: ChainConfig,
    walletOptions: GotaBitWalletOptions
  ) {
    this.type = 'gotabit';
    this.signer = signer;
    this.chainConfig = config;
    this.walletOptions = walletOptions;
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    return this.signer.getAccounts();
  }

  public async switchChain(
    chainConfig: ConfigType | GotaBitConfig,
    option?: Partial<GotaBitInitWalletOptions> | null
  ) {
    if (!window.gotabit) {
      throw new Error(ASSERT_GOTABIT_ERROR);
    }

    const config = getChainConfig(chainConfig);
    const gotabitOptions = getGotabitOptions(option);

    const isConfigEqual =
      JSON.stringify(config) === JSON.stringify(this.chainConfig);
    const isOptionsEqual =
      JSON.stringify(gotabitOptions) === JSON.stringify(this.walletOptions);

    if (isConfigEqual && isOptionsEqual) {
      return this;
    }

    await window.gotabit.enable(config.chainId).catch(() => {
      throw new Error("Gotabit can't connect to this chainId!");
    });

    // Setup signer
    const signer = window.gotabit.getOfflineSigner(config.chainId);

    this.signer = signer;
    this.chainConfig = config;
    this.walletOptions = gotabitOptions;

    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public async getSharedSecret(
    signerAddress: string,
    pubkey: string,
    method?: 'basic' | 'ecies'
  ) {
    const result = await (window.gotabit as any)?.getSharedSecret(
      signerAddress,
      pubkey,
      method
    );

    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  public async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    const sign = await window.gotabit?.signDirect(signerAddress, signDoc);

    return sign as DirectSignResponse;
  }

  public signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse>;

  // eslint-disable-next-line class-methods-use-this
  public async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    const sign = await window.gotabit?.signAmino(signerAddress, signDoc);

    return sign as AminoSignResponse;
  }
}
