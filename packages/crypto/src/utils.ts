import { sha256 } from '@cosmjs/crypto';
import * as secp from '@noble/secp256k1';
import { toBase64 } from '@cosmjs/encoding';
import aes from './micro-aes-gcm';

type PrivKey = Uint8Array | string | bigint | number;
type PubKey = Uint8Array | string;

export const getEncryptParams = async (
  privKey: PrivKey,
  pubKey: PubKey,
  method?: 'basic' | 'ecies'
) => {
  const encryptKey = sha256(secp.getSharedSecret(privKey, pubKey));

  if (method === 'basic') {
    return { encryptKey: toBase64(encryptKey) };
  }

  const tmpPrivKey = secp.utils.randomPrivateKey();
  const tmpPubKey = secp.getPublicKey(tmpPrivKey, true);
  const tmpEncryptKey = sha256(secp.getSharedSecret(tmpPrivKey, pubKey));

  if (method === 'ecies') {
    return {
      tmpPubKey: toBase64(tmpPubKey),
      encryptKey: toBase64(tmpEncryptKey),
    };
  }

  const sendPubKey = secp.getPublicKey(privKey, true);
  const pubEncyprt = await aes.encrypt(tmpEncryptKey, sendPubKey);
  return {
    tmpPubKey: toBase64(tmpPubKey),
    sourcePubkey: toBase64(pubEncyprt),
    encryptKey: toBase64(encryptKey),
  };
};
