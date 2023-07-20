import { Controller, parseAuthenticationHeaders } from "../../adapters";
import {
  ITokens,
  APIResponse,
  BungieFriendListResponse,
  BungieFriendRequestListResponse,
  PlatformFriendType,
  PlatformFriendResponse,
} from "../../types";

export class Social {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Returns your Bungie Friend list
   
    * @returns Returns your Bungie Friend list
   */
  public GetFriendList(tokens?: ITokens): Promise<APIResponse<BungieFriendListResponse>> {
    const requestURL = `${this.url}/Social/Friends/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns your friend request queue.
   
    * @returns Returns your friend request queue.
   */
  public GetFriendRequestList(tokens?: ITokens): Promise<APIResponse<BungieFriendRequestListResponse>> {
    const requestURL = `${this.url}/Social/Friends/Requests/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
   * @param membershipId The membership id of the user you wish to add.
   * @returns Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
   */
  public IssueFriendRequest(membershipId: string, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Add/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to accept.
   * @returns Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   */
  public AcceptFriendRequest(membershipId: string, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Accept/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to decline.
   * @returns Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
   */
  public DeclineFriendRequest(membershipId: string, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Decline/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to remove.
   * @returns Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
   */
  public RemoveFriend(membershipId: string, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Remove/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.
   * @param membershipId The membership id of the user you wish to remove.
   * @returns Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.
   */
  public RemoveFriendRequest(membershipId: string, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Social/Friends/Requests/Remove/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
   * @param friendPlatform The platform friend type.
   * @param page The zero based page to return. Page size is 100.
   * @returns Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
   */
  public GetPlatformFriendList(
    friendPlatform: PlatformFriendType,
    page: string,
    tokens?: ITokens
  ): Promise<APIResponse<PlatformFriendResponse>> {
    const requestURL = `${this.url}/Social/PlatformFriends/${friendPlatform}/${page}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
