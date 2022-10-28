import { fromBase64, toHex } from '@cosmjs/encoding';
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

import { getAddress, getChainIdWithNameSpace } from './utils';

export class Walletconnect implements ICosmosWallet {
  private accounts: AccountData[];
  public readonly chainConfig: ChainConfig;
  public readonly type: WalletType;
  public readonly client: Client;
  public readonly session: SessionTypes.Struct;
  public readonly chainIdWithNamespace: string;

  private constructor(
    chainConfig: ChainConfig,
    client: Client,
    session: SessionTypes.Struct
  ) {
    this.type = 'walletconnect';
    this.chainConfig = chainConfig;
    this.client = client;
    this.session = session;
    this.chainIdWithNamespace = getChainIdWithNameSpace(chainConfig.chainId);
    this.accounts = [];
  }

  public async getAccountsForced(): Promise<readonly AccountData[]> {
    const accounts = await this.client.request<
      Array<{ address: string; pubKey: string }>
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
    const accountDataList = this.session.namespaces[NAMESPACE].accounts.map(
      (cosmosAddress) => {
        const address = getAddress(cosmosAddress);
        return {
          address,
          algo: 'secp256k1',
          pubkey: fromBase64(
            accounts.find((account) => account.address === address)?.pubKey ??
              ''
          ),
        } as AccountData;
      }
    );

    this.accounts = accountDataList;

    return accountDataList;
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    if (this.accounts?.length) return this.accounts;

    return await this.getAccountsForced();
  }

  public async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    // cosmos_signDirect params
    const params = {
      signerAddress: signerAddress,
      signDoc: stringifySignDocValues(signDoc),
    };
    const result = await this.client.request<StdSignature>({
      topic: this.session.topic,
      chainId: this.chainIdWithNamespace,
      request: {
        method: COSMOS_METHODS.COSMOS_SIGN_DIRECT,
        params: params,
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

    const valid = await verifyAminoSignature(
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
      requiredNamespaces: requiredNamespaces,
    });

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

    return new Walletconnect(chainConfig, client, session);
  }

  public async disconnect() {
    await this.client.disconnect({
      topic: this.session.topic,
      reason: getSdkError('USER_DISCONNECTED'),
    });
  }
}
