import { toUtf8, fromUtf8 } from '@cosmjs/encoding';
import { SafeBotXChaCha20, SafeBotChaCha20 } from '../src/safebot';

describe('safeBotXChaCha20 tests', () => {
  it('should encrypt and decrypt', async () => {
    const text = toUtf8('hello word');
    const encrypted = await SafeBotXChaCha20.encrypt(text, '123456');
    const plaintext = await SafeBotXChaCha20.decrypt(encrypted, '123456');

    expect(fromUtf8(plaintext)).toBe(fromUtf8(text));
  });
});

describe('safeBotChaCha20 tests', () => {
  it('should encrypt and decrypt', async () => {
    const text = toUtf8('hello word');
    const encrypted = await SafeBotChaCha20.encrypt(text, '123456');
    const plaintext = await SafeBotChaCha20.decrypt(encrypted, '123456');

    expect(fromUtf8(plaintext)).toBe(fromUtf8(text));
  });
});
