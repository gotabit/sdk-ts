import { StargateClient, SigningStargateClient } from '@cosmjs/stargate'
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

export class GotabitClient {
  public readonly wallet: ICosmosWallet
  public readonly config: ChainConfig

  private constructor(wallet: ICosmosWallet, config: ChainConfig) {
    this.wallet = wallet
    this.config = config
  }

  public static async init(
    wallet: ICosmosWallet,
    chainConfig: ConfigType | ChainConfig = 'main',
  ) {
    const config = getChainConfig(chainConfig)

    return new GotabitClient(wallet, config)
  }

  public async stargateClient() {
    return StargateClient.connect(this.config.rpc)
  }

  public async signStargateClient() {
    return SigningStargateClient.connectWithSigner(
      this.config.rpc,
      this.wallet,
      {
        prefix: DEFAULT_ADDRESS_PREFIX,
        gasPrice: this.config.gasPrices,
      },
    )
  }

  public async wasmClient() {
    return CosmWasmClient.connect(this.config.rpc)
  }

  public async signWasmClient() {
    return SigningCosmWasmClient.connectWithSigner(
      this.config.rpc,
      this.wallet,
      {
        prefix: DEFAULT_ADDRESS_PREFIX,
        gasPrice: this.config.gasPrices,
      },
    )
  }
}
