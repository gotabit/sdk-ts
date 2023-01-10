/* eslint-disable no-dupe-class-members */
import { Window as KeplrWindow, KeplrSignOptions } from '@keplr-wallet/types';
import {
  OfflineAminoSigner,
  StdSignature,
  StdSignDoc,
  AccountData,
  AminoSignResponse,
} from '@cosmjs/amino';
import { OfflineDirectSigner, DirectSignResponse } from '@cosmjs/proto-signing';
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

const ASSERT_KEPLR_ERROR =
  'Keplr is not supported or installed on this browser!';

async function keplrSuggest(
  config: GotaBitConfig,
  options: GotaBitWalletOptions
) {
  const {
    chainId,
    chainName,
    rpc,
    rest,
    coinType,
    coinDenom,
    coinMinimalDenom,
    coinDecimals,
    coinGeckoId,
  } = config;

  const { prefix } = options;

  await window.keplr
    ?.experimentalSuggestChain({
      chainId,
      chainName,
      rpc,
      rest,
      bip44: {
        coinType,
      },
      bech32Config: {
        bech32PrefixAccAddr: prefix,
        bech32PrefixAccPub: `${prefix}pub`,
        bech32PrefixValAddr: `${prefix}valoper`,
        bech32PrefixValPub: `${prefix}valoperpub`,
        bech32PrefixConsAddr: `${prefix}valcons`,
        bech32PrefixConsPub: `${prefix}valconspub`,
      },
      currencies: [
        {
          coinDenom,
          coinMinimalDenom,
          coinDecimals,
          coinGeckoId,
        },
      ],
      feeCurrencies: [
        {
          coinDenom,
          coinMinimalDenom,
          coinDecimals,
          coinGeckoId,
        },
      ],
      stakeCurrency: {
        coinDenom,
        coinMinimalDenom,
        coinDecimals,
        coinGeckoId,
      },
      features: ['ibc-transfer', 'cosmwasm', 'ibc-go'],
    })
    .catch(() => {
      throw new Error("Keplr can't experimentalSuggestChain to this chainId!");
    });
}

/**
 * Redeclare the window type, inheriting from the KeplrWindow type
 */
declare global {
  interface Window extends KeplrWindow {}
}

type Signer = OfflineAminoSigner & OfflineDirectSigner;

export class KeplrWallet implements ICosmosWallet {
  public type: WalletType;

  public chainConfig: ChainConfig;

  private signer: Signer;

  private walletOptions: GotaBitWalletOptions;

  public static async init(
    chainConfig: ConfigType | GotaBitConfig,
    option?: Partial<GotaBitInitWalletOptions> | null
  ) {
    if (!window.keplr) {
      throw new Error(ASSERT_KEPLR_ERROR);
    }

    const config = getChainConfig(chainConfig);
    const gotabitOptions = getGotabitOptions(option);

    keplrSuggest(config, gotabitOptions);

    // try to enable keplr with given chainId
    await window.keplr.enable(config.chainId).catch(() => {
      throw new Error("Keplr can't connect to this chainId!");
    });

    // Setup signer
    const signer = window.keplr.getOfflineSigner(config.chainId);

    return new KeplrWallet(signer, config, gotabitOptions);
  }

  private constructor(
    signer: Signer,
    config: ChainConfig,
    walletOptions: GotaBitWalletOptions
  ) {
    this.type = 'keplr';
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
    if (!window.keplr) {
      throw new Error(ASSERT_KEPLR_ERROR);
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

    keplrSuggest(config, gotabitOptions);

    await window.keplr.enable(config.chainId).catch(() => {
      throw new Error("Keplr can't connect to this chainId!");
    });

    // Setup signer
    const signer = window.keplr.getOfflineSigner(config.chainId);

    this.signer = signer;
    this.chainConfig = config;
    this.walletOptions = gotabitOptions;

    return this;
  }

  public async signDirect(
    address: string,
    signDoc: SignDoc,
    keplrSignOptions?: KeplrSignOptions
  ): Promise<DirectSignResponse> {
    const sign = await window.keplr?.signDirect(
      this.chainConfig.chainId,
      address,
      signDoc,
      keplrSignOptions
    );

    return sign as DirectSignResponse;
  }

  public signAmino(
    signerAddress: string,
    signDoc: StdSignDoc,
    keplrSignOptions?: KeplrSignOptions
  ): Promise<AminoSignResponse>;

  public async signAmino(
    address: string,
    signDoc: StdSignDoc,
    keplrSignOptions?: KeplrSignOptions
  ): Promise<AminoSignResponse> {
    const sign = await window.keplr?.signAmino(
      this.chainConfig.chainId,
      address,
      signDoc,
      keplrSignOptions
    );

    return sign as AminoSignResponse;
  }

  public async signArbitrary(
    signer: string,
    data: string
  ): Promise<StdSignature> {
    const signature = await window.keplr?.signArbitrary(
      this.chainConfig.chainId,
      signer,
      data
    );

    return signature as StdSignature;
  }

  public async verifyArbitrary(
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature
  ): Promise<boolean> {
    const result = await window?.keplr?.verifyArbitrary(
      this.chainConfig.chainId,
      signer,
      data,
      signature
    );

    return result as boolean;
  }
}
