import { LocalWallet } from '../src';
import {
  formatDirectSignDoc,
  verifyAminoSignature,
  verifyDirectSignature,
} from '../src/helpers/utils';
import { COSMOS_ADDRESS_PREFIX } from '../src/constants/cosmos';
import {
  TEST_COSMOS_ADDRESS,
  TEST_COSMOS_AMINO_SIGNATURE,
  TEST_COSMOS_CHAIN_REFERENCE,
  TEST_COSMOS_DIRECT_SIGNATURE,
  TEST_COSMOS_INPUTS,
  TEST_COSMOS_KEYPAIR,
  TEST_MNEMONIC,
  TEST_HD_PATH,
} from './shared';
import { TxBody } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

describe('Wallet', () => {
  let wallet: LocalWallet;

  beforeAll(async () => {
    wallet = await LocalWallet.init({
      mnemonic: TEST_MNEMONIC,
      path: TEST_HD_PATH,
      prefix: COSMOS_ADDRESS_PREFIX.gotabit,
    });
  });

  it('getAccounts', async () => {
    const result = await wallet.getAccounts();

    expect(result).toBeTruthy();
    expect(result[0].address).toEqual(TEST_COSMOS_ADDRESS);
    expect(result[0].algo).toEqual('secp256k1');
  });

  it('signDirect', async () => {
    const chainId = TEST_COSMOS_CHAIN_REFERENCE;
    const signerAddress = TEST_COSMOS_ADDRESS;
    const { fee, pubkey, gasLimit, accountNumber, sequence, bodyBytes } =
      TEST_COSMOS_INPUTS.direct;

    const signDoc = formatDirectSignDoc(
      fee,
      pubkey,
      gasLimit,
      accountNumber,
      sequence,
      bodyBytes,
      chainId
    );
    const result = await wallet.signDirect(signerAddress, signDoc);

    // console.log('-----body', TxBody.fromPartial({
    //   messages: {

    //   }
    // }));

    // expect(
    //   verifyDirectSignature(signerAddress, result.signature.signature, signDoc)
    // ).toBeTruthy();
    // expect(result).toBeTruthy();
    // expect(result.signature.signature).toEqual(TEST_COSMOS_DIRECT_SIGNATURE);
  });

  // it('signAmino', async () => {
  //   const signerAddress = TEST_COSMOS_ADDRESS;
  //   const signDoc = TEST_COSMOS_INPUTS.amino;
  //   const result = await wallet.signAmino(signerAddress, signDoc);
  //   expect(
  //     verifyAminoSignature(signerAddress, result.signature.signature, signDoc)
  //   ).toBeTruthy();
  //   expect(result).toBeTruthy();
  //   expect(result.signature.signature).toEqual(TEST_COSMOS_AMINO_SIGNATURE);
  // });
});
