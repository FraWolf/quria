import { request } from "../../adapters/http-request";
import { ForumTopicsCategoryFiltersEnum, CommunityContentSortMode, APIResponse, PostSearchResponse } from "../../types";

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
    sort: CommunityContentSortMode
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = `${this.url}/CommunityContent/Get/${sort}/${mediaFilter}/${page}/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
