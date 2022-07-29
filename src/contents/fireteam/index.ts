import { request } from "../../adapters/http-request";
import {
  formatQueryStrings,
  parseAuthenticationHeaders,
} from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { DestinyActivityModeType } from "../../types/enum";
import { Tokens } from "../../types/general";
import {
  FireteamResponse,
  SearchResultOfFireteamResponse,
  SearchResultOfFireteamSummary,
} from "../../types/interface";

export class Fireteam {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
   * @param groupId The group id of the clan.
   * @returns A count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
   */
  GetActivePrivateClanFireteamCount(
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Fireteam/Clan/${groupId}/ActiveCount/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param groupId The group id of the clan.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param publicOnly Determines public/private filtering.
   * @param slotFilter Filters based on available slots
   * @returns A listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   */
  GetAvailableClanFireteams(
    activityType: DestinyActivityModeType,
    dateRange: string,
    groupId: string,
    page: number,
    platform: string,
    publicOnly: string,
    slotFilter: string,
    queryString?: { langFilter: string },
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfFireteamSummary>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Clan/${groupId}/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${publicOnly}/${page}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all public fireteams starting now with open slots.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param slotFilter The platform filter.
   * @returns A listing of all public fireteams starting now with open slots.
   */
  SearchPublicAvailableClanFireteams(
    activityType: DestinyActivityModeType,
    dateRange: string,
    page: number,
    platform: string,
    slotFilter: string,
    queryString?: { langFilter: string },
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfFireteamSummary>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Search/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${page}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
   * @param groupId The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
   * @param includeClosed If true, return fireteams that have been closed.
   * @param page Deprecated parameter, ignored.
   * @param platform The platform filter.
   * @returns A listing of all fireteams that caller is an applicant, a member, or an alternate of.
   */
  GetMyClanFireteams(
    groupId: string,
    includeClosed: boolean,
    page: number,
    platform: string,
    queryString?: { groupFilter?: boolean; langFilter?: string },
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfFireteamResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Clan/${groupId}/My/${platform}/${includeClosed}/${page}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a specific fireteam.
   * @param fireteamId The unique id of the fireteam.
   * @param groupId The group id of the clan.
   * @returns Gets a specific fireteam.
   */
  GetClanFireteam(
    fireteamId: string,
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<FireteamResponse>> {
    const requestURL = `${this.url}/Fireteam/Clan/${groupId}/Summary/${fireteamId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }
}
