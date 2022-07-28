import { request } from "../../adapters/http-request";
import { APIResponse } from "../../types/api";
import { Tokens } from "../../types/general";
import {
  formatQueryStrings,
  parseAuthenticationHeaders,
} from "../../adapters/utils";
import {
  BungieMembershipType,
  ChatSecuritySetting,
  GroupHomepage,
  GroupMemberCountFilter,
  GroupPostPublicity,
  GroupType,
  HostGuidedGamesPermissionLevel,
  MembershipOption,
  RuntimeGroupMemberType,
} from "../../types/enum";
import {
  ClanBanner,
  EntityActionResult,
  GetGroupsForMemberResponse,
  GroupApplicationListRequest,
  GroupApplicationRequest,
  GroupApplicationResponse,
  GroupBanRequest,
  GroupEditAction,
  GroupMemberLeaveResult,
  GroupMembershipSearchResponse,
  GroupNameSearchRequest,
  GroupOptionalConversation,
  GroupOptionalConversationAddRequest,
  GroupOptionalConversationEditRequest,
  GroupOptionsEditAction,
  GroupPotentialMembershipSearchResponse,
  GroupQuery,
  GroupResponse,
  GroupSearchResponse,
  GroupTheme,
  GroupV2Card,
  SearchResultOfGroupBan,
  SearchResultOfGroupMember,
  SearchResultOfGroupMemberApplication,
  UserMembership,
} from "../../types/interface";

export class GroupV2 {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Returns a list of all available group avatars for the signed-in user.
   * @returns A list of all available group avatars for the signed-in user.
   */
  GetAvailableAvatars(): Promise<APIResponse<{ [key: string]: string }>> {
    const requestURL = `${this.url}/GroupV2/GetAvailableAvatars/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a list of all available group themes.
   * @returns A list of all available group themes.
   */
  GetAvailableThemes(): Promise<APIResponse<GroupTheme[]>> {
    const requestURL = `${this.url}/GroupV2/GetAvailableThemes/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
   * @param membershipType The types of membership the Accounts system supports.
   * @returns The state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
   */
  GetUserClanInviteSetting(
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/GetUserClanInviteSetting/${membershipType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets groups recommended for you based on the groups to whom those you follow belong.
   * @param createDateRange Requested range in which to pull recommended groups
   * @param groupType Type of groups requested
   * @returns Groups recommended for you based on the groups to whom those you follow belong.
   */
  GetRecommendedGroups(
    createDateRange: number,
    groupType: GroupType,
    tokens?: Tokens
  ): Promise<APIResponse<GroupV2Card[]>> {
    const requestURL = `${this.url}/GroupV2/Recommended/${groupType}/${createDateRange}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Search for Groups.
   * @param name
   * @param groupType
   * @param creationDate
   * @param sortBy
   * @param groupMemberCountFilter
   * @param localeFilter
   * @param tagText
   * @param itemsPerPage
   * @param currentPage
   * @param requestContinuationToken
   * @returns Groups.
   */
  GroupSearch(
    name: string,
    groupType: GroupType,
    creationDate: number,
    sortBy: number,
    groupMemberCountFilter: GroupMemberCountFilter | null,
    localeFilter: string,
    tagText: string,
    itemsPerPage: number,
    currentPage: number,
    requestContinuationToken: string
  ): Promise<APIResponse<GroupSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/Search/`;

    const bodyParams: GroupQuery = {
      name,
      groupType,
      creationDate,
      sortBy,
      groupMemberCountFilter,
      localeFilter,
      tagText,
      itemsPerPage,
      currentPage,
      requestContinuationToken,
    };

    return request(
      requestURL,
      true,
      "POST",
      this.headers,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Get information about a specific group of the given ID.
   * @param groupId Requested group's id.
   * @returns Information about a specific group of the given ID.
   */
  GetGroup(groupId: string): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get information about a specific group with the given name and type.
   * @param groupName Exact name of the group to find.
   * @param groupType Type of group to find.
   * @returns Information about a specific group with the given name and type.
   */
  GetGroupByName(
    groupName: string,
    groupType: GroupType
  ): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/Name/${groupName}/${groupType}/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Get information about a specific group with the given name and type.
   * @param groupName Exact name of the group to find.
   * @param groupType Type of group to find.
   * @returns Information about a specific group with the given name and type.
   */
  GetGroupByNameV2(
    groupName: string,
    groupType: GroupType
  ): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/NameV2/`;

    const bodyParams: GroupNameSearchRequest = {
      groupName,
      groupType,
    };

    return request(
      requestURL,
      true,
      "POST",
      this.headers,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Gets a list of available optional conversation channels and their settings.
   * @param groupId Requested group's id.
   * @returnsA list of available optional conversation channels and their settings.
   */
  GetGroupOptionalConversations(
    groupId: string
  ): Promise<APIResponse<GroupOptionalConversation[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/`;

    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Edit an existing group.
   * @param groupId Group ID of the group to edit.
   * @param name
   * @param about
   * @param motto
   * @param theme
   * @param avatarImageIndex
   * @param tags
   * @param isPublic
   * @param membershipOption
   * @param isPublicTopicAdminOnly
   * @param allowChat
   * @param chatSecurity
   * @param callsign
   * @param locale
   * @param homepage
   * @param enableInvitationMessagingForAdmins
   * @param defaultPublicity
   * @returns Edit an existing group.
   */
  EditGroup(
    groupId: string,
    name: string,
    about: string,
    motto: string,
    theme: string,
    avatarImageIndex: number | null,
    tags: string,
    isPublic: boolean | null,
    membershipOption: MembershipOption,
    isPublicTopicAdminOnly: boolean | null,
    allowChat: boolean | null,
    chatSecurity: ChatSecuritySetting | null,
    callsign: string,
    locale: string,
    homepage: GroupHomepage | null,
    enableInvitationMessagingForAdmins: boolean | null,
    defaultPublicity: GroupPostPublicity | null,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Edit/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupEditAction = {
      name,
      about,
      motto,
      theme,
      avatarImageIndex,
      tags,
      isPublic,
      membershipOption,
      isPublicTopicAdminOnly,
      allowChat,
      chatSecurity,
      callsign,
      locale,
      homepage,
      enableInvitationMessagingForAdmins,
      defaultPublicity,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Edit an existing group's clan banner.
   * @param groupId Group ID of the group to edit.
   * @param decalId
   * @param decalColorId
   * @param decalBackgroundColorId
   * @param gonfalonId
   * @param gonfalonColorId
   * @param gonfalonDetailId
   * @param gonfalonDetailColorId
   * @returns Edit an existing group's clan banner.
   */
  EditClanBanner(
    groupId: string,
    decalId: number,
    decalColorId: number,
    decalBackgroundColorId: number,
    gonfalonId: number,
    gonfalonColorId: number,
    gonfalonDetailId: number,
    gonfalonDetailColorId: number,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/EditClanBanner/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: ClanBanner = {
      decalId,
      decalColorId,
      decalBackgroundColorId,
      gonfalonId,
      gonfalonColorId,
      gonfalonDetailId,
      gonfalonDetailColorId,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Edit group options only available to a founder.
   * @param groupId Group ID of the group to edit.
   * @param InvitePermissionOverride
   * @param UpdateCulturePermissionOverride
   * @param HostGuidedGamePermissionOverride
   * @param UpdateBannerPermissionOverride
   * @param JoinLevel
   * @returns Group options only available to a founder.
   */
  EditFounderOptions(
    groupId: string,
    InvitePermissionOverride: boolean | null,
    UpdateCulturePermissionOverride: boolean | null,
    HostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel | null,
    UpdateBannerPermissionOverride: boolean | null,
    JoinLevel: RuntimeGroupMemberType | null,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/EditFounderOptions/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupOptionsEditAction = {
      InvitePermissionOverride,
      UpdateCulturePermissionOverride,
      HostGuidedGamePermissionOverride,
      UpdateBannerPermissionOverride,
      JoinLevel,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Add a new optional conversation/chat channel. Requires admin permissions to the group.
   * @param groupId Group ID of the group to edit.
   * @param chatName
   * @param chatSecurity
   * @returns A new optional conversation/chat channel. Requires admin permissions to the group.
   */
  AddOptionalConversation(
    groupId: string,
    chatName: string,
    chatSecurity: ChatSecuritySetting,
    tokens?: Tokens
  ): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/Add/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupOptionalConversationAddRequest = {
      chatName,
      chatSecurity,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
   * @param conversationId Conversation Id of the channel being edited.
   * @param groupId Group ID of the group to edit.
   * @param chatEnabled
   * @param chatName
   * @param chatSecurity
   * @returns The settings of an optional conversation/chat channel. Requires admin permissions to the group.
   */
  EditOptionalConversation(
    conversationId: string,
    groupId: string,
    chatEnabled: boolean | null,
    chatName: string,
    chatSecurity: ChatSecuritySetting | null,
    tokens?: Tokens
  ): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/Edit/${conversationId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupOptionalConversationEditRequest = {
      chatEnabled,
      chatName,
      chatSecurity,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Get the list of members in a given group.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId The ID of the group.
   * @returns The list of members in a given group.
   */
  GetMembersOfGroup(
    currentpage: number,
    groupId: string,
    queryString?: { memberType?: RuntimeGroupMemberType; nameSearch?: string },
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfGroupMember>> {
    const requestURL = formatQueryStrings(
      `${this.url}/GroupV2/${groupId}/Members/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the list of members in a given group who are of admin level or higher.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId The ID of the group.
   * @returns The list of members in a given group who are of admin level or higher.
   */
  GetAdminsAndFounderOfGroup(
    currentpage: number,
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfGroupMember>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
   * @param groupId ID of the group to which the member belongs.
   * @param membershipId Membership ID to modify.
   * @param membershipType Membership type of the provide membership ID.
   * @param memberType New membertype for the specified member.
   * @returns The membership type of a given member. You must have suitable permissions in the group to perform this operation.
   */
  EditGroupMembership(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    memberType: RuntimeGroupMemberType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/SetMembershipType/${memberType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Kick a member from the given group, forcing them to reapply if they wish to re-join the group.
   * @param groupId Group ID to kick the user from.
   * @param membershipId Membership ID to kick.
   * @param membershipType Membership type of the provided membership ID.
   * @returns A member from the given group, forcing them to reapply if they wish to re-join the group.
   */
  KickMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<GroupMemberLeaveResult>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Kick/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Bans the requested member from the requested group for the specified period of time.
   * @param groupId Group ID that has the member to ban.
   * @param membershipId Membership ID of the member to ban from the group.
   * @param membershipType Membership type of the provided membership ID.
   * @param comment
   * @param length
   * @returns The requested member from the requested group for the specified period of time.
   */
  BanMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    comment: string,
    length: number,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Ban/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupBanRequest = {
      comment,
      length,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Unbans the requested member, allowing them to re-apply for membership.
   * @param groupId Group ID that has the member to ban.
   * @param membershipId Membership ID of the member to ban from the group.
   * @param membershipType Membership type of the provided membership ID.
   * @returns The requested member, allowing them to re-apply for membership.
   */
  UnbanMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Unban/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Get the list of banned members in a given group.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 entries.
   * @param groupId Group ID whose banned members you are fetching
   * @returns The list of banned members in a given group.
   */
  GetBannedMembersOfGroup(
    currentpage: number,
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfGroupBan>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Banned/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
   * @param founderIdNew The new founder for this group. Must already be a group admin.
   * @param groupId The target group id.
   * @param membershipType Membership type of the provided founderIdNew.
   * @returns Administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
   */
  AbdicateFoundership(
    founderIdNew: string,
    groupId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Admin/AbdicateFoundership/${membershipType}/${founderIdNew}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId ID of the group.
   * @returns The list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
   */
  GetPendingMemberships(
    currentpage: number,
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfGroupMemberApplication>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/Pending/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the list of users who have been invited into the group.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId ID of the group.
   * @returns The list of users who have been invited into the group.
   */
  GetInvitedIndividuals(
    currentpage: number,
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<SearchResultOfGroupMemberApplication>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/InvitedIndividuals/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param message
   * @returns All of the pending users for the given group.
   */
  ApproveAllPending(
    groupId: string,
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/ApproveAll/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = {
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Deny all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param message
   * @returns All of the pending users for the given group.
   */
  DenyAllPending(
    groupId: string,
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/DenyAll/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = {
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param memberships
   * @param message
   * @returns All of the pending users for the given group.
   */
  ApprovePendingForList(
    groupId: string,
    memberships: UserMembership[],
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/ApproveList/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationListRequest = {
      memberships,
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Approve the given membershipId to join the group/clan as long as they have applied.
   * @param groupId ID of the group.
   * @param membershipId The membership id being approved.
   * @param membershipType Membership type of the supplied membership ID.
   * @param message
   * @returns The given membershipId to join the group/clan as long as they have applied.
   */
  ApprovePending(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/Approve/${membershipType}/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = {
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Deny all of the pending users for the given group that match the passed-in .
   * @param groupId ID of the group.
   * @param memberships
   * @param message
   * @returns All of the pending users for the given group that match the passed-in .
   */
  DenyPendingForList(
    groupId: string,
    memberships: UserMembership[],
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/DenyList/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationListRequest = {
      memberships,
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Get information about the groups that a given member has joined.
   * @param filter Filter apply to list of joined groups.
   * @param groupType Type of group the supplied member founded.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Information about the groups that a given member has joined.
   */
  GetGroupsForMember(
    filter: number,
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<GetGroupsForMemberResponse>> {
    const requestURL = `${this.url}/GroupV2/User/${membershipType}/${membershipId}/${filter}/${groupType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Allows a founder to manually recover a group they can see in game but not on bungie.net
   * @param groupType Type of group the supplied member founded.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns A founder to manually recover a group they can see in game but not on bungie.net
   */
  RecoverGroupForFounder(
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<GroupMembershipSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/Recover/${membershipType}/${membershipId}/${groupType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get information about the groups that a given member has applied to or been invited to.
   * @param filter Filter apply to list of potential joined groups.
   * @param groupType Type of group the supplied member applied.
   * @param membershipId Membership ID to for which to find applied groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Information about the groups that a given member has applied to or been invited to.
   */
  GetPotentialGroupsForMember(
    filter: number,
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<GroupPotentialMembershipSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/User/Potential/${membershipType}/${membershipId}/${filter}/${groupType}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Invite a user to join this group.
   * @param groupId ID of the group you would like to join.
   * @param membershipId Membership id of the account being invited.
   * @param membershipType MembershipType of the account being invited.
   * @param message
   * @returns A user to join this group.
   */
  IndividualGroupInvite(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    message: string,
    tokens?: Tokens
  ): Promise<APIResponse<GroupApplicationResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/IndividualInvite/${membershipType}/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = {
      message,
    };

    return request(
      requestURL,
      true,
      "POST",
      authHeaders,
      JSON.stringify(bodyParams)
    );
  }

  /**
   * Cancels a pending invitation to join a group.
   * @param groupId ID of the group you would like to join.
   * @param membershipId Membership id of the account being cancelled.
   * @param membershipType MembershipType of the account being cancelled.
   * @returns A pending invitation to join a group.
   */
  IndividualGroupInviteCancel(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<GroupApplicationResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/IndividualInviteCancel/${membershipType}/${membershipId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "POST", authHeaders);
  }
}
