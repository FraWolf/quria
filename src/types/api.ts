export interface APIResponse<T> {
  Response: T;
  ErroreCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: MessageData;
  DetailedErrorTrace: string;
}

export interface MessageData {
  [key: string]: string;
}
