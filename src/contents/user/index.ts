import { Controller, parseAuthenticationHeaders } from "../../adapters";
import {
  ITokens,
  APIResponse,
  GeneralUser,
  BungieCredentialType,
  GetCredentialTypesForAccountResponse,
  UserTheme,
  BungieMembershipType,
  UserMembershipData,
  HardLinkedUserMembership,
  UserSearchResponse,
  UserSearchPrefixRequest,
} from "../../types";

export class User {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Loads a bungienet user by membership id.
   * @param id The requested Bungie.net membership id.
   * @returns Loads a bungienet user by membership id.
   */
  public GetBungieNetUserById(id: string, tokens?: ITokens): Promise<APIResponse<GeneralUser>> {
    const requestURL = `${this.url}/User/GetBungieNetUserById/${id}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
   * @param membershipId The requested membership id to load.
   * @returns Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
   */
  public GetSanitizedPlatformDisplayNames(
    membershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<Record<BungieCredentialType, string>>> {
    const requestURL = `${this.url}/User/GetSanitizedPlatformDisplayNames/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of credential types attached to the requested account
   * @param membershipId The user's membership id
   * @returns Returns a list of credential types attached to the requested account
   */
  public GetCredentialTypesForTargetAccount(
    membershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<GetCredentialTypesForAccountResponse[]>> {
    const requestURL = `${this.url}/User/GetCredentialTypesForTargetAccount/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of all available user themes.
   
    * @returns Returns a list of all available user themes.
   */
  public GetAvailableThemes(tokens?: ITokens): Promise<APIResponse<UserTheme[]>> {
    const requestURL = `${this.url}/User/GetAvailableThemes/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
   * @param membershipId The membership ID of the target user.
   * @param membershipType Type of the supplied membership ID.
   * @returns Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
   */
  public GetMembershipDataById(
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<UserMembershipData>> {
    const requestURL = `${this.url}/User/GetMembershipsById/${membershipId}/${membershipType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
   
    * @returns Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
   */
  public GetMembershipDataForCurrentUser(tokens?: ITokens): Promise<APIResponse<UserMembershipData>> {
    const requestURL = `${this.url}/User/GetMembershipsForCurrentUser/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
   * @param credential The credential to look up. Must be a valid SteamID64.
   * @param crType The credential type. 'SteamId' is the only valid value at present.
   * @returns Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
   */
  public GetMembershipFromHardLinkedCredential(
    credential: string,
    crType: BungieCredentialType,
    tokens?: ITokens
  ): Promise<APIResponse<HardLinkedUserMembership>> {
    const requestURL = `${this.url}/User/GetMembershipFromHardLinkedCredential/${crType}/${credential}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
   * @param displayNamePrefix The display name prefix you're looking for.
   * @param page The zero-based page of results you desire.
   * @returns [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
   */
  public SearchByGlobalNamePrefix(
    displayNamePrefix: string,
    page: number,
    tokens?: ITokens
  ): Promise<APIResponse<UserSearchResponse>> {
    const requestURL = `${this.url}/User/Search/Prefix/${displayNamePrefix}/${page}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Given the prefix of a global display name, returns all users who share that name.
   * @param page The zero-based page of results you desire.
   * @returns Given the prefix of a global display name, returns all users who share that name.
   */
  public SearchByGlobalNamePost(
    page: number,
    displayNamePrefix: string,
    tokens?: ITokens
  ): Promise<APIResponse<UserSearchResponse>> {
    const requestURL = `${this.url}/User/Search/GlobalName/${page}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: UserSearchPrefixRequest = { displayNamePrefix };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }
}
