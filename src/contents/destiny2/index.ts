import { request } from "../../adapters/http-request";
import {
  formatQueryStrings,
  parseAuthenticationHeaders,
} from "../../adapters/utils";
import { APIResponse } from "../../types/api";
import { Tokens } from "../../types/general";
import { BungieMembershipType, DestinyComponentType } from "../../types/enum";
import {
  AwaAuthorizationResult,
  AwaInitializeResponse,
  AwaPermissionRequested,
  AwaUserResponse,
  ClanBannerSource,
  DestinyActivityHistoryResults,
  DestinyAggregateActivityResults,
  DestinyCharacterResponse,
  DestinyClanAggregateStat,
  DestinyCollectibleNodeDetailResponse,
  DestinyDefinition,
  DestinyEntitySearchResult,
  DestinyEquipItemResults,
  DestinyHistoricalStatsAccountResult,
  DestinyHistoricalStatsByPeriod,
  DestinyHistoricalStatsDefinition,
  DestinyHistoricalWeaponStatsData,
  DestinyInsertPlugsActionRequest,
  DestinyInsertPlugsFreeActionRequest,
  DestinyInsertPlugsRequestEntry,
  DestinyItemActionRequest,
  DestinyItemChangeResponse,
  DestinyItemResponse,
  DestinyItemSetActionRequest,
  DestinyItemStateRequest,
  DestinyItemTransferRequest,
  DestinyLinkedProfilesResponse,
  DestinyManifest,
  DestinyMilestone,
  DestinyMilestoneContent,
  DestinyPostGameCarnageReportData,
  DestinyPostmasterTransferRequest,
  DestinyProfileResponse,
  DestinyPublicMilestone,
  DestinyReportOffensePgcrRequest,
  DestinyVendorResponse,
  DestinyVendorsResponse,
  UserInfoCard,
} from "../../types/interface";

export class Destiny {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Getting Destiny Manifest
   */
  GetDestinyManifest(): Promise<APIResponse<DestinyManifest>> {
    return request(`${this.url}/Destiny2/Manifest/`, true, "GET", this.headers);
  }

  /**
   * Returns the static definition of an entity of the given Type and hash identifier.
   * @param {string} entityType The type of entity for whom you would like results.
   * @param {uint32} hashIdentifier The hash identifier for the specific Entity you want returned.
   * @returns The static definition of an entity of the given Type and hash identifier.
   */
  GetDestinyEntityDefinition(
    entityType: string,
    hashIdentifier: number
  ): Promise<APIResponse<DestinyDefinition>> {
    const requestURL = `${this.url}/Destiny2/Manifest/${entityType}/${hashIdentifier}/`;
    return request(requestURL, true, "GET", this.headers);
  }

  /**
   * Returns a list of Destiny memberships given a full Gamertag or PSN ID.
   * @param {uint32} membershipType A valid non-BungieNet membership type, or All.
   * @param {string} displayName The full gamertag or PSN id of the player.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns A list of Destiny memberships given a full Gamertag or PSN ID
   */
  SearchDestinyPlayerByBungieName(
    membershipType: BungieMembershipType,
    displayName: string
  ): Promise<APIResponse<UserInfoCard[]>> {
    const requestURL = `${this.url}/Destiny2/SearchDestinyPlayerByBungieName/${membershipType}/`;

    const [name, code] = displayName.split("#");
    const searchBody = JSON.stringify({
      displayName: name,
      displayNameCode: code,
    });
    return request(requestURL, true, "POST", this.headers, searchBody);
  }

  /**
   * Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information.
   * @param {uint32} membershipType Destiny membership ID.
   * @param {string} membershipId A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns A summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information.
   */
  GetLinkedProfiles(
    membershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { getAllMemberships: boolean },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyLinkedProfilesResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns Destiny Profile information for the supplied membership.
   * @param {int64} membershipType Destiny membership ID.
   * @param {int32} destinyMembershipId A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Destiny Profile information for the supplied membership.
   */
  GetProfile(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyProfileResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns character information for the supplied character.
   * @param {int64} membershipType ID of the character.
   * @param {int64} destinyMembershipId Destiny membership ID.
   * @param {int32} characterId A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Character information for the supplied character.
   */
  GetCharacter(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyCharacterResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   * @param {string} groupId A valid group id of clan.
   * @returns Information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   */
  GetClanWeeklyRewardState(
    groupId: string,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyMilestone>> {
    const requestURL = `${this.url}/Destiny2/Clan/${groupId}/WeeklyRewardState/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the dictionary of values for the Clan Banner
   * @returns Returns the dictionary of values for the Clan Banner
   */
  GetClanBannerSource(tokens?: Tokens): Promise<APIResponse<ClanBannerSource>> {
    const requestURL = `${this.url}/Destiny2/Clan/ClanBannerDictionary/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   * @param {string} destinyMembershipId The membership ID of the destiny profile.
   * @param {string} itemInstanceId The Instance ID of the destiny item.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns The details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   */
  GetItem(
    destinyMembershipId: string,
    itemInstanceId: string,
    membershipType: BungieMembershipType,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyItemResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns character information for the supplied character.
   * @param {string} characterId ID of the character.
   * @param {string} destinyMembershipId The membership ID of the destiny profile.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Character information for the supplied character.
   */
  GetVendors(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { components?: DestinyComponentType[]; filter?: number },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyVendorsResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the details of a specific Vendor.
   * @param {string} characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param {string} destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {uint32} vendorHash The Hash identifier of the Vendor to be returned.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns The details of a specific Vendor.
   */
  GetVendor(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    vendorHash: number,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyVendorResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get items available from vendors where the vendors have items for sale that are common for everyone.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Items available from vendors where the vendors have items for sale that are common for everyone.
   */
  GetPublicVendors(
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyVendorsResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Vendors/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {string} destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param {string} characterId The Destiny Character ID of the character for whom we're getting collectible detail info.
   * @param {uint32} collectiblePresentationNodeHash The hash identifier of the Presentation Node for whom we should return collectible details
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
   */
  GetCollectibleNodeDetails(
    characterId: string,
    collectiblePresentationNodeHash: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyCollectibleNodeDetailResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Transfer an item to/from your vault.
   * @param {uint32} itemReferenceHash
   * @param {int32} stackSize
   * @param {boolean} transferToVault
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  TransferItem(
    itemReferenceHash: number,
    stackSize: number,
    transferToVault: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/TransferItem/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemTransferRequest = {
      itemReferenceHash,
      stackSize,
      transferToVault,
      itemId,
      characterId,
      membershipType,
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
   * Extract an item from the Postmaster, with whatever implications that may entail.
   * @param {uint32} itemReferenceHash
   * @param {int32} stackSize
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  PullFromPostmaster(
    itemReferenceHash: number,
    stackSize: number,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/PullFromPostmaster/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyPostmasterTransferRequest = {
      itemReferenceHash,
      stackSize,
      itemId,
      characterId,
      membershipType,
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
   * Equip an item.
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  EquipItem(
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/EquipItem/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemActionRequest = {
      itemId,
      characterId,
      membershipType,
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
   * Equip a list of items by itemInstanceIds.
   * @param {string[]} itemIds
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  EquipItems(
    itemIds: string[],
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyEquipItemResults>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/EquipItems/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemSetActionRequest = {
      itemIds,
      characterId,
      membershipType,
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
   * Set the Lock State for an instanced item.
   * @param {boolean} state
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  SetItemLockState(
    state: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/SetLockState/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemStateRequest = {
      state,
      itemId,
      characterId,
      membershipType,
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
   * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.
   * @param {boolean} state
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @param {object} tokens
   * @returns
   */
  SetQuestTrackedState(
    state: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/SetTrackedState/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemStateRequest = {
      state,
      itemId,
      characterId,
      membershipType,
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
   * Insert a plug into a socketed item.
   * @param {string} actionToken
   * @param {string} itemInstanceId
   * @param {object} plug
   * @param {string} characterId
   * @param {int32} membershipType
   * @returns
   */
  InsertSocketPlug(
    actionToken: string,
    itemInstanceId: string,
    plug: DestinyInsertPlugsRequestEntry,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyItemChangeResponse>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/InsertSocketPlug/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyInsertPlugsActionRequest = {
      actionToken,
      itemInstanceId,
      plug,
      characterId,
      membershipType,
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
   * Insert a 'free' plug into an item's socket.
   * @param {object} plug
   * @param {string} itemId
   * @param {string} characterId
   * @param {int32} membershipType
   * @returns
   */
  InsertSocketPlugFree(
    plug: DestinyInsertPlugsRequestEntry,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyItemChangeResponse>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/InsertSocketPlugFree/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyInsertPlugsFreeActionRequest = {
      plug,
      itemId,
      characterId,
      membershipType,
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
   * Gets the available post game carnage report for the activity ID.
   * @param {string} activityId The ID of the activity whose PGCR is requested.
   * @returns The available post game carnage report for the activity ID.
   */
  GetPostGameCarnageReport(
    activityId: string,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyPostGameCarnageReportData>> {
    const requestURL = `${this.url}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Report a player that you met in an activity that was engaging in ToS-violating activities.
   * @param activityId The ID of the activity where you ran into the brigand that you're reporting.
   * @param reasonCategoryHashes These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries.
   * @param reasonHashes If applicable, provide a more specific reason(s) within the general category of problems provided by the reasonHash.
   * @param offendingCharacterId Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of the user that you thought was violating terms of use.
   * @returns A player that you met in an activity that was engaging in ToS-violating activities.
   */
  ReportOffensivePostGameCarnageReportPlayer(
    activityId: string,
    reasonCategoryHashes: number[],
    reasonHashes: number[],
    offendingCharacterId: string,
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Stats/PostGameCarnageReport/${activityId}/Report/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyReportOffensePgcrRequest = {
      reasonCategoryHashes,
      reasonHashes,
      offendingCharacterId,
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
   * Gets historical stats definitions.
   * @returns Historical stats definitions.
   */
  GetHistoricalStatsDefinition(
    tokens?: Tokens
  ): Promise<APIResponse<DestinyHistoricalStatsDefinition>> {
    const requestURL = `${this.url}/Destiny2/Stats/Definition/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   * @param {string} groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   */
  GetClanLeaderboards(
    groupId: string,
    queryString?: { maxtop?: number; modes?: string; statid?: string },
    tokens?: Tokens
  ): Promise<APIResponse<object>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Stats/Leaderboards/Clans/${groupId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets aggregated stats for a clan using the same categories as the clan leaderboards.
   * @param {string} groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Aggregated stats for a clan using the same categories as the clan leaderboards.
   */
  GetClanAggregateStats(
    groupId: string,
    queryString?: { modes?: string },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyClanAggregateStat[]>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Stats/AggregateClanStats/${groupId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   */
  GetLeaderboards(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { maxtop?: number; modes?: string; statid?: string },
    tokens?: Tokens
  ): Promise<APIResponse<object>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   * @param {string} characterId The specific character to build the leaderboard around for the provided Destiny Membership.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
   */
  GetLeaderboardsForCharacter(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: { maxtop?: number; modes?: string; statid?: string },
    tokens?: Tokens
  ): Promise<APIResponse<object>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${characterId}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a page list of Destiny items.
   * @param {string} searchTerm The string to use when searching for Destiny entities.
   * @param {string} type The type of entity for whom you would like results.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns A page list of Destiny items.
   */
  SearchDestinyEntities(
    searchTerm: string,
    type: string,
    queryString?: { page?: number },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyEntitySearchResult>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Armory/Search/${type}/${searchTerm}/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets historical stats for indicated character.
   * @param {string} characterId The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Historical stats for indicated character.
   */
  GetHistoricalStats(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: {
      dayend?: string;
      daystart?: string;
      groups?: number[];
      modes?: number[];
      periodType?: number;
    },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyHistoricalStatsByPeriod>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets aggregate historical stats organized around each character for a given account.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Aggregate historical stats organized around each character for a given account.
   */
  GetHistoricalStatsForAccount(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: {
      groups?: number[];
    },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyHistoricalStatsAccountResult>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets activity history stats for indicated character.
   * @param {string} characterId The id of the character to retrieve.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns Activity history stats for indicated character.
   */
  GetActivityHistory(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString?: {
      count?: number;
      mode?: number;
      page?: number;
    },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyActivityHistoryResults>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/`,
      queryString
    );

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets details about unique weapon usage, including all exotic weapons.
   * @param {string} characterId The id of the character to retrieve.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @returns Details about unique weapon usage, including all exotic weapons.
   */
  GetUniqueWeaponHistory(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyHistoricalWeaponStatsData>> {
    const requestURL = `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/UniqueWeapons/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets all activities the character has participated in together with aggregate statistics for those activities.
   * @param {string} characterId The specific character whose activities should be returned.
   * @param {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @returns All activities the character has participated in together with aggregate statistics for those activities.
   */
  GetDestinyAggregateActivityStats(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyAggregateActivityResults>> {
    const requestURL = `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/AggregateActivityStats/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets custom localized content for the milestone of the given hash, if it exists.
   * @param {uint32} milestoneHash The identifier for the milestone to be returned.
   * @returns Custom localized content for the milestone of the given hash, if it exists.
   */
  GetPublicMilestoneContent(
    milestoneHash: number,
    tokens?: Tokens
  ): Promise<APIResponse<DestinyMilestoneContent>> {
    const requestURL = `${this.url}/Destiny2/Milestones/${milestoneHash}/Content/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets public information about currently available Milestones.
   * @returns Public information about currently available Milestones.
   */
  GetPublicMilestones(
    tokens?: Tokens
  ): Promise<APIResponse<DestinyPublicMilestone>> {
    const requestURL = `${this.url}/Destiny2/Milestones/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Initialize a request to perform an advanced write action.
   * @param type Type of advanced write action.
   * @param affectedItemId Item instance ID the action shall be applied to.
   * @param membershipType Destiny membership type of the account to modify.
   * @param characterId Destiny character ID, if applicable, that will be affected by the action.
   * @returns A request to perform an advanced write action.
   */
  AwaInitializeRequest(
    type: number,
    affectedItemId: string | null,
    membershipType: BungieMembershipType,
    characterId: string,
    tokens?: Tokens
  ): Promise<APIResponse<AwaInitializeResponse>> {
    const requestURL = `${this.url}/Destiny2/Awa/Initialize/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: AwaPermissionRequested = {
      type,
      affectedItemId,
      membershipType,
      characterId,
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
   * Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
   * @param selection Indication of the selection the user has made.
   * @param correlationId Correlation ID of the request.
   * @param nonce Secret nonce received via the PUSH notification.
   * @returns The result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
   */
  AwaProvideAuthorizationResult(
    selection: number,
    correlationId: string,
    nonce: string[],
    tokens?: Tokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Awa/AwaProvideAuthorizationResult/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: AwaUserResponse = {
      selection,
      correlationId,
      nonce,
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
   * Returns the action token if user approves the request.
   * @param correlationId The identifier for the advanced write action request.
   * @returns The action token if user approves the request.
   */
  AwaGetActionToken(
    correlationId: string,
    tokens?: Tokens
  ): Promise<APIResponse<AwaAuthorizationResult>> {
    const requestURL = `${this.url}/Destiny2/Awa/GetActionToken/${correlationId}/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }
}
