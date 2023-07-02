import { formatQueryStrings, parseAuthenticationHeaders, request } from "../../adapters";
import { ITokens, APIResponse, ApiUsage, Application } from "../../types";

export class App {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
   * @param applicationId ID of the application to get usage statistics.
   * @param end End time for query. Goes to now if not specified.
   * @param start Start time for query. Goes to 24 hours ago if not specified.
   * @returns Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
   */
  public GetApplicationApiUsage(
    applicationId: number,
    queryString: {
      end?: string;
      start?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<ApiUsage>> {
    const requestURL = formatQueryStrings(`${this.url}/App/ApiUsage/${applicationId}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get list of applications created by Bungie.
   
    * @returns Get list of applications created by Bungie.
   */
  public GetBungieApplications(tokens?: ITokens): Promise<APIResponse<Application[]>> {
    const requestURL = `${this.url}/App/FirstParty/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }
}
