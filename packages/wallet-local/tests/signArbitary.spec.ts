import { verifyArbitrary } from '@gotabit/wallet-core';
import { LocalWallet } from '../src/local';

const TEST_MNEMONIC =
  'dinner proud piano mention silk plunge forest fold trial duck electric define';

const TEST_ADDRESS = 'gio1tseh0grt8j8klrdunpudflvy9lfn3rl50zdpu8';

const signData = JSON.stringify({
  title: 'Hello gotabit',
});

describe('test signArbitary', () => {
  it('expect to verify succeed', async () => {
    const wallet = await LocalWallet.init({ mnemonic: TEST_MNEMONIC });

    const data = await wallet.signArbitrary(TEST_ADDRESS, signData);

    const result = await verifyArbitrary(TEST_ADDRESS, signData, data);
    expect(result).toBe(true);
  });

  it('expect to verify failed', async () => {
    const wallet = await LocalWallet.init({ mnemonic: TEST_MNEMONIC });

    const address = 'gio1qk5kp54unexsk8ddeq8scmcvzfgdp6rzypl96e';

    try {
      await wallet.signArbitrary(address, signData);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBeTruthy();
    }
  });
});
