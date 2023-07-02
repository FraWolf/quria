import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import {
  ForumTopicsCategoryFiltersEnum,
  ForumTopicsQuickDateEnum,
  ForumTopicsSortEnum,
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(
      `${this.url}/Forum/GetTopicsPaged/${page}/${pageSize}/${group}/${sort}/${quickDate}/${categoryFilter}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(
      `${this.url}/Forum/GetCoreTopicsPaged/${page}/${sort}/${quickDate}/${categoryFilter}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostsThreadedPaged/${parentPostId}/${page}/${pageSize}/${replySize}/${getParentPost}/${rootThreadMode}/${sortMode}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostsThreadedPagedFromChild/${childPostId}/${page}/${pageSize}/${replySize}/${rootThreadMode}/${sortMode}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(`${this.url}/Forum/GetPostAndParent/${childPostId}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
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
    } | null
  ): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = formatQueryStrings(`${this.url}/Forum/GetPostAndParentAwaitingApproval/${childPostId}/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets the post Id for the given content item's comments, if it exists.
   * @param contentId
   * @returns Gets the post Id for the given content item's comments, if it exists.
   */
  public GetTopicForContent(contentId: string): Promise<APIResponse<string>> {
    var requestURL = `${this.url}/Forum/GetTopicForContent/${contentId}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   * @param partialtag The partial tag input to generate suggestions from.
   * @returns Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   */
  public GetForumTagSuggestions(
    queryString: {
      partialtag?: string;
    } | null
  ): Promise<APIResponse<TagResponse[]>> {
    var requestURL = formatQueryStrings(`${this.url}/Forum/GetForumTagSuggestions/`, queryString);

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets the specified forum poll.
   * @param topicId The post id of the topic that has the poll.
   * @returns Gets the specified forum poll.
   */
  public GetPoll(topicId: string): Promise<APIResponse<PostSearchResponse>> {
    var requestURL = `${this.url}/Forum/Poll/${topicId}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Allows the caller to get a list of to 25 recruitment thread summary information objects.
   
    * @returns Allows the caller to get a list of to 25 recruitment thread summary information objects.
   */
  public GetRecruitmentThreadSummaries(): Promise<APIResponse<ForumRecruitmentDetail[]>> {
    var requestURL = `${this.url}/Forum/Recruit/Summaries/`;

    const bodyParams: string[] = [];
    return request(requestURL, true, "POST", this.headers, JSON.stringify(bodyParams));
  }
}
