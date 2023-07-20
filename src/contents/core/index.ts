import { parseAuthenticationHeaders, formatQueryStrings, Controller } from "../../adapters";
import { ITokens, APIResponse, CoreSettingsConfiguration, CoreSystem, GlobalAlert } from "../../types";

export class Core {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * List of available localization cultures
   
    * @returns List of available localization cultures
   */
  public GetAvailableLocales(tokens?: ITokens): Promise<APIResponse<Record<string, string>>> {
    const requestURL = `${this.url}/GetAvailableLocales/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the common settings used by the Bungie.Net environment.
   
    * @returns Get the common settings used by the Bungie.Net environment.
   */
  public GetCommonSettings(tokens?: ITokens): Promise<APIResponse<CoreSettingsConfiguration>> {
    const requestURL = `${this.url}/Settings/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the user-specific system overrides that should be respected alongside common systems.
   
    * @returns Get the user-specific system overrides that should be respected alongside common systems.
   */
  public GetUserSystemOverrides(tokens?: ITokens): Promise<APIResponse<Record<string, CoreSystem>>> {
    const requestURL = `${this.url}/UserSystemOverrides/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   * @param includestreaming Determines whether Streaming Alerts are included in results
   * @returns Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
   */
  public GetGlobalAlerts(
    queryString: {
      includestreaming?: boolean;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<GlobalAlert[]>> {
    const requestURL = formatQueryStrings(`${this.url}/GlobalAlerts/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
