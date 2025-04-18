import { RequestHandler } from "../adapters";

export interface Options {
  API_KEY: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  REDIRECT_URI?: string;
  HOST?: string;
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
  };
}

export interface ITokens {
  access_token?: string;
  refresh_token?: string;
}
