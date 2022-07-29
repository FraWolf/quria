import { request } from "../../adapters/http-request";
import { formatQueryStrings } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { PostSearchResponse, TagResponse } from "../../types/interface";

export class Forum {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Get topics from any forum.
   * @param categoryFilter A category filter.
   * @param group The group, if any.
   * @param page Zero paged page number
   * @param pageSize Unused
   * @param quickDate A date filter.
   * @param sort The sort mode.
   * @param queryString The optional querystrings that can be applied.
   * @returns Topics from any forum.
   */
  GetTopicsPaged(
    categoryFilter: number,
    group: string,
    page: number,
    pageSize: number,
    quickDate: number,
    sort: string,
    queryString?: { locales?: string; tagstring?: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetTopicsPaged/${page}/${pageSize}/${group}/${sort}/${quickDate}/${categoryFilter}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets a listing of all topics marked as part of the core group.
   * @param categoryFilter The category filter.
   * @param page Zero base page
   * @param quickDate The date filter.
   * @param sort The sort mode.
   * @param queryString The optional querystrings that can be applied.
   * @returns A listing of all topics marked as part of the core group.
   */
  GetCoreTopicsPaged(
    categoryFilter: number,
    page: number,
    quickDate: number,
    sort: string,
    queryString?: { locales: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
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
   * @param sortMode
   * @param queryString The optional querystrings that can be applied.
   * @returns A thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
   */
  GetPostsThreadedPaged(
    getParentPost: boolean,
    page: number,
    pageSize: number,
    parentPostId: string,
    replySize: number,
    rootThreadMode: boolean,
    sortMode: number,
    queryString?: { showbanned: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
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
   * @param sortMode
   * @param queryString The optional querystrings that can be applied.
   * @returns A thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
   */
  GetPostsThreadedPagedFromChild(
    childPostId: string,
    page: number,
    pageSize: number,
    replySize: number,
    rootThreadMode: boolean,
    sortMode: number,
    queryString?: { showbanned: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostsThreadedPagedFromChild/${childPostId}/${page}/${pageSize}/${replySize}/${rootThreadMode}/${sortMode}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the post specified and its immediate parent.
   * @param childPostId
   * @param queryString The optional querystrings that can be applied.
   * @returns The post specified and its immediate parent.
   */
  GetPostAndParent(
    childPostId: string,
    queryString?: { showbanned: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostAndParent/${childPostId}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns the post specified and its immediate parent of posts that are awaiting approval.
   * @param childPostId
   * @param queryString The optional querystrings that can be applied.
   * @returns The post specified and its immediate parent of posts that are awaiting approval.
   */
  GetPostAndParentAwaitingApproval(
    childPostId: string,
    queryString?: { showbanned: string }
  ): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetPostAndParentAwaitingApproval/${childPostId}/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets the post Id for the given content item's comments, if it exists.
   * @param contentId
   * @returns Gets the post Id for the given content item's comments, if it exists.
   */
  GetTopicForContent(contentId: string): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/Forum/GetTopicForContent/${contentId}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   * @returns Tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   */
  GetForumTagSuggestions(queryString?: {
    partialtag: string;
  }): Promise<APIResponse<TagResponse[]>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Forum/GetForumTagSuggestions/`,
      queryString
    );

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets the specified forum poll.
   * @param topicId The post id of the topic that has the poll.
   * @returns The specified forum poll.
   */
  GetPoll(topicId: string): Promise<APIResponse<PostSearchResponse>> {
    const requestURL = `${this.url}/Forum/Poll/${topicId}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  // Not documented
  // GetRecruitmentThreadSummaries()
}
