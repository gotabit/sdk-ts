import { NAMESPACE } from './constants';

export function getAddress(cosmosAddress: string): string {
  const [, , address] = cosmosAddress.split(':');
  return address;
}

export function getChainIdWithNameSpace(chainId: string): string {
  return `${NAMESPACE}:${chainId}`;
}
