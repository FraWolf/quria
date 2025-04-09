import { parseAuthenticationHeaders, Controller } from "../../adapters";
import {
  ForumTopicsCategoryFiltersEnum,
  CommunityContentSortMode,
  ITokens,
  APIResponse,
  PostSearchResponse,
} from "../../types";

export class CommunityContent {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Returns community content.
   * @param mediaFilter The type of media to get
   * @param page Zero based page
   * @param sort The sort mode.
   * @returns Returns community content.
   */
  public GetCommunityContent(
    mediaFilter: ForumTopicsCategoryFiltersEnum,
    page: number,
    sort: CommunityContentSortMode,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = `${this.url}/CommunityContent/Get/${sort}/${mediaFilter}/${page}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
