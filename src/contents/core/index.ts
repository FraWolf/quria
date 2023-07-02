import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import { APIResponse, CoreSettingsConfiguration, CoreSystem, GlobalAlert } from "../../types";

export class Core {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * List of available localization cultures
   
    * @returns List of available localization cultures
   */
  public GetAvailableLocales(): Promise<APIResponse<Record<string, string>>> {
    var requestURL = `${this.url}/GetAvailableLocales/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get the common settings used by the Bungie.Net environment.
   
    * @returns Get the common settings used by the Bungie.Net environment.
   */
  public GetCommonSettings(): Promise<APIResponse<CoreSettingsConfiguration>> {
    var requestURL = `${this.url}/Settings/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get the user-specific system overrides that should be respected alongside common systems.
   
    * @returns Get the user-specific system overrides that should be respected alongside common systems.
   */
  public GetUserSystemOverrides(): Promise<APIResponse<Record<string, CoreSystem>>> {
    var requestURL = `${this.url}/UserSystemOverrides/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   * @param includestreaming Determines whether Streaming Alerts are included in results
   * @returns Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   */
  public GetGlobalAlerts(
    queryString: {
      includestreaming?: boolean;
    } | null
  ): Promise<APIResponse<GlobalAlert[]>> {
    var requestURL = formatQueryStrings(`${this.url}/GlobalAlerts/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }
}
