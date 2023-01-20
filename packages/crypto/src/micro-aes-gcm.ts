/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import * as nodeCrypto from 'crypto';

// Global symbol available in browsers only. Ensure we do not depend on @types/dom
declare const self: Record<string, any> | undefined;
const crypto = {
  node: nodeCrypto,
  web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};

// Caching slows it down 2-3x
function hexToBytes(hex: string): Uint8Array {
  if (typeof hex !== 'string') {
    throw new TypeError(`hexToBytes: expected string, got ${typeof hex}`);
  }
  if (hex.length % 2)
    throw new Error(`hexToBytes: received invalid unpadded hex${hex.length}`);
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error('Invalid byte sequence');
    array[i] = byte;
  }
  return array;
}

// Concatenates several Uint8Arrays into one.
// TODO: check if we're copying data instead of moving it and if that's ok
function concatBytes(...arrays: Uint8Array[]): Uint8Array {
  if (!arrays.every((arr) => arr instanceof Uint8Array))
    throw new Error('Uint8Array list expected');
  if (arrays.length === 1) return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}

const MD = { e: 'AES-GCM', i: { name: 'AES-GCM', length: 256 } };

export async function encrypt(
  sharedKey: Uint8Array,
  plaintext: string | Uint8Array
) {
  if (typeof plaintext === 'string') plaintext = utils.utf8ToBytes(plaintext);
  const iv = utils.randomBytes(12);
  if (crypto.web) {
    const iKey = await crypto.web.subtle.importKey(
      'raw',
      sharedKey,
      MD.i,
      true,
      ['encrypt']
    );
    const cipher = await crypto.web.subtle.encrypt(
      { name: MD.e, iv },
      iKey,
      plaintext
    );
    const ciphertext = new Uint8Array(cipher);
    const encrypted = new Uint8Array(iv.length + ciphertext.byteLength);
    encrypted.set(iv, 0);
    encrypted.set(ciphertext, iv.length);
    return encrypted;
  }
  const cipher = crypto.node.createCipheriv('aes-256-gcm', sharedKey, iv);
  let ciphertext = cipher.update(plaintext, undefined, 'hex');
  ciphertext += cipher.final('hex');
  const ciphertextBytes = hexToBytes(ciphertext);
  const tag = cipher.getAuthTag();
  const encrypted = concatBytes(iv, ciphertextBytes, tag);
  return encrypted;
}

export async function decrypt(
  sharedKey: Uint8Array,
  encoded: string | Uint8Array
) {
  if (typeof encoded === 'string') encoded = hexToBytes(encoded);
  const iv = encoded.slice(0, 12);
  if (crypto.web) {
    const ciphertextWithTag = encoded.slice(12);
    const iKey = await crypto.web.subtle.importKey(
      'raw',
      sharedKey,
      MD.i,
      true,
      ['decrypt']
    );
    const plaintext = await crypto.web.subtle.decrypt(
      { name: MD.e, iv },
      iKey,
      ciphertextWithTag
    );
    return new Uint8Array(plaintext);
  }
  const ciphertext = encoded.slice(12, -16);
  const authTag = encoded.slice(-16);
  const decipher = crypto.node.createDecipheriv('aes-256-gcm', sharedKey, iv);
  decipher.setAuthTag(authTag);
  const plaintext = decipher.update(ciphertext);
  const final = Uint8Array.from(decipher.final());
  const res = concatBytes(plaintext, final);
  return res;
}

declare const TextEncoder: any;
declare const TextDecoder: any;

export const utils = {
  randomBytes: (bytesLength = 32) => {
    if (crypto.web) {
      return crypto.web.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto.node) {
      const { randomBytes } = crypto.node;
      return Uint8Array.from(randomBytes(bytesLength));
    }
    throw new Error("The environment doesn't have randomBytes function");
  },
  bytesToUtf8(bytes: Uint8Array): string {
    return new TextDecoder().decode(bytes);
  },
  utf8ToBytes(string: string): Uint8Array {
    return new TextEncoder().encode(string);
  },
  hexToBytes,
  concatBytes,
};

const aes = { encrypt, decrypt };
export default aes;
