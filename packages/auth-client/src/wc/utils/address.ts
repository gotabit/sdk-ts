export function getDidAddressSegments(signerAddress: string) {
  return signerAddress?.split(':')
}

export function getDidChainId(signerAddress: string) {
  const segments = signerAddress && getDidAddressSegments(signerAddress)
  if (segments) {
    return segments[3]
  }
  return undefined
}

export function getNamespacedDidChainId(signerAddress: string) {
  const segments = signerAddress && getDidAddressSegments(signerAddress)
  if (segments) {
    return `${segments[2]}:${segments[3]}`
  }
  return undefined
}

export function getDidAddress(signerAddress: string) {
  const segments = signerAddress && getDidAddressSegments(signerAddress)
  if (segments) {
    return segments.pop()
  }
  return undefined
}
