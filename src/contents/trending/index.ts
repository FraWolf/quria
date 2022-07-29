import { request } from "../../adapters/http-request";
import { APIResponse } from "../../types/api";
import { TrendingEntryType } from "../../types/enum";
import {
  SearchResultOfTrendingEntry,
  TrendingCategories,
  TrendingDetail,
} from "../../types/interface";

export class Trending {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
   * @returns Trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
   */
  GetTrendingCategories(): Promise<APIResponse<TrendingCategories>> {
    const requestURL = `${this.url}/Trending/Categories/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns paginated lists of trending items for a category.
   * @param categoryId The ID of the category for whom you want additional results.
   * @param pageNumber The page # of results to return.
   * @returns Paginated lists of trending items for a category.
   */
  GetTrendingCategory(
    categoryId: string,
    pageNumber: number
  ): Promise<APIResponse<SearchResultOfTrendingEntry>> {
    const requestURL = `${this.url}/Trending/Categories/${categoryId}/${pageNumber}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the detailed results for a specific trending entry.
   * @param identifier The identifier for the entity to be returned.
   * @param trendingEntryType The type of entity to be returned.
   * @returns The detailed results for a specific trending entry.
   */
  GetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: TrendingEntryType
  ): Promise<APIResponse<TrendingDetail>> {
    const requestURL = `${this.url}/Trending/Details/${trendingEntryType}/${identifier}/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
