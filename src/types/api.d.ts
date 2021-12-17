export interface APIResponse<T> {
  Response: T;
  ErroreCode: number; // wip
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: MessageData;
  DetailedErrorTrace: string;
}

export interface MessageData {
  [key: string]: string;
}

export const enum MembershipTypes {
  None = 0,
  TigerXbox = 1,
  TigerPsn = 2,
  TigerSteam = 3,
  TigerBlizzard = 4,
  TigerStadia = 5,
  TigerDemon = 10,
  BungieNext = 254,
  All = -1,
}
