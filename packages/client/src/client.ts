import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'

import {
  ICosmosWallet,
  getChainConfig,
  ConfigType,
  ChainConfig,
  DEFAULT_ADDRESS_PREFIX,
} from '@gotabit/wallet-core'

import { GotabitStargateClient } from './stargateclient'
import { GotabitSigningStargateClient } from './signingstargetclient'

export class GotabitClient {
  public readonly wallet: ICosmosWallet | null

  public readonly config: ChainConfig

  private constructor(wallet: ICosmosWallet | null, config: ChainConfig) {
    this.wallet = wallet
    this.config = config
  }

  public static async init(
    wallet: ICosmosWallet | null,
    chainConfig: ConfigType | ChainConfig = 'main',
  ) {
    const config = getChainConfig(chainConfig)

    return new GotabitClient(wallet, config)
  }

  public async stargateClient() {
    return GotabitStargateClient.connect(this.config.rpc)
  }

  public async signStargateClient() {
    if (!this.wallet) {
      throw new Error(
        'Please init client with wallet before using signStargateClient',
      )
    }
    return GotabitSigningStargateClient.connectWithSigner(
      this.config.rpc,
      this.wallet,
      {
        gasPrice: this.config.gasPrices,
      },
    )
  }

  public async wasmClient() {
    return CosmWasmClient.connect(this.config.rpc)
  }

  public async signWasmClient() {
    if (!this.wallet) {
      throw new Error(
        'Please init client with wallet before using signWasmClient',
      )
    }

    return SigningCosmWasmClient.connectWithSigner(
      this.config.rpc,
      this.wallet,
      {
        gasPrice: this.config.gasPrices,
      },
    )
  }
}
