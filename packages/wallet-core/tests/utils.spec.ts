// import {
//   Coin,
//   // Secp256k1Wallet
// } from '@cosmjs/amino';
// import { fromHex } from '@cosmjs/encoding';
// import {
//   // DirectSecp256k1Wallet,
//   makeAuthInfoBytes,
//   makeSignDoc,
// } from '@cosmjs/proto-signing';
import { verifySignature } from '../src';
// import { TEST_COSMOS_KEYPAIR } from '../shared';

// import {
//   verifyAminoSignature,
//   verifyDirectSignature,
//   verifySignature,
// } from '../src';
// import {
//   TEST_COSMOS_ADDRESS,
//   TEST_COSMOS_AMINO_SIGNATURE,
//   TEST_COSMOS_CHAIN_REFERENCE,
//   TEST_COSMOS_DIRECT_SIGNATURE,
//   TEST_COSMOS_INPUTS,
//   TEST_COSMOS_KEYPAIR,
// } from '../shared';

const signature =
  'NZVJnBkMnBIAPzw9G4kFYN9vAaAL8HrQIA1m1Uj9U1ccHsvAPxVr0mvBbonLgRvE6cNKCnrkNDiMts8lHOn3dQ==';
const hash = '19de85fd38a62f2e32162079042492098ac60a100c558e04b78a324aee9eb9be';
const address = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8';

// function formatDirectSignDoc(
//   fee: Coin[],
//   pubkey: string,
//   gasLimit: number,
//   accountNumber: number,
//   sequence: number,
//   bodyBytes: string,
//   chainId: string
// ) {
//   const authInfoBytes = makeAuthInfoBytes(
//     [{ pubkey: pubkey as any, sequence }],
//     fee,
//     gasLimit,
//     undefined,
//     undefined
//   );
//   const signDoc = makeSignDoc(
//     fromHex(bodyBytes),
//     authInfoBytes,
//     chainId,
//     accountNumber
//   );
//   return signDoc;
// }

describe('test utils', () => {
  // let aminoSigner: Secp256k1Wallet;
  // let directSigner: DirectSecp256k1Wallet;

  // beforeAll(async () => {
  //   aminoSigner = await Secp256k1Wallet.fromKey(
  //     fromHex(TEST_COSMOS_KEYPAIR.privateKey)
  //   );
  //   directSigner = await DirectSecp256k1Wallet.fromKey(
  //     fromHex(TEST_COSMOS_KEYPAIR.privateKey)
  //   );
  // });

  it('verify signature', async () => {
    expect(verifySignature(address, signature, hash)).toBeTruthy();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('signDirect', async () => {
  //   const chainId = TEST_COSMOS_CHAIN_REFERENCE;
  //   const signerAddress = TEST_COSMOS_ADDRESS;
  //   const { fee, pubkey, gasLimit, accountNumber, sequence, bodyBytes } =
  //     TEST_COSMOS_INPUTS.direct;
  //   const signDoc = formatDirectSignDoc(
  //     fee,
  //     pubkey,
  //     gasLimit,
  //     accountNumber,
  //     sequence,
  //     bodyBytes,
  //     chainId
  //   );
  //   const result = await directSigner.signDirect(signerAddress, signDoc);
  //   expect(
  //     verifyDirectSignature(signerAddress, result.signature.signature, signDoc)
  //   ).toBeTruthy();
  //   expect(result).toBeTruthy();
  //   expect(result.signature.signature).toEqual(TEST_COSMOS_DIRECT_SIGNATURE);
  // });
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('signAmino', async () => {
  //   const signerAddress = TEST_COSMOS_ADDRESS;
  //   const signDoc = TEST_COSMOS_INPUTS.amino;
  //   const result = await aminoSigner.signAmino(signerAddress, signDoc);
  //   expect(
  //     verifyAminoSignature(signerAddress, result.signature.signature, signDoc)
  //   ).toBeTruthy();
  //   expect(result).toBeTruthy();
  //   expect(result.signature.signature).toEqual(TEST_COSMOS_AMINO_SIGNATURE);
  // });
});
