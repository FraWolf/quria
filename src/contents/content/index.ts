import { parseAuthenticationHeaders, Controller, formatQueryStrings } from "../../adapters";
import {
  ITokens,
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
  public GetContentType(type: string, tokens?: ITokens): Promise<APIResponse<ContentTypeDescription>> {
    const requestURL = `${this.url}/Content/GetContentType/${type}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
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
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<ContentItemPublicContract>> {
    const requestURL = formatQueryStrings(`${this.url}/Content/GetContentById/${id}/${locale}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
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
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<ContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/GetContentByTagAndType/${tag}/${type}/${locale}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
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
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    const requestURL = formatQueryStrings(`${this.url}/Content/Search/${locale}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
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
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfContentItemPublicContract>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Content/SearchContentByTagAndType/${tag}/${type}/${locale}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Search for Help Articles.
   * @param searchtext
   * @param size
   * @returns Search for Help Articles.
   */
  public SearchHelpArticles(searchtext: string, size: string, tokens?: ITokens): Promise<APIResponse<object>> {
    const requestURL = `${this.url}/Content/SearchHelpArticles/${searchtext}/${size}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
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
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<NewsArticleRssResponse>> {
    const requestURL = formatQueryStrings(`${this.url}/Content/Rss/NewsArticles/${pageToken}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
