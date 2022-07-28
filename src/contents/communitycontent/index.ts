import { request } from "../../adapters/http-request";
import { APIResponse } from "../../types/api";
import { PostSearchResponse } from "../../types/interface";

export class CommunityContent {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Returns community content.
   * @param mediaFilter The type of media to get
   * @param page Zero based page
   * @param sort The sort mode.
   * @returns Community content.
   */
  GetCommunityContent(
    mediaFilter: number,
    page: number,
    sort: string
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = `${this.url}/CommunityContent/Get/${sort}/${mediaFilter}/${page}/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
