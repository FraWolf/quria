import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import { TokenError, TokenResponse } from "../../types/oauth";

export class OAuth {
  constructor(
    private authUrl: string,
    private tokenUrl: string,
    private headers: { [key: string]: string },
    private client_id?: string,
    private client_secret?: string
  ) {}

  private btoa(data: string) {
    return Buffer.from(data).toString("base64");
  }

  private encodeCredentials() {
    return this.btoa(`${this.client_id}:${this.client_secret}`);
  }

  /**
   * Generate authorization url with default client id and state.
   * @param {string} state OPTIONAL: String containing some information, particulary for avoid cross site scripting.
   * @returns Authorization url.
   */
  GenerateAuthorizationURL(state?: string): string {
    return formatQueryStrings(this.authUrl, {
      client_id: this.client_id,
      response_type: "code",
      state,
    });
  }

  GetOAuthAccessToken(code: string): Promise<TokenResponse | TokenError> {
    return request(
      this.tokenUrl,
      true,
      "POST",
      {
        ...this.headers,
        Authorization: `Basic ${this.encodeCredentials()}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      `grant_type=authorization_code&code=${encodeURIComponent(code)}`
    );
  }

  RefreshAccessToken(refresh_token: string): Promise<TokenResponse | TokenError> {
    return request(
      this.tokenUrl,
      true,
      "POST",
      {
        ...this.headers,
        Authorization: `Basic ${this.encodeCredentials()}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      `grant_type=refresh_token&refresh_token=${refresh_token}`
    );
  }
}
