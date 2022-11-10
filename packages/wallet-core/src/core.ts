import {
  AccountData,
  DirectSignResponse,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import { StdSignDoc, AminoSignResponse } from '@cosmjs/amino';
import { SignDoc } from './types';
import { ChainConfig } from './utils';

export type WalletType =
  | 'local'
  | 'keplr'
  | 'gotabit'
  | 'walletconnect'
  | 'ledger';

export abstract class ICosmosWallet implements OfflineDirectSigner {
  public abstract type: WalletType;

  public abstract chainConfig: ChainConfig;

  public abstract getAccounts(): Promise<readonly AccountData[]>;

  // @ts-ignore
  public abstract signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse>;

  public abstract signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse>;
}
