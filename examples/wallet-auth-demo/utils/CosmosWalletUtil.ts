import { LocalWallet } from '@gotabit/wallet-local'
export let wallet1: LocalWallet
export let wallet2: LocalWallet
export let cosmosWallets: Record<string, LocalWallet>
export let cosmosAddresses: string[]

let address1: string
let address2: string

/**
 * Utilities
 */
export async function createOrRestoreCosmosWallet() {
  const mnemonic1 = localStorage.getItem('COSMOS_MNEMONIC_1')
  const mnemonic2 = localStorage.getItem('COSMOS_MNEMONIC_2')

  if (
    mnemonic1 &&
    mnemonic2 &&
    mnemonic1 != 'undefined' &&
    mnemonic2 != 'undefined'
  ) {
    wallet1 = await LocalWallet.init({ mnemonic: mnemonic1 })

    wallet2 = await LocalWallet.init({ mnemonic: mnemonic2 })
  } else {
    wallet1 = await LocalWallet.init({ walletGenerateLength: 12 })
    wallet2 = await LocalWallet.init({ walletGenerateLength: 12 })

    // Don't store mnemonic in local storage in a production project!
    localStorage.setItem('COSMOS_MNEMONIC_1', wallet1.getMnemonic())
    localStorage.setItem('COSMOS_MNEMONIC_2', wallet1.getMnemonic())
  }

  address1 = await wallet1.getAddress()
  address2 = await wallet2.getAddress()

  cosmosWallets = {
    [address1]: wallet1,
    [address2]: wallet2,
  }
  cosmosAddresses = Object.keys(cosmosWallets)

  return {
    cosmosWallets,
    cosmosAddresses,
  }
}
