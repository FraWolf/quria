import { request } from "../../adapters/http-request";
import {
  formatQueryStrings,
  parseAuthenticationHeaders,
} from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { Tokens } from "../../types/general";
import { ApiUsage, Application } from "../../types/interface";

export class App {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Get API usage by application for time frame specified.
   * @param applicationId ID of the application to get usage statistics.
   * @returns API usage by application for time frame specified
   */
  GetApplicationApiUsage(
    applicationId: number,
    queryString?: { end?: string; start?: string },
    tokens?: Tokens
  ): Promise<APIResponse<ApiUsage>> {
    const requestURL = formatQueryStrings(
      `${this.url}/App/ApiUsage/${applicationId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get list of applications created by Bungie.
   * @returns List of applications created by Bungie.
   */
  GetBungieApplications(): Promise<APIResponse<Application[]>> {
    const requestURL = `${this.url}/App/FirstParty/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
