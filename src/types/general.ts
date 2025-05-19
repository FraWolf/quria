import { RequestHandler } from "../adapters";

export interface Options {
  API_KEY: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  REDIRECT_URI?: string;
  HOST?: string;
  USER_AGENT?: CustomUserAgent;
  FETCHER?: RequestHandler;
}

export interface ClientOptions {
  host: string;
  urls: {
    api: string;
    authorization: string;
    token: string;
  };
  app: {
    client_id?: string;
    client_secret?: string;
    redirect_uri?: string;
  };
  headers: {
    "X-API-Key": string;
    "User-Agent"?: string;
  };
}

export interface ITokens {
  access_token?: string;
  refresh_token?: string;
}

export type CustomUserAgent =
  | string
  | { APP_ID: string | number; APP_NAME: string; APP_VERSION: string | number; CONTACT_WEBSITE?: string }
  | {
      APP_ID: string | number;
      APP_NAME: string;
      APP_VERSION: string | number;
      CONTACT_WEBSITE: string;
      CONTACT_MAIL: string;
    };
