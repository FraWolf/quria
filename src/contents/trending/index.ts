import { parseAuthenticationHeaders, Controller } from "../../adapters";
import {
  ITokens,
  APIResponse,
  TrendingCategories,
  SearchResultOfTrendingEntry,
  TrendingEntryType,
  TrendingDetail,
} from "../../types";

export class Trending {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
   
    * @returns Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
   */
  public GetTrendingCategories(tokens?: ITokens): Promise<APIResponse<TrendingCategories>> {
    const requestURL = `${this.url}/Trending/Categories/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns paginated lists of trending items for a category.
   * @param categoryId The ID of the category for whom you want additional results.
   * @param pageNumber The page # of results to return.
   * @returns Returns paginated lists of trending items for a category.
   */
  public GetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfTrendingEntry>> {
    const requestURL = `${this.url}/Trending/Categories/${categoryId}/${pageNumber}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   * @param identifier The identifier for the entity to be returned.
   * @param trendingEntryType The type of entity to be returned.
   * @returns Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   */
  public GetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: TrendingEntryType,
    tokens?: ITokens
  ): Promise<APIResponse<TrendingDetail>> {
    const requestURL = `${this.url}/Trending/Details/${trendingEntryType}/${identifier}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
