import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import {
  ContentItemPublicContract,
  ContentTypeDescription,
  NewsArticleRssResponse,
  SearchResultOfContentItemPublicContract,
} from "../../types/interface";

export class Content {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Gets an object describing a particular variant of content.
   * @param type
   * @returns An object describing a particular variant of content.
   */
  GetContentType(type: string): Promise<APIResponse<ContentTypeDescription>> {
    const requestURL = `${this.url}/Content/GetContentType/${type}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a content item referenced by id
   * @param id
   * @param locale
   * @param queryString The optional querystrings that can be applied.
   * @returns A content item referenced by id
   */
  GetContentById(
    id: string,
    locale: string,
    queryString?: { head: boolean }
  ): Promise<APIResponse<ContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/GetContentById/${id}/${locale}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the newest item that matches a given tag and Content Type.
   * @param locale
   * @param tag
   * @param type
   * @param queryString The optional querystrings that can be applied.
   * @returns The newest item that matches a given tag and Content Type.
   */
  GetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    queryString?: { head: boolean }
  ): Promise<APIResponse<ContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/GetContentByTagAndType/${tag}/${type}/${locale}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets content based on querystring information passed in.
   * @param locale
   * @param queryString The optional querystrings that can be applied.
   * @returns Content based on querystring information passed in.
   */
  SearchContentWithText(
    locale: string,
    queryString?: {
      ctype?: string;
      currentpage?: number;
      head?: boolean;
      searchtext?: string;
      source?: string;
      tag?: string;
    }
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/Search/${locale}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Searches for Content Items that match the given Tag and Content Type.
   * @param locale
   * @param tag
   * @param type
   * @param queryString The optional querystrings that can be applied.
   * @returns For Content Items that match the given Tag and Content Type.
   */
  SearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    queryString?: {
      currentpage?: number;
      head?: boolean;
      itemsperpage?: number;
    }
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/SearchContentByTagAndType/${tag}/${type}/${locale}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Search for Help Articles.
   * @param searchtext
   * @param size
   * @returns Help Articles.
   */
  SearchHelpArticles(
    searchtext: string,
    size: string
  ): Promise<APIResponse<object>> {
    const requestURL = `${this.url}/Content/SearchHelpArticles/${searchtext}/${size}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a JSON string response that is the RSS feed for news articles.
   * @param pageToken Zero-based pagination token for paging through result sets.
   * @returns A JSON string response that is the RSS feed for news articles.
   */
  RssNewsArticles(
    pageToken: string
  ): Promise<APIResponse<NewsArticleRssResponse>> {
    const requestURL = `${this.url}/Content/Rss/NewsArticles/${pageToken}/`;

    return request(requestURL, true, "GET", this.headers);
  }
}
