// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  lobby: (where?: LobbyWhereInput) => Promise<boolean>;
  round: (where?: RoundWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  lobby: (where: LobbyWhereUniqueInput) => LobbyPromise;
  lobbies: (args?: {
    where?: LobbyWhereInput;
    orderBy?: LobbyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Lobby>;
  lobbiesConnection: (args?: {
    where?: LobbyWhereInput;
    orderBy?: LobbyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LobbyConnectionPromise;
  round: (where: RoundWhereUniqueInput) => RoundPromise;
  rounds: (args?: {
    where?: RoundWhereInput;
    orderBy?: RoundOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Round>;
  roundsConnection: (args?: {
    where?: RoundWhereInput;
    orderBy?: RoundOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RoundConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLobby: (data: LobbyCreateInput) => LobbyPromise;
  updateLobby: (args: {
    data: LobbyUpdateInput;
    where: LobbyWhereUniqueInput;
  }) => LobbyPromise;
  updateManyLobbies: (args: {
    data: LobbyUpdateManyMutationInput;
    where?: LobbyWhereInput;
  }) => BatchPayloadPromise;
  upsertLobby: (args: {
    where: LobbyWhereUniqueInput;
    create: LobbyCreateInput;
    update: LobbyUpdateInput;
  }) => LobbyPromise;
  deleteLobby: (where: LobbyWhereUniqueInput) => LobbyPromise;
  deleteManyLobbies: (where?: LobbyWhereInput) => BatchPayloadPromise;
  createRound: (data: RoundCreateInput) => RoundPromise;
  updateRound: (args: {
    data: RoundUpdateInput;
    where: RoundWhereUniqueInput;
  }) => RoundPromise;
  updateManyRounds: (args: {
    data: RoundUpdateManyMutationInput;
    where?: RoundWhereInput;
  }) => BatchPayloadPromise;
  upsertRound: (args: {
    where: RoundWhereUniqueInput;
    create: RoundCreateInput;
    update: RoundUpdateInput;
  }) => RoundPromise;
  deleteRound: (where: RoundWhereUniqueInput) => RoundPromise;
  deleteManyRounds: (where?: RoundWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  lobby: (
    where?: LobbySubscriptionWhereInput
  ) => LobbySubscriptionPayloadSubscription;
  round: (
    where?: RoundSubscriptionWhereInput
  ) => RoundSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type GameState = "WAITING" | "STARTED" | "FINISHED";

export type RoundOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "word1_ASC"
  | "word1_DESC"
  | "word2_ASC"
  | "word2_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type LobbyOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "state_ASC"
  | "state_DESC"
  | "creator_word_ASC"
  | "creator_word_DESC"
  | "partner_word_ASC"
  | "partner_word_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nick_ASC"
  | "nick_DESC"
  | "inLobby_ASC"
  | "inLobby_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type LobbyWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface RoundWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  word1?: String;
  word1_not?: String;
  word1_in?: String[] | String;
  word1_not_in?: String[] | String;
  word1_lt?: String;
  word1_lte?: String;
  word1_gt?: String;
  word1_gte?: String;
  word1_contains?: String;
  word1_not_contains?: String;
  word1_starts_with?: String;
  word1_not_starts_with?: String;
  word1_ends_with?: String;
  word1_not_ends_with?: String;
  word2?: String;
  word2_not?: String;
  word2_in?: String[] | String;
  word2_not_in?: String[] | String;
  word2_lt?: String;
  word2_lte?: String;
  word2_gt?: String;
  word2_gte?: String;
  word2_contains?: String;
  word2_not_contains?: String;
  word2_starts_with?: String;
  word2_not_starts_with?: String;
  word2_ends_with?: String;
  word2_not_ends_with?: String;
  AND?: RoundWhereInput[] | RoundWhereInput;
  OR?: RoundWhereInput[] | RoundWhereInput;
  NOT?: RoundWhereInput[] | RoundWhereInput;
}

export interface LobbyWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  state?: GameState;
  state_not?: GameState;
  state_in?: GameState[] | GameState;
  state_not_in?: GameState[] | GameState;
  creator?: UserWhereInput;
  partner?: UserWhereInput;
  creator_word?: String;
  creator_word_not?: String;
  creator_word_in?: String[] | String;
  creator_word_not_in?: String[] | String;
  creator_word_lt?: String;
  creator_word_lte?: String;
  creator_word_gt?: String;
  creator_word_gte?: String;
  creator_word_contains?: String;
  creator_word_not_contains?: String;
  creator_word_starts_with?: String;
  creator_word_not_starts_with?: String;
  creator_word_ends_with?: String;
  creator_word_not_ends_with?: String;
  partner_word?: String;
  partner_word_not?: String;
  partner_word_in?: String[] | String;
  partner_word_not_in?: String[] | String;
  partner_word_lt?: String;
  partner_word_lte?: String;
  partner_word_gt?: String;
  partner_word_gte?: String;
  partner_word_contains?: String;
  partner_word_not_contains?: String;
  partner_word_starts_with?: String;
  partner_word_not_starts_with?: String;
  partner_word_ends_with?: String;
  partner_word_not_ends_with?: String;
  rounds_every?: RoundWhereInput;
  rounds_some?: RoundWhereInput;
  rounds_none?: RoundWhereInput;
  AND?: LobbyWhereInput[] | LobbyWhereInput;
  OR?: LobbyWhereInput[] | LobbyWhereInput;
  NOT?: LobbyWhereInput[] | LobbyWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  nick?: String;
  nick_not?: String;
  nick_in?: String[] | String;
  nick_not_in?: String[] | String;
  nick_lt?: String;
  nick_lte?: String;
  nick_gt?: String;
  nick_gte?: String;
  nick_contains?: String;
  nick_not_contains?: String;
  nick_starts_with?: String;
  nick_not_starts_with?: String;
  nick_ends_with?: String;
  nick_not_ends_with?: String;
  inLobby?: ID_Input;
  inLobby_not?: ID_Input;
  inLobby_in?: ID_Input[] | ID_Input;
  inLobby_not_in?: ID_Input[] | ID_Input;
  inLobby_lt?: ID_Input;
  inLobby_lte?: ID_Input;
  inLobby_gt?: ID_Input;
  inLobby_gte?: ID_Input;
  inLobby_contains?: ID_Input;
  inLobby_not_contains?: ID_Input;
  inLobby_starts_with?: ID_Input;
  inLobby_not_starts_with?: ID_Input;
  inLobby_ends_with?: ID_Input;
  inLobby_not_ends_with?: ID_Input;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type RoundWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LobbyCreateInput {
  state: GameState;
  creator: UserCreateOneInput;
  partner?: UserCreateOneInput;
  creator_word?: String;
  partner_word?: String;
  rounds?: RoundCreateManyInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  nick: String;
  inLobby?: ID_Input;
}

export interface RoundCreateManyInput {
  create?: RoundCreateInput[] | RoundCreateInput;
  connect?: RoundWhereUniqueInput[] | RoundWhereUniqueInput;
}

export interface RoundCreateInput {
  word1: String;
  word2: String;
}

export interface LobbyUpdateInput {
  state?: GameState;
  creator?: UserUpdateOneRequiredInput;
  partner?: UserUpdateOneInput;
  creator_word?: String;
  partner_word?: String;
  rounds?: RoundUpdateManyInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateDataInput {
  nick?: String;
  inLobby?: ID_Input;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpdateOneInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface RoundUpdateManyInput {
  create?: RoundCreateInput[] | RoundCreateInput;
  update?:
    | RoundUpdateWithWhereUniqueNestedInput[]
    | RoundUpdateWithWhereUniqueNestedInput;
  upsert?:
    | RoundUpsertWithWhereUniqueNestedInput[]
    | RoundUpsertWithWhereUniqueNestedInput;
  delete?: RoundWhereUniqueInput[] | RoundWhereUniqueInput;
  connect?: RoundWhereUniqueInput[] | RoundWhereUniqueInput;
  disconnect?: RoundWhereUniqueInput[] | RoundWhereUniqueInput;
  deleteMany?: RoundScalarWhereInput[] | RoundScalarWhereInput;
  updateMany?:
    | RoundUpdateManyWithWhereNestedInput[]
    | RoundUpdateManyWithWhereNestedInput;
}

export interface RoundUpdateWithWhereUniqueNestedInput {
  where: RoundWhereUniqueInput;
  data: RoundUpdateDataInput;
}

export interface RoundUpdateDataInput {
  word1?: String;
  word2?: String;
}

export interface RoundUpsertWithWhereUniqueNestedInput {
  where: RoundWhereUniqueInput;
  update: RoundUpdateDataInput;
  create: RoundCreateInput;
}

export interface RoundScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  word1?: String;
  word1_not?: String;
  word1_in?: String[] | String;
  word1_not_in?: String[] | String;
  word1_lt?: String;
  word1_lte?: String;
  word1_gt?: String;
  word1_gte?: String;
  word1_contains?: String;
  word1_not_contains?: String;
  word1_starts_with?: String;
  word1_not_starts_with?: String;
  word1_ends_with?: String;
  word1_not_ends_with?: String;
  word2?: String;
  word2_not?: String;
  word2_in?: String[] | String;
  word2_not_in?: String[] | String;
  word2_lt?: String;
  word2_lte?: String;
  word2_gt?: String;
  word2_gte?: String;
  word2_contains?: String;
  word2_not_contains?: String;
  word2_starts_with?: String;
  word2_not_starts_with?: String;
  word2_ends_with?: String;
  word2_not_ends_with?: String;
  AND?: RoundScalarWhereInput[] | RoundScalarWhereInput;
  OR?: RoundScalarWhereInput[] | RoundScalarWhereInput;
  NOT?: RoundScalarWhereInput[] | RoundScalarWhereInput;
}

export interface RoundUpdateManyWithWhereNestedInput {
  where: RoundScalarWhereInput;
  data: RoundUpdateManyDataInput;
}

export interface RoundUpdateManyDataInput {
  word1?: String;
  word2?: String;
}

export interface LobbyUpdateManyMutationInput {
  state?: GameState;
  creator_word?: String;
  partner_word?: String;
}

export interface RoundUpdateInput {
  word1?: String;
  word2?: String;
}

export interface RoundUpdateManyMutationInput {
  word1?: String;
  word2?: String;
}

export interface UserUpdateInput {
  nick?: String;
  inLobby?: ID_Input;
}

export interface UserUpdateManyMutationInput {
  nick?: String;
  inLobby?: ID_Input;
}

export interface LobbySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LobbyWhereInput;
  AND?: LobbySubscriptionWhereInput[] | LobbySubscriptionWhereInput;
  OR?: LobbySubscriptionWhereInput[] | LobbySubscriptionWhereInput;
  NOT?: LobbySubscriptionWhereInput[] | LobbySubscriptionWhereInput;
}

export interface RoundSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RoundWhereInput;
  AND?: RoundSubscriptionWhereInput[] | RoundSubscriptionWhereInput;
  OR?: RoundSubscriptionWhereInput[] | RoundSubscriptionWhereInput;
  NOT?: RoundSubscriptionWhereInput[] | RoundSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Lobby {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  state: GameState;
  creator_word?: String;
  partner_word?: String;
}

export interface LobbyPromise extends Promise<Lobby>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  state: () => Promise<GameState>;
  creator: <T = UserPromise>() => T;
  partner: <T = UserPromise>() => T;
  creator_word: () => Promise<String>;
  partner_word: () => Promise<String>;
  rounds: <T = FragmentableArray<Round>>(args?: {
    where?: RoundWhereInput;
    orderBy?: RoundOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface LobbySubscription
  extends Promise<AsyncIterator<Lobby>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  state: () => Promise<AsyncIterator<GameState>>;
  creator: <T = UserSubscription>() => T;
  partner: <T = UserSubscription>() => T;
  creator_word: () => Promise<AsyncIterator<String>>;
  partner_word: () => Promise<AsyncIterator<String>>;
  rounds: <T = Promise<AsyncIterator<RoundSubscription>>>(args?: {
    where?: RoundWhereInput;
    orderBy?: RoundOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface User {
  id: ID_Output;
  nick: String;
  inLobby?: ID_Output;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  nick: () => Promise<String>;
  inLobby: () => Promise<ID_Output>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nick: () => Promise<AsyncIterator<String>>;
  inLobby: () => Promise<AsyncIterator<ID_Output>>;
}

export interface Round {
  id: ID_Output;
  word1: String;
  word2: String;
}

export interface RoundPromise extends Promise<Round>, Fragmentable {
  id: () => Promise<ID_Output>;
  word1: () => Promise<String>;
  word2: () => Promise<String>;
}

export interface RoundSubscription
  extends Promise<AsyncIterator<Round>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  word1: () => Promise<AsyncIterator<String>>;
  word2: () => Promise<AsyncIterator<String>>;
}

export interface LobbyConnection {}

export interface LobbyConnectionPromise
  extends Promise<LobbyConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LobbyEdge>>() => T;
  aggregate: <T = AggregateLobbyPromise>() => T;
}

export interface LobbyConnectionSubscription
  extends Promise<AsyncIterator<LobbyConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LobbyEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLobbySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LobbyEdge {
  cursor: String;
}

export interface LobbyEdgePromise extends Promise<LobbyEdge>, Fragmentable {
  node: <T = LobbyPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LobbyEdgeSubscription
  extends Promise<AsyncIterator<LobbyEdge>>,
    Fragmentable {
  node: <T = LobbySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLobby {
  count: Int;
}

export interface AggregateLobbyPromise
  extends Promise<AggregateLobby>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLobbySubscription
  extends Promise<AsyncIterator<AggregateLobby>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RoundConnection {}

export interface RoundConnectionPromise
  extends Promise<RoundConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RoundEdge>>() => T;
  aggregate: <T = AggregateRoundPromise>() => T;
}

export interface RoundConnectionSubscription
  extends Promise<AsyncIterator<RoundConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoundEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoundSubscription>() => T;
}

export interface RoundEdge {
  cursor: String;
}

export interface RoundEdgePromise extends Promise<RoundEdge>, Fragmentable {
  node: <T = RoundPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RoundEdgeSubscription
  extends Promise<AsyncIterator<RoundEdge>>,
    Fragmentable {
  node: <T = RoundSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRound {
  count: Int;
}

export interface AggregateRoundPromise
  extends Promise<AggregateRound>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoundSubscription
  extends Promise<AsyncIterator<AggregateRound>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LobbySubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface LobbySubscriptionPayloadPromise
  extends Promise<LobbySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LobbyPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LobbyPreviousValuesPromise>() => T;
}

export interface LobbySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LobbySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LobbySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LobbyPreviousValuesSubscription>() => T;
}

export interface LobbyPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  state: GameState;
  creator_word?: String;
  partner_word?: String;
}

export interface LobbyPreviousValuesPromise
  extends Promise<LobbyPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  state: () => Promise<GameState>;
  creator_word: () => Promise<String>;
  partner_word: () => Promise<String>;
}

export interface LobbyPreviousValuesSubscription
  extends Promise<AsyncIterator<LobbyPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  state: () => Promise<AsyncIterator<GameState>>;
  creator_word: () => Promise<AsyncIterator<String>>;
  partner_word: () => Promise<AsyncIterator<String>>;
}

export interface RoundSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface RoundSubscriptionPayloadPromise
  extends Promise<RoundSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RoundPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RoundPreviousValuesPromise>() => T;
}

export interface RoundSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoundSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoundSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RoundPreviousValuesSubscription>() => T;
}

export interface RoundPreviousValues {
  id: ID_Output;
  word1: String;
  word2: String;
}

export interface RoundPreviousValuesPromise
  extends Promise<RoundPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  word1: () => Promise<String>;
  word2: () => Promise<String>;
}

export interface RoundPreviousValuesSubscription
  extends Promise<AsyncIterator<RoundPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  word1: () => Promise<AsyncIterator<String>>;
  word2: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  nick: String;
  inLobby?: ID_Output;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nick: () => Promise<String>;
  inLobby: () => Promise<ID_Output>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nick: () => Promise<AsyncIterator<String>>;
  inLobby: () => Promise<AsyncIterator<ID_Output>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "GameState",
    embedded: false
  },
  {
    name: "Lobby",
    embedded: false
  },
  {
    name: "Round",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
