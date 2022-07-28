import { request } from "../../adapters/http-request";
import { parseAuthenticationHeaders } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { BungieMembershipType } from "../../types/enum";
import { Tokens } from "../../types/general";
import {
  GeneralUser,
  GetCredentialTypesForAccountResponse,
  HardLinkedUserMembership,
  UserMembershipData,
  UserSearchPrefixRequest,
  UserSearchResponse,
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
   * @param tokens The optional tokens that can be applied.
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
   * @param tokens The optional tokens that can be applied.
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
   * @param tokens The optional tokens that can be applied.
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

  /**
   * Returns a list of accounts associated with the supplied membership ID and membership type.
   * @param membershipId The membership ID of the target user.
   * @param membershipType The types of membership the Accounts system supports.
   * @param tokens The optional tokens that can be applied.
   * @returns A list of accounts associated with the supplied membership ID and membership type.
   */
  GetMembershipDataById(
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<UserMembershipData>> {
    const requestURL = `${this.url}/User/GetMembershipsById/${membershipId}/${membershipType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of accounts associated with signed in user.
   * @returns A list of accounts associated with signed in user.
   */
  GetMembershipDataForCurrentUser(
    tokens?: Tokens
  ): Promise<APIResponse<UserMembershipData>> {
    const requestURL = `${this.url}/User/GetMembershipsForCurrentUser/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets any hard linked membership given a credential.
   * @param credential The credential to look up. Must be a valid SteamID64.
   * @param crType The credential type. 'SteamId' is the only valid value at present.
   * @param tokens The optional tokens that can be applied.
   * @returns Any hard linked membership given a credential.
   */
  GetMembershipFromHardLinkedCredential(
    credential: string,
    crType: string,
    tokens?: Tokens
  ): Promise<APIResponse<HardLinkedUserMembership>> {
    const requestURL = `${this.url}/User/GetMembershipFromHardLinkedCredential/${crType}/${credential}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * @deprecated Do not use this to search users, use SearchByGlobalNamePost instead.
   */
  SearchByGlobalNamePrefix(
    displayNamePrefix: string,
    page: number,
    tokens?: Tokens
  ): Promise<APIResponse<UserSearchResponse>> {
    const requestURL = `${this.url}/User/Search/Prefix/${displayNamePrefix}/${page}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Given the prefix of a global display name, returns all users who share that name.
   * @param page The zero-based page of results you desire.
   * @param displayNamePrefix
   * @param tokens The optional tokens that can be applied.
   * @returns The prefix of a global display name, returns all users who share that name.
   */
  SearchByGlobalNamePost(
    page: number,
    displayNamePrefix: string,
    tokens?: Tokens
  ): Promise<APIResponse<UserSearchResponse>> {
    const requestURL = `${this.url}/User/Search/GlobalName/${page}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: UserSearchPrefixRequest = {
      displayNamePrefix,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }
}
