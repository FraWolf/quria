import { request } from "../../adapters/http-request";
import { parseAuthenticationHeaders } from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { PlatformFriendType } from "../../types/enum";
import { Tokens } from "../../types/general";
import {
  BungieFriendListResponse,
  BungieFriendRequestListResponse,
  PlatformFriendResponse,
} from "../../types/interface";

export class Social {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Returns your Bungie Friend list
   * @returns Your Bungie Friend list
   */
  GetFriendList(
    tokens?: Tokens
  ): Promise<APIResponse<BungieFriendListResponse>> {
    const requestURL = `${this.url}/Social/Friends/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns your friend request queue.
   * @returns Your friend request queue.
   */
  GetFriendRequestList(
    tokens?: Tokens
  ): Promise<APIResponse<BungieFriendRequestListResponse>> {
    const requestURL = `${this.url}/Social/Friends/Requests/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
   * @param membershipId The membership id of the user you wish to add.
   * @returns A friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
   */
  IssueFriendRequest(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Add/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to accept.
   * @returns A friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   */
  AcceptFriendRequest(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Accept/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to decline.
   * @returns A friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   */
  DeclineFriendRequest(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Decline/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to remove.
   * @returns A friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
   */
  RemoveFriend(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Remove/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to remove.
   * @returns A friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.
   */
  RemoveFriendRequest(
    membershipId: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Remove/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
   * @param friendPlatform The platform friend type.
   * @param page The zero based page to return. Page size is 100.
   * @returns The platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
   */
  GetPlatformFriendList(
    friendPlatform: PlatformFriendType,
    page: number,
    tokens?: Tokens
  ): Promise<APIResponse<PlatformFriendResponse>> {
    const requestURL = `${this.url}/Social/PlatformFriends/${friendPlatform}/${page}/ `;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }
}
