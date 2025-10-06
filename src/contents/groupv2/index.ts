import { parseAuthenticationHeaders, Controller, formatQueryStrings } from "../../adapters";
import {
  ITokens,
  APIResponse,
  GroupTheme,
  BungieMembershipType,
  GroupDateRange,
  GroupType,
  GroupV2Card,
  GroupSortBy,
  GroupSearchResponse,
  GroupQuery,
  GroupResponse,
  GroupNameSearchRequest,
  GroupOptionalConversation,
  GroupEditAction,
  ClanBanner,
  GroupOptionsEditAction,
  ChatSecuritySetting,
  GroupOptionalConversationAddRequest,
  GroupOptionalConversationEditRequest,
  RuntimeGroupMemberType,
  SearchResultOfGroupMember,
  GroupMemberLeaveResult,
  IgnoreLength,
  GroupBanRequest,
  SearchResultOfGroupBan,
  SearchResultOfGroupEditHistory,
  SearchResultOfGroupMemberApplication,
  EntityActionResult,
  GroupApplicationRequest,
  UserMembership,
  GroupApplicationListRequest,
  GroupsForMemberFilter,
  GetGroupsForMemberResponse,
  GroupMembershipSearchResponse,
  GroupPotentialMemberStatus,
  GroupPotentialMembershipSearchResponse,
  GroupApplicationResponse,
  GroupMemberCountFilter,
  MembershipOption,
  GroupHomepage,
  GroupPostPublicity,
  HostGuidedGamesPermissionLevel,
} from "../../types";

export class GroupV2 {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Returns a list of all available group avatars for the signed-in user.
   
    * @returns Returns a list of all available group avatars for the signed-in user.
   */
  public GetAvailableAvatars(tokens?: ITokens): Promise<APIResponse<Record<number, string>>> {
    const requestURL = `${this.url}/GroupV2/GetAvailableAvatars/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of all available group themes.
   
    * @returns Returns a list of all available group themes.
   */
  public GetAvailableThemes(tokens?: ITokens): Promise<APIResponse<GroupTheme[]>> {
    const requestURL = `${this.url}/GroupV2/GetAvailableThemes/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
   * @param mType The Destiny membership type of the account we wish to access settings.
   * @returns Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
   */
  public GetUserClanInviteSetting(mType: BungieMembershipType, tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/GetUserClanInviteSetting/${mType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets groups recommended for you based on the groups to whom those you follow belong.
   * @param createDateRange Requested range in which to pull recommended groups
   * @param groupType Type of groups requested
   * @returns Gets groups recommended for you based on the groups to whom those you follow belong.
   */
  public GetRecommendedGroups(
    createDateRange: GroupDateRange,
    groupType: GroupType,
    tokens?: ITokens
  ): Promise<APIResponse<GroupV2Card[]>> {
    const requestURL = `${this.url}/GroupV2/Recommended/${groupType}/${createDateRange}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Search for Groups.
   
    * @returns Search for Groups.
   */
  public GroupSearch(
    name: string,
    groupType: GroupType,
    creationDate: GroupDateRange,
    sortBy: GroupSortBy,
    groupMemberCountFilter: GroupMemberCountFilter | null,
    localeFilter: string,
    tagText: string,
    itemsPerPage: number,
    currentPage: number,
    requestContinuationToken: string,
    tokens?: ITokens
  ): Promise<APIResponse<GroupSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/Search/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
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
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Get information about a specific group of the given ID.
   * @param groupId Requested group's id.
   * @returns Get information about a specific group of the given ID.
   */
  public GetGroup(groupId: string, tokens?: ITokens): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get information about a specific group with the given name and type.
   * @param groupName Exact name of the group to find.
   * @param groupType Type of group to find.
   * @returns Get information about a specific group with the given name and type.
   */
  public GetGroupByName(groupName: string, groupType: GroupType, tokens?: ITokens): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/Name/${groupName}/${groupType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get information about a specific group with the given name and type. The POST version.
   
    * @returns Get information about a specific group with the given name and type. The POST version.
   */
  public GetGroupByNameV2(groupName: string, groupType: GroupType, tokens?: ITokens): Promise<APIResponse<GroupResponse>> {
    const requestURL = `${this.url}/GroupV2/NameV2/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupNameSearchRequest = { groupName, groupType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Gets a list of available optional conversation channels and their settings.
   * @param groupId Requested group's id.
   * @returns Gets a list of available optional conversation channels and their settings.
   */
  public GetGroupOptionalConversations(
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<GroupOptionalConversation[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
   * @param groupId Group ID of the group to edit.
   * @returns Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
   */
  public EditGroup(
    groupId: string,
    name: string,
    about: string,
    motto: string,
    theme: string,
    avatarImageIndex: number | null,
    tags: string,
    isPublic: boolean | null,
    membershipOption: MembershipOption | null,
    isPublicTopicAdminOnly: boolean | null,
    allowChat: boolean | null,
    chatSecurity: ChatSecuritySetting | null,
    callsign: string,
    locale: string,
    homepage: GroupHomepage | null,
    enableInvitationMessagingForAdmins: boolean | null,
    defaultPublicity: GroupPostPublicity | null,
    tokens?: ITokens
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
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
   * @param groupId Group ID of the group to edit.
   * @returns Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
   */
  public EditClanBanner(
    groupId: string,
    decalId: number,
    decalColorId: number,
    decalBackgroundColorId: number,
    gonfalonId: number,
    gonfalonColorId: number,
    gonfalonDetailId: number,
    gonfalonDetailColorId: number,
    tokens?: ITokens
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
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
   * @param groupId Group ID of the group to edit.
   * @returns Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
   */
  public EditFounderOptions(
    groupId: string,
    InvitePermissionOverride: boolean | null,
    UpdateCulturePermissionOverride: boolean | null,
    HostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel | null,
    UpdateBannerPermissionOverride: boolean | null,
    JoinLevel: RuntimeGroupMemberType | null,
    tokens?: ITokens
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
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Add a new optional conversation/chat channel. Requires admin permissions to the group.
   * @param groupId Group ID of the group to edit.
   * @returns Add a new optional conversation/chat channel. Requires admin permissions to the group.
   */
  public AddOptionalConversation(
    groupId: string,
    chatName: string,
    chatSecurity: ChatSecuritySetting,
    tokens?: ITokens
  ): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/Add/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupOptionalConversationAddRequest = { chatName, chatSecurity };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
   * @param conversationId Conversation Id of the channel being edited.
   * @param groupId Group ID of the group to edit.
   * @returns Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
   */
  public EditOptionalConversation(
    conversationId: string,
    groupId: string,
    chatEnabled: boolean | null,
    chatName: string,
    chatSecurity: ChatSecuritySetting | null,
    tokens?: ITokens
  ): Promise<APIResponse<string>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/OptionalConversations/Edit/${conversationId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupOptionalConversationEditRequest = { chatEnabled, chatName, chatSecurity };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Get the list of members in a given group.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId The ID of the group.
   * @param memberType Filter out other member types. Use None for all members.
   * @param nameSearch The name fragment upon which a search should be executed for members with matching display or unique names.
   * @returns Get the list of members in a given group.
   */
  public GetMembersOfGroup(
    currentpage: number,
    groupId: string,
    queryString: {
      memberType?: RuntimeGroupMemberType;
      nameSearch?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupMember>> {
    const requestURL = formatQueryStrings(`${this.url}/GroupV2/${groupId}/Members/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the list of members in a given group who are of admin level or higher.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId The ID of the group.
   * @returns Get the list of members in a given group who are of admin level or higher.
   */
  public GetAdminsAndFounderOfGroup(
    currentpage: number,
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupMember>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/AdminsAndFounder/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
   * @param groupId ID of the group to which the member belongs.
   * @param membershipId Membership ID to modify.
   * @param membershipType Membership type of the provide membership ID.
   * @param memberType New membertype for the specified member.
   * @returns Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
   */
  public EditGroupMembership(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    memberType: RuntimeGroupMemberType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/SetMembershipType/${memberType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
   * @param groupId Group ID to kick the user from.
   * @param membershipId Membership ID to kick.
   * @param membershipType Membership type of the provided membership ID.
   * @returns Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
   */
  public KickMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<GroupMemberLeaveResult>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Kick/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Bans the requested member from the requested group for the specified period of time.
   * @param groupId Group ID that has the member to ban.
   * @param membershipId Membership ID of the member to ban from the group.
   * @param membershipType Membership type of the provided membership ID.
   * @returns Bans the requested member from the requested group for the specified period of time.
   */
  public BanMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    comment: string,
    length: IgnoreLength,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Ban/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupBanRequest = { comment, length };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Unbans the requested member, allowing them to re-apply for membership.
   * @param groupId
   * @param membershipId Membership ID of the member to unban from the group
   * @param membershipType Membership type of the provided membership ID.
   * @returns Unbans the requested member, allowing them to re-apply for membership.
   */
  public UnbanMember(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Unban/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 entries.
   * @param groupId Group ID whose banned members you are fetching
   * @returns Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
   */
  public GetBannedMembersOfGroup(
    currentpage: number,
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupBan>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Banned/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the list of edits made to a given group. Only accessible to group Admins and above.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 entries.
   * @param groupId Group ID whose edit history you are fetching
   * @returns Get the list of edits made to a given group. Only accessible to group Admins and above.
   */
  public GetGroupEditHistory(
    currentpage: number,
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupEditHistory>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/EditHistory/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
   * @param founderIdNew The new founder for this group. Must already be a group admin.
   * @param groupId The target group id.
   * @param membershipType Membership type of the provided founderIdNew.
   * @returns An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
   */
  public AbdicateFoundership(
    founderIdNew: string,
    groupId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Admin/AbdicateFoundership/${membershipType}/${founderIdNew}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId ID of the group.
   * @returns Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
   */
  public GetPendingMemberships(
    currentpage: number,
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupMemberApplication>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/Pending/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the list of users who have been invited into the group.
   * @param currentpage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param groupId ID of the group.
   * @returns Get the list of users who have been invited into the group.
   */
  public GetInvitedIndividuals(
    currentpage: number,
    groupId: string,
    tokens?: ITokens
  ): Promise<APIResponse<SearchResultOfGroupMemberApplication>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/InvitedIndividuals/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @returns Approve all of the pending users for the given group.
   */
  public ApproveAllPending(groupId: string, message: string, tokens?: ITokens): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/ApproveAll/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = { message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Deny all of the pending users for the given group.
   * @param groupId ID of the group.
   * @returns Deny all of the pending users for the given group.
   */
  public DenyAllPending(groupId: string, message: string, tokens?: ITokens): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/DenyAll/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = { message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @returns Approve all of the pending users for the given group.
   */
  public ApprovePendingForList(
    groupId: string,
    memberships: UserMembership[],
    message: string,
    tokens?: ITokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/ApproveList/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationListRequest = { memberships, message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Approve the given membershipId to join the group/clan as long as they have applied.
   * @param groupId ID of the group.
   * @param membershipId The membership id being approved.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Approve the given membershipId to join the group/clan as long as they have applied.
   */
  public ApprovePending(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    message: string,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/Approve/${membershipType}/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = { message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Deny all of the pending users for the given group that match the passed-in .
   * @param groupId ID of the group.
   * @returns Deny all of the pending users for the given group that match the passed-in .
   */
  public DenyPendingForList(
    groupId: string,
    memberships: UserMembership[],
    message: string,
    tokens?: ITokens
  ): Promise<APIResponse<EntityActionResult[]>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/DenyList/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationListRequest = { memberships, message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Get information about the groups that a given member has joined.
   * @param filter Filter apply to list of joined groups.
   * @param groupType Type of group the supplied member founded.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Get information about the groups that a given member has joined.
   */
  public GetGroupsForMember(
    filter: GroupsForMemberFilter,
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<GetGroupsForMemberResponse>> {
    const requestURL = `${this.url}/GroupV2/User/${membershipType}/${membershipId}/${filter}/${groupType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Allows a founder to manually recover a group they can see in game but not on bungie.net
   * @param groupType Type of group the supplied member founded.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Allows a founder to manually recover a group they can see in game but not on bungie.net
   */
  public RecoverGroupForFounder(
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<GroupMembershipSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/Recover/${membershipType}/${membershipId}/${groupType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get information about the groups that a given member has applied to or been invited to.
   * @param filter Filter apply to list of potential joined groups.
   * @param groupType Type of group the supplied member applied.
   * @param membershipId Membership ID to for which to find applied groups.
   * @param membershipType Membership type of the supplied membership ID.
   * @returns Get information about the groups that a given member has applied to or been invited to.
   */
  public GetPotentialGroupsForMember(
    filter: GroupPotentialMemberStatus,
    groupType: GroupType,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<GroupPotentialMembershipSearchResponse>> {
    const requestURL = `${this.url}/GroupV2/User/Potential/${membershipType}/${membershipId}/${filter}/${groupType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Invite a user to join this group.
   * @param groupId ID of the group you would like to join.
   * @param membershipId Membership id of the account being invited.
   * @param membershipType MembershipType of the account being invited.
   * @returns Invite a user to join this group.
   */
  public IndividualGroupInvite(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    message: string,
    tokens?: ITokens
  ): Promise<APIResponse<GroupApplicationResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/IndividualInvite/${membershipType}/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: GroupApplicationRequest = { message };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Cancels a pending invitation to join a group.
   * @param groupId ID of the group you would like to join.
   * @param membershipId Membership id of the account being cancelled.
   * @param membershipType MembershipType of the account being cancelled.
   * @returns Cancels a pending invitation to join a group.
   */
  public IndividualGroupInviteCancel(
    groupId: string,
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<GroupApplicationResponse>> {
    const requestURL = `${this.url}/GroupV2/${groupId}/Members/IndividualInviteCancel/${membershipType}/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }
}
