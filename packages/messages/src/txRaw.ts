import { cosmos } from '@gotabit/proto'

const tx = cosmos.tx.v1beta1

export function createTxRaw(
  bodyBytes: Uint8Array,
  authInfoBytes: Uint8Array,
  signatures: Uint8Array[],
) {
  const message = tx.TxRaw.fromPartial({
    bodyBytes,
    authInfoBytes,
    signatures,
  })

  const msgBytes = Uint8Array.from(tx.TxRaw.encode(message).finish())

  return {
    message: msgBytes,
    typeUrl: '/cosmos.tx.v1beta1.TxRaw',
  }
}
