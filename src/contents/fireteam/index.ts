import { parseAuthenticationHeaders, Controller, formatQueryStrings } from "../../adapters";
import {
  ITokens,
  APIResponse,
  FireteamDateRange,
  FireteamPlatform,
  FireteamPublicSearchOption,
  FireteamSlotSearch,
  SearchResultOfFireteamSummary,
  SearchResultOfFireteamResponse,
  FireteamResponse,
} from "../../types";

export class Fireteam {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
   * @param groupId The group id of the clan.
   * @returns Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
   */
  public GetActivePrivateClanFireteamCount(groupId: string, tokens?: ITokens): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Fireteam/Clan/${groupId}/ActiveCount/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param excludeImmediate If you wish the result to exclude immediate fireteams, set this to true. Immediate-only can be forced using the dateRange enum.
   * @param groupId The group id of the clan.
   * @param langFilter An optional language filter.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param publicOnly Determines public/private filtering.
   * @param slotFilter Filters based on available slots
   * @returns Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   */
  public GetAvailableClanFireteams(
    activityType: number,
    dateRange: FireteamDateRange,
    groupId: string,
    page: number,
    platform: FireteamPlatform,
    publicOnly: FireteamPublicSearchOption,
    slotFilter: FireteamSlotSearch,
    queryString: {
      excludeImmediate?: boolean;
      langFilter?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfFireteamSummary>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Clan/${groupId}/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${publicOnly}/${page}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param excludeImmediate If you wish the result to exclude immediate fireteams, set this to true. Immediate-only can be forced using the dateRange enum.
   * @param langFilter An optional language filter.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param slotFilter Filters based on available slots
   * @returns Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
   */
  public SearchPublicAvailableClanFireteams(
    activityType: number,
    dateRange: FireteamDateRange,
    page: number,
    platform: FireteamPlatform,
    slotFilter: FireteamSlotSearch,
    queryString: {
      excludeImmediate?: boolean;
      langFilter?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfFireteamSummary>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Search/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${page}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
   * @param groupFilter If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.
   * @param groupId The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
   * @param includeClosed If true, return fireteams that have been closed.
   * @param langFilter An optional language filter.
   * @param page Deprecated parameter, ignored.
   * @param platform The platform filter.
   * @returns Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
   */
  public GetMyClanFireteams(
    groupId: string,
    includeClosed: boolean,
    page: number,
    platform: FireteamPlatform,
    queryString: {
      groupFilter?: boolean;
      langFilter?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfFireteamResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Fireteam/Clan/${groupId}/My/${platform}/${includeClosed}/${page}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a specific fireteam.
   * @param fireteamId The unique id of the fireteam.
   * @param groupId The group id of the clan.
   * @returns Gets a specific fireteam.
   */
  public GetClanFireteam(fireteamId: string, groupId: string, tokens?: ITokens): Promise<APIResponse<FireteamResponse>> {
    const requestURL = `${this.url}/Fireteam/Clan/${groupId}/Summary/${fireteamId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
