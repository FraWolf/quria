import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import {
  APIResponse,
  ContentTypeDescription,
  ContentItemPublicContract,
  SearchResultOfContentItemPublicContract,
  NewsArticleRssResponse,
} from "../../types";

export class Content {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Gets an object describing a particular variant of content.
   * @param type
   * @returns Gets an object describing a particular variant of content.
   */
  public GetContentType(type: string): Promise<APIResponse<ContentTypeDescription>> {
    var requestURL = `${this.url}/Content/GetContentType/${type}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a content item referenced by id
   * @param head false
   * @param id
   * @param locale
   * @returns Returns a content item referenced by id
   */
  public GetContentById(
    id: string,
    locale: string,
    queryString: {
      head?: boolean;
    } | null
  ): Promise<APIResponse<ContentItemPublicContract>> {
    var requestURL = formatQueryStrings(`${this.url}/Content/GetContentById/${id}/${locale}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the newest item that matches a given tag and Content Type.
   * @param head Not used.
   * @param locale
   * @param tag
   * @param type
   * @returns Returns the newest item that matches a given tag and Content Type.
   */
  public GetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    queryString: {
      head?: boolean;
    } | null
  ): Promise<APIResponse<ContentItemPublicContract>> {
    var requestURL = formatQueryStrings(`${this.url}/Content/GetContentByTagAndType/${tag}/${type}/${locale}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets content based on querystring information passed in. Provides basic search and text search capabilities.
   * @param ctype Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
   * @param currentpage Page number for the search results, starting with page 1.
   * @param head Not used.
   * @param locale
   * @param searchtext Word or phrase for the search.
   * @param source For analytics, hint at the part of the app that triggered the search. Optional.
   * @param tag Tag used on the content to be searched.
   * @returns Gets content based on querystring information passed in. Provides basic search and text search capabilities.
   */
  public SearchContentWithText(
    locale: string,
    queryString: {
      ctype?: string;
      currentpage?: number;
      head?: boolean;
      searchtext?: string;
      source?: string;
      tag?: string;
    } | null
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    var requestURL = formatQueryStrings(`${this.url}/Content/Search/${locale}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Searches for Content Items that match the given Tag and Content Type.
   * @param currentpage Page number for the search results starting with page 1.
   * @param head Not used.
   * @param itemsperpage Not used.
   * @param locale
   * @param tag
   * @param type
   * @returns Searches for Content Items that match the given Tag and Content Type.
   */
  public SearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    queryString: {
      currentpage?: number;
      head?: boolean;
      itemsperpage?: number;
    } | null
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    var requestURL = formatQueryStrings(
      `${this.url}/Content/SearchContentByTagAndType/${tag}/${type}/${locale}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Search for Help Articles.
   * @param searchtext
   * @param size
   * @returns Search for Help Articles.
   */
  public SearchHelpArticles(searchtext: string, size: string): Promise<APIResponse<object>> {
    var requestURL = `${this.url}/Content/SearchHelpArticles/${searchtext}/${size}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a JSON string response that is the RSS feed for news articles.
   * @param categoryfilter Optionally filter response to only include news items in a certain category.
   * @param includebody Optionally include full content body for each news item.
   * @param pageToken Zero-based pagination token for paging through result sets.
   * @returns Returns a JSON string response that is the RSS feed for news articles.
   */
  public RssNewsArticles(
    pageToken: string,
    queryString: {
      categoryfilter?: string;
      includebody?: boolean;
    } | null
  ): Promise<APIResponse<NewsArticleRssResponse>> {
    var requestURL = formatQueryStrings(`${this.url}/Content/Rss/NewsArticles/${pageToken}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }
}
