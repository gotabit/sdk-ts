export type ValueOf<T> = T[keyof T]

export interface MessageGenerated {
  message: Uint8Array
  path: string
}
