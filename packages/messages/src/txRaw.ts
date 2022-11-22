import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'

export function createTxRaw(
  bodyBytes: Uint8Array,
  authInfoBytes: Uint8Array,
  signatures: Uint8Array[],
) {
  const message = TxRaw.fromPartial({
    bodyBytes,
    authInfoBytes,
    signatures,
  })

  const msgBytes = Uint8Array.from(TxRaw.encode(message).finish())

  return {
    value: msgBytes,
    typeUrl: '/cosmos.tx.v1beta1.TxRaw',
  }
}
