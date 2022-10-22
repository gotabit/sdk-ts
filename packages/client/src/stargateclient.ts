import {
  StargateClient,
  QueryClient,
  AuthExtension,
  BankExtension,
  DistributionExtension,
  StakingExtension,
  TxExtension,
  setupAuthExtension,
  setupBankExtension,
  setupDistributionExtension,
  setupStakingExtension,
  setupTxExtension,
  StargateClientOptions,
} from '@cosmjs/stargate'
import { HttpEndpoint, Tendermint34Client } from '@cosmjs/tendermint-rpc'

type QueryExtensionSetup<P> = (base: QueryClient) => P

export class GotabitStargateClient extends StargateClient {
  public static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {},
  ): Promise<GotabitStargateClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new GotabitStargateClient(tmClient, options)
  }

  /** Constructs a QueryClient with 0 extensions */
  public makeQueryClient(): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension

  /** Constructs a QueryClient with 1 extension */
  public makeQueryClient<A extends object>(
    setupExtensionA: QueryExtensionSetup<A>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A

  /** Constructs a QueryClient with 2 extensions */
  public makeQueryClient<A extends object, B extends object>(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B

  /** Constructs a QueryClient with 3 extensions */
  public makeQueryClient<A extends object, B extends object, C extends object>(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C

  /** Constructs a QueryClient with 4 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D

  /** Constructs a QueryClient with 5 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E

  /** Constructs a QueryClient with 6 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F

  /** Constructs a QueryClient with 7 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G

  /** Constructs a QueryClient with 8 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H

  /** Constructs a QueryClient with 9 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I

  /** Constructs a QueryClient with 10 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J

  /** Constructs a QueryClient with 11 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K

  /** Constructs a QueryClient with 12 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L

  /** Constructs a QueryClient with 13 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M

  /** Constructs a QueryClient with 14 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
    N extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
    setupExtensionN: QueryExtensionSetup<N>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M &
    N

  /** Constructs a QueryClient with 15 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
    N extends object,
    O extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
    setupExtensionN: QueryExtensionSetup<N>,
    setupExtensionO: QueryExtensionSetup<O>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M &
    N &
    O

  /** Constructs a QueryClient with 16 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
    N extends object,
    O extends object,
    P extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
    setupExtensionN: QueryExtensionSetup<N>,
    setupExtensionO: QueryExtensionSetup<O>,
    setupExtensionP: QueryExtensionSetup<P>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M &
    N &
    O &
    P

  /** Constructs a QueryClient with 17 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
    N extends object,
    O extends object,
    P extends object,
    Q extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
    setupExtensionN: QueryExtensionSetup<N>,
    setupExtensionO: QueryExtensionSetup<O>,
    setupExtensionP: QueryExtensionSetup<P>,
    setupExtensionQ: QueryExtensionSetup<Q>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M &
    N &
    O &
    P &
    Q

  /** Constructs a QueryClient with 18 extensions */
  public makeQueryClient<
    A extends object,
    B extends object,
    C extends object,
    D extends object,
    E extends object,
    F extends object,
    G extends object,
    H extends object,
    I extends object,
    J extends object,
    K extends object,
    L extends object,
    M extends object,
    N extends object,
    O extends object,
    P extends object,
    Q extends object,
    R extends object,
  >(
    setupExtensionA: QueryExtensionSetup<A>,
    setupExtensionB: QueryExtensionSetup<B>,
    setupExtensionC: QueryExtensionSetup<C>,
    setupExtensionD: QueryExtensionSetup<D>,
    setupExtensionE: QueryExtensionSetup<E>,
    setupExtensionF: QueryExtensionSetup<F>,
    setupExtensionG: QueryExtensionSetup<G>,
    setupExtensionH: QueryExtensionSetup<H>,
    setupExtensionI: QueryExtensionSetup<I>,
    setupExtensionJ: QueryExtensionSetup<J>,
    setupExtensionK: QueryExtensionSetup<K>,
    setupExtensionL: QueryExtensionSetup<L>,
    setupExtensionM: QueryExtensionSetup<M>,
    setupExtensionN: QueryExtensionSetup<N>,
    setupExtensionO: QueryExtensionSetup<O>,
    setupExtensionP: QueryExtensionSetup<P>,
    setupExtensionQ: QueryExtensionSetup<Q>,
    setupExtensionR: QueryExtensionSetup<R>,
  ): QueryClient &
    DistributionExtension &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension &
    A &
    B &
    C &
    D &
    E &
    F &
    G &
    H &
    I &
    J &
    K &
    L &
    M &
    N &
    O &
    P &
    Q &
    R

  public makeQueryClient(
    ...extensionSetups: Array<QueryExtensionSetup<object>>
  ) {
    const extensionSetupsWithBaseExtensions = [
      setupAuthExtension,
      setupBankExtension,
      setupStakingExtension,
      setupTxExtension,
      setupDistributionExtension,
      ...extensionSetups,
    ]

    return (QueryClient as any).withExtensions(
      (this as any).tmClient as Tendermint34Client,
      ...extensionSetupsWithBaseExtensions,
    )
  }
}
