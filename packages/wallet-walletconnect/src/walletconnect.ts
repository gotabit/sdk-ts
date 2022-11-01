import { fromBase64 } from '@cosmjs/encoding';
import * as QRCodeModal from '@gotabit/qrcode-modal';
import Client from '@walletconnect/sign-client';
import { getSdkError } from '@walletconnect/utils';
import {
  ProposalTypes,
  SessionTypes,
  SignClientTypes,
} from '@walletconnect/types';
import {
  StdSignDoc,
  StdSignature,
  AccountData,
  AminoSignResponse,
} from '@cosmjs/amino';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import {
  ConfigType,
  ICosmosWallet,
  GotaBitConfig,
  ChainConfig,
  getChainConfig,
  WalletType,
  stringifySignDocValues,
  verifyAminoSignature,
  verifyDirectSignature,
} from '@gotabit/wallet-core';
import { NAMESPACE, COSMOS_METHODS, RELAY_URL } from './constants';

import { getChainIdWithNameSpace } from './utils';

interface Session extends SessionTypes.Struct {
  namespaces: SessionTypes.Namespaces & {
    [x: string]: {
      accountsData: Array<{
        address: string;
        pubkey: string;
      }>;
    };
  };
}

export class Walletconnect implements ICosmosWallet {
  private accounts: AccountData[];

  public readonly chainConfig: ChainConfig;

  public readonly type: WalletType;

  public readonly client: Client;

  public readonly session: Session;

  public readonly chainIdWithNamespace: string;

  private constructor(
    chainConfig: ChainConfig,
    client: Client,
    session: Session
  ) {
    this.type = 'walletconnect';
    this.chainConfig = chainConfig;
    this.client = client;
    this.session = session;
    this.chainIdWithNamespace = getChainIdWithNameSpace(chainConfig.chainId);

    const accountDataList = this.session.namespaces[NAMESPACE].accountsData.map(
      ({ address, pubkey }) =>
        ({
          address,
          algo: 'secp256k1',
          pubkey: fromBase64(pubkey),
        } as AccountData)
    );

    this.accounts = accountDataList;
  }

  public async getAccountsForced(): Promise<readonly AccountData[]> {
    const accounts = await this.client.request<
      Array<{ address: string; pubkey: string }>
    >({
      topic: this.session.topic,
      chainId: this.chainIdWithNamespace,
      request: {
        method: COSMOS_METHODS.COSMOS_GET_ACCOUNTS,
        params: {
          chainId: this.chainIdWithNamespace,
        },
      },
    });

    this.accounts = accounts.map((account) => ({
      address: account.address,
      pubkey: fromBase64(account.pubkey),
      algo: 'secp256k1',
    }));

    return this.accounts;
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    if (this.accounts?.length) return this.accounts;

    return this.getAccountsForced();
  }

  public async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    // cosmos_signDirect params
    const params = {
      signerAddress,
      signDoc: stringifySignDocValues(signDoc),
    };
    const result = await this.client.request<StdSignature>({
      topic: this.session.topic,
      chainId: this.chainIdWithNamespace,
      request: {
        method: COSMOS_METHODS.COSMOS_SIGN_DIRECT,
        params,
      },
    });

    const valid = await verifyDirectSignature(
      signerAddress,
      result.signature,
      signDoc
    );

    if (!valid) throw new Error('Invalid signature');

    return {
      signature: {
        pub_key: result.pub_key,
        signature: result.signature,
      },
      signed: signDoc,
    };
  }

  public async signAmino(
    signerAddress: string,
    stdSignDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    const result = await this.client.request<StdSignature>({
      topic: this.session.topic,
      chainId: this.chainIdWithNamespace,
      request: {
        method: COSMOS_METHODS.COSMOS_SIGN_AMINO,
        params: {
          signerAddress,
          signDoc: stdSignDoc,
        },
      },
    });

    const valid = verifyAminoSignature(
      signerAddress,
      result.signature,
      stdSignDoc
    );

    if (!valid) throw new Error('Invalid signature');

    return {
      signature: {
        pub_key: result.pub_key,
        signature: result.signature,
      },
      signed: stdSignDoc,
    };
  }

  public static async init(
    chain: ConfigType | GotaBitConfig,
    signOpts: SignClientTypes.Options,
    settings?: {
      qrcodeModal?: {
        onClosed?: (...args: any[]) => void;
      };
      onConnected?: (session: SessionTypes.Struct) => void;
    }
  ) {
    const chainConfig = getChainConfig(chain);
    const client = await Client.init(signOpts);

    const requiredNamespaces: ProposalTypes.RequiredNamespaces = {
      cosmos: {
        chains: [`cosmos:${chainConfig.chainId}`],
        methods: Object.values(COSMOS_METHODS),
        events: [],
      },
    };

    const { uri, approval } = await client.connect({
      requiredNamespaces,
    });

    // eslint-disable-next-line no-unused-expressions
    uri &&
      QRCodeModal.open(
        `${uri}&relay-url=${signOpts.relayUrl || RELAY_URL}`,
        (...args: any[]) => {
          settings?.qrcodeModal?.onClosed?.(...args);
        }
      );

    const session = await approval();

    settings?.onConnected?.(session);

    QRCodeModal.close();

    return new Walletconnect(chainConfig, client, session as Session);
  }

  public async disconnect() {
    await this.client.disconnect({
      topic: this.session.topic,
      reason: getSdkError('USER_DISCONNECTED'),
    });
  }
}
