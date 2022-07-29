import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import {
  CoreSettingsConfiguration,
  CoreSystem,
  GlobalAlert,
} from "../../types/interface";

export class Core {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * List of available localization cultures
   * @returns List of available localization cultures
   */
  GetAvailableLocales(): Promise<APIResponse<{ [key: string]: string }>> {
    const requestURL = `${this.url}/GetAvailableLocales/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get the common settings used by the Bungie.Net environment.
   * @returns The common settings used by the Bungie.Net environment.
   */
  GetCommonSettings(): Promise<APIResponse<CoreSettingsConfiguration>> {
    const requestURL = `${this.url}/Settings/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get the user-specific system overrides that should be respected alongside common systems.
   * @returns The user-specific system overrides that should be respected alongside common systems.
   */
  GetUserSystemOverrides(): Promise<
    APIResponse<{ [key: string]: CoreSystem }>
  > {
    const requestURL = `${this.url}/UserSystemOverrides/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   * @returns Any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   */
  GetGlobalAlerts(queryString?: {
    includestreaming: boolean;
  }): Promise<APIResponse<GlobalAlert[]>> {
    const requestURL = formatQueryStrings(
      `${this.url}/GlobalAlerts/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }
}
