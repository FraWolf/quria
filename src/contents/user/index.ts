import { request } from "../../adapters/http-request";
import { parseAuthenticationHeaders } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { Tokens } from "../../types/general";
import {
  GeneralUser,
  GetCredentialTypesForAccountResponse,
  UserTheme,
} from "../../types/interface";

export class User {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Loads a bungienet user by membership id.
   * @param id The requested Bungie.net membership id.
   * @returns A bungienet user by membership id.
   */
  GetBungieNetUserById(
    id: string,
    tokens?: Tokens
  ): Promise<APIResponse<GeneralUser>> {
    const requestURL = `${this.url}/User/GetBungieNetUserById/${id}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a list of all display names linked to this membership id but sanitized.
   * @param membershipId The requested membership id to load.
   * @returns A list of all display names linked to this membership id but sanitized.
   */
  GetSanitizedPlatformDisplayNames(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/User/GetSanitizedPlatformDisplayNames/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of credential types attached to the requested account.
   * @param membershipId The user's membership id.
   * @returns A list of credential types attached to the requested account.
   */
  GetCredentialTypesForTargetAccount(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<GetCredentialTypesForAccountResponse>> {
    const requestURL = `${this.url}/User/GetCredentialTypesForTargetAccount/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of all available user themes.
   * @returns A list of all available user themes.
   */
  GetAvailableThemes(): Promise<APIResponse<UserTheme>> {
    const requestURL = `${this.url}/User/GetAvailableThemes/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
