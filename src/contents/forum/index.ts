import { formatQueryStrings, parseAuthenticationHeaders, Controller } from "../../adapters";
import {
  ForumTopicsCategoryFiltersEnum,
  ForumTopicsQuickDateEnum,
  ForumTopicsSortEnum,
  ITokens,
  APIResponse,
  PostSearchResponse,
  ForumPostSortEnum,
  TagResponse,
  ForumRecruitmentDetail,
} from "../../types";

export class Forum {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Get topics from any forum.
   * @param categoryFilter A category filter
   * @param group The group, if any.
   * @param locales Comma seperated list of locales posts must match to return in the result list. Default 'en'
   * @param page Zero paged page number
   * @param pageSize Unused
   * @param quickDate A date filter.
   * @param sort The sort mode.
   * @param tagstring The tags to search, if any.
   * @returns Get topics from any forum.
   */
  public GetTopicsPaged(
    categoryFilter: ForumTopicsCategoryFiltersEnum,
    group: string,
    page: number,
    pageSize: number,
    quickDate: ForumTopicsQuickDateEnum,
    sort: ForumTopicsSortEnum,
    queryString: {
      locales?: string;
      tagstring?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetTopicsPaged/${page}/${pageSize}/${group}/${sort}/${quickDate}/${categoryFilter}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a listing of all topics marked as part of the core group.
   * @param categoryFilter The category filter.
   * @param locales Comma seperated list of locales posts must match to return in the result list. Default 'en'
   * @param page Zero base page
   * @param quickDate The date filter.
   * @param sort The sort mode.
   * @returns Gets a listing of all topics marked as part of the core group.
   */
  public GetCoreTopicsPaged(
    categoryFilter: ForumTopicsCategoryFiltersEnum,
    page: number,
    quickDate: ForumTopicsQuickDateEnum,
    sort: ForumTopicsSortEnum,
    queryString: {
      locales?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetCoreTopicsPaged/${page}/${sort}/${quickDate}/${categoryFilter}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
   * @param getParentPost
   * @param page
   * @param pageSize
   * @param parentPostId
   * @param replySize
   * @param rootThreadMode
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param sortMode
   * @returns Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
   */
  public GetPostsThreadedPaged(
    getParentPost: boolean,
    page: number,
    pageSize: number,
    parentPostId: string,
    replySize: number,
    rootThreadMode: boolean,
    sortMode: ForumPostSortEnum,
    queryString: {
      showbanned?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostsThreadedPaged/${parentPostId}/${page}/${pageSize}/${replySize}/${getParentPost}/${rootThreadMode}/${sortMode}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
   * @param childPostId
   * @param page
   * @param pageSize
   * @param replySize
   * @param rootThreadMode
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param sortMode
   * @returns Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
   */
  public GetPostsThreadedPagedFromChild(
    childPostId: string,
    page: number,
    pageSize: number,
    replySize: number,
    rootThreadMode: boolean,
    sortMode: ForumPostSortEnum,
    queryString: {
      showbanned?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostsThreadedPagedFromChild/${childPostId}/${page}/${pageSize}/${replySize}/${rootThreadMode}/${sortMode}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the post specified and its immediate parent.
   * @param childPostId
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @returns Returns the post specified and its immediate parent.
   */
  public GetPostAndParent(
    childPostId: string,
    queryString: {
      showbanned?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(`${this.url}/Forum/GetPostAndParent/${childPostId}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the post specified and its immediate parent of posts that are awaiting approval.
   * @param childPostId
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @returns Returns the post specified and its immediate parent of posts that are awaiting approval.
   */
  public GetPostAndParentAwaitingApproval(
    childPostId: string,
    queryString: {
      showbanned?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(`${this.url}/Forum/GetPostAndParentAwaitingApproval/${childPostId}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets the post Id for the given content item's comments, if it exists.
   * @param contentId
   * @returns Gets the post Id for the given content item's comments, if it exists.
   */
  public GetTopicForContent(contentId: string, tokens?: ITokens): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/Forum/GetTopicForContent/${contentId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   * @param partialtag The partial tag input to generate suggestions from.
   * @returns Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   */
  public GetForumTagSuggestions(
    queryString: {
      partialtag?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<TagResponse[]>> {
    const requestURL = formatQueryStrings(`${this.url}/Forum/GetForumTagSuggestions/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets the specified forum poll.
   * @param topicId The post id of the topic that has the poll.
   * @returns Gets the specified forum poll.
   */
  public GetPoll(topicId: string, tokens?: ITokens): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = `${this.url}/Forum/Poll/${topicId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Allows the caller to get a list of to 25 recruitment thread summary information objects.
   
    * @returns Allows the caller to get a list of to 25 recruitment thread summary information objects.
   */
  public GetRecruitmentThreadSummaries(tokens?: ITokens): Promise<APIResponse<ForumRecruitmentDetail[]>> {
    const requestURL = `${this.url}/Forum/Recruit/Summaries/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: string[] = [];
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }
}
