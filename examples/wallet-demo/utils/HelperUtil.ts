import { COSMOS_MAINNET_CHAINS, TCosmosChain } from '../data/COSMOSData'

/**
 * Truncates string (in the middle) via given lenght value
 */
export function truncate(value: string, length: number) {
  if (value?.length <= length) {
    return value
  }

  const separator = '...'
  const stringLength = length - separator.length
  const frontLength = Math.ceil(stringLength / 2)
  const backLength = Math.floor(stringLength / 2)

  return (
    value.substring(0, frontLength) +
    separator +
    value.substring(value.length - backLength)
  )
}

/**
 * Get our address from params checking if params string contains one
 * of our wallet addresses
 */
export function getWalletAddressFromParams(addresses: string[], params: any) {
  const paramsString = JSON.stringify(params)
  let address = ''

  addresses.forEach((addr) => {
    if (paramsString.includes(addr)) {
      address = addr
    }
  })

  return address
}

/**
 * Check if chain is part of EIP155 standard
 */
export function isEIP155Chain(chain: string) {
  return chain.includes('eip155')
}

/**
 * Check if chain is part of COSMOS standard
 */
export function isCosmosChain(chain: string) {
  return chain.includes('cosmos')
}

/**
 * Check if chain is part of SOLANA standard
 */
export function isSolanaChain(chain: string) {
  return chain.includes('solana')
}

/**
 * Check if chain is part of POLKADOT standard
 */
export function isPolkadotChain(chain: string) {
  return chain.includes('polkadot')
}

/**
 * Formats chainId to its name
 */
export function formatChainName(chainId: string) {
  return COSMOS_MAINNET_CHAINS[chainId as TCosmosChain]?.name ?? chainId
}
