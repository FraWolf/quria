import { request } from "../../adapters/http-request";
import {
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
  public GetTrendingCategories(): Promise<APIResponse<TrendingCategories>> {
    var requestURL = `${this.url}/Trending/Categories/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns paginated lists of trending items for a category.
   * @param categoryId The ID of the category for whom you want additional results.
   * @param pageNumber The page # of results to return.
   * @returns Returns paginated lists of trending items for a category.
   */
  public GetTrendingCategory(categoryId: string, pageNumber: number): Promise<APIResponse<SearchResultOfTrendingEntry>> {
    var requestURL = `${this.url}/Trending/Categories/${categoryId}/${pageNumber}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   * @param identifier The identifier for the entity to be returned.
   * @param trendingEntryType The type of entity to be returned.
   * @returns Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   */
  public GetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: TrendingEntryType
  ): Promise<APIResponse<TrendingDetail>> {
    var requestURL = `${this.url}/Trending/Details/${trendingEntryType}/${identifier}/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
