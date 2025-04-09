import { checkRunningEnvironment, formatQueryStrings, Controller } from "../../adapters";
import { TokenError, TokenResponse } from "../../types";

export class OAuth {
  private get environment() {
    return checkRunningEnvironment();
  }

  constructor(
    private authUrl: string,
    private tokenUrl: string,
    private headers: { [key: string]: string },
    private client_id?: string,
    private client_secret?: string
  ) {}

  private btoa(data: string) {
    if (this.environment === "node") {
      return Buffer.from(data).toString("base64");
    } else {
      return btoa(data);
    }
  }

  private encodeCredentials() {
    return this.btoa(`${this.client_id}:${this.client_secret}`);
  }

  /**
   * Generate authorization url with default client id and state.
   * @param {string} state OPTIONAL: String containing some information, particulary for avoid cross site scripting.
   * @returns Authorization url.
   */
  public GenerateAuthorizationURL(state?: string): string {
    return formatQueryStrings(this.authUrl, {
      client_id: this.client_id,
      response_type: "code",
      state,
    });
  }

  public GetOAuthAccessToken(code: string): Promise<TokenResponse | TokenError> {
    return Controller.request(
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

  public RefreshAccessToken(refresh_token: string): Promise<TokenResponse | TokenError> {
    return Controller.request(
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
