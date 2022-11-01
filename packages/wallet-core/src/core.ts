import {
  AccountData,
  DirectSignResponse,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import { StdSignDoc, AminoSignResponse } from '@cosmjs/amino';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { ChainConfig } from './utils';

export type WalletType = 'local' | 'keplr' | 'gotabit' | 'walletconnect';

export abstract class ICosmosWallet implements OfflineDirectSigner {
  public abstract type: WalletType;

  public abstract chainConfig: ChainConfig;

  public abstract getAccounts(): Promise<readonly AccountData[]>;

  public abstract signDirect(
    address: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse>;

  public abstract signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse>;
}
