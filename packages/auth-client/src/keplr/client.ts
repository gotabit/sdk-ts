import {
  GotaBitInitWalletOptions,
  ConfigType,
  verifyAminoSignature,
} from '@gotabit/wallet-core'
import { KeplrWallet } from '@gotabit/wallet-keplr'
import { createMsgSignData } from '@gotabit/messages/dist/cjs/msgSignData'

export class KeplrAuthClient {
  public type: 'keplr'

  public wallet: KeplrWallet

  constructor(wallet: KeplrWallet) {
    this.wallet = wallet
    this.type = 'keplr'
  }

  static async init(
    chainConfig: ConfigType,
    options?: Partial<GotaBitInitWalletOptions> | null,
  ) {
    const wallet = await KeplrWallet.init(chainConfig, options)

    return new KeplrAuthClient(wallet)
  }

  public async loginAndSign(address: string, msgData: string) {
    const msgSignData = createMsgSignData(msgData, address)
    const result = await this.wallet.signAmino(address, msgSignData)

    const isValid = verifyAminoSignature(
      address,
      result.signature.signature,
      msgSignData,
    )

    if (!isValid) throw new Error('Invalid signature')

    return result
  }
}
