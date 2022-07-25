import { request } from "@adapters/http-request";
import { APIResponse, MembershipTypes } from "@d2types/api";
import {
  DestinyEntityDefinition,
  DestinyLinkedProfile,
  DestinyPlayerProfile,
  DestinyProfileResponse,
} from "@d2types/destiny";
import { Tokens } from "@d2types/general";
import { Manifest } from "@d2types/manifest";
import { DestinyComponentType } from "@d2types/manifest/DestinyComponentType";
import {
  formatQueryStrings,
  parseAuthenticationHeaders,
} from "@adapters/utils";

export class Destiny {
  constructor(
    private url: string,
    private headers: { [key: string]: string }
  ) {}

  /**
   * Getting Destiny Manifest
   */
  GetDestinyManifest(): Promise<APIResponse<Manifest>> {
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
  ): Promise<APIResponse<DestinyEntityDefinition>> {
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
    membershipType: MembershipTypes,
    displayName: string
  ): Promise<APIResponse<DestinyPlayerProfile[]>> {
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
    membershipType: MembershipTypes,
    membershipId: string,
    queryString?: { getAllMemberships: boolean },
    tokens?: Tokens
  ): Promise<APIResponse<DestinyLinkedProfile>> {
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
    membershipType: MembershipTypes,
    destinyMembershipId: string,
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
    membershipType: MembershipTypes,
    destinyMembershipId: string,
    characterId: string,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ) {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   * @param {int64} groupId A valid group id of clan.
   * @returns Information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   */
  GetClanWeeklyRewardState(groupId: number, tokens?: Tokens) {
    const requestURL = `${this.url}/Destiny2/Clan/${groupId}/WeeklyRewardState/`;

    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {int64} destinyMembershipId The membership ID of the destiny profile.
   * @param {int64} itemInstanceId The Instance ID of the destiny item.
   * @param {object} queryString The optional querystrings that can be applied.
   * @returns The details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   */
  GetItem(
    membershipType: MembershipTypes,
    destinyMembershipId: string,
    itemInstanceId: string,
    queryString?: { components: DestinyComponentType[] },
    tokens?: Tokens
  ) {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    return request(requestURL, true, "GET", authHeaders);
  }

  // /**
  //  * Returns character information for the supplied character.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The membership ID of the destiny profile.
  //  * @param {int64} characterId ID of the character.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Character information for the supplied character.
  //  */
  // GetVendors(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   queryString = {
  //     components: [],
  //     filters: [],
  //   },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Get the details of a specific Vendor.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId Destiny membership ID of another user. You may be denied.
  //  * @param {int64} characterId The Destiny Character ID of the character for whom we're getting vendor info.
  //  * @param {uint32} vendorHash The Hash identifier of the Vendor to be returned.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns The details of a specific Vendor.
  //  */
  // GetVendor(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   vendorHash,
  //   queryString = {
  //     components: [],
  //   },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Get items available from vendors where the vendors have items for sale that are common for everyone.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Items available from vendors where the vendors have items for sale that are common for everyone.
  //  */
  // GetPublicVendors(queryString = { components: [] }) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/Vendors/`,
  //     queryString
  //   );
  //   return request(requestURL, "GET", this.wrapper.config.headers);
  // }

  // /**
  //  * Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId Destiny membership ID of another user. You may be denied.
  //  * @param {int64} characterId The Destiny Character ID of the character for whom we're getting collectible detail info.
  //  * @param {uint32} collectiblePresentationNodeHash The hash identifier of the Presentation Node for whom we should return collectible details
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
  //  */
  // GetCollectibleNodeDetails(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   collectiblePresentationNodeHash,
  //   queryString = {
  //     components: [],
  //   },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Transfer an item to/from your vault.
  //  * @param {uint32} itemReferenceHash
  //  * @param {int32} stackSize
  //  * @param {boolean} transferToVault
  //  * @param {int64} itemId
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // TransferItem(
  //   itemReferenceHash,
  //   stackSize,
  //   transferToVault,
  //   itemId,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/TransferItem/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     {
  //       itemReferenceHash,
  //       stackSize,
  //       transferToVault,
  //       itemId,
  //       characterId,
  //       membershipType,
  //     }
  //   );
  // }

  // /**
  //  * Extract an item from the Postmaster, with whatever implications that may entail.
  //  * @param {uint32} itemReferenceHash
  //  * @param {int32} stackSize
  //  * @param {int64} itemId
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // PullFromPostmaster(
  //   itemReferenceHash,
  //   stackSize,
  //   itemId,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/PullFromPostmaster/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     {
  //       itemReferenceHash,
  //       stackSize,
  //       itemId,
  //       characterId,
  //       membershipType,
  //     }
  //   );
  // }

  // /**
  //  * Equip an item.
  //  * @param {int64} itemId
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // EquipItem(
  //   itemId,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/EquipItem/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     { itemId, characterId, membershipType }
  //   );
  // }

  // /**
  //  * Equip a list of items by itemInstanceIds.
  //  * @param {array} itemIds
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // EquipItems(
  //   itemIds,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/EquipItems/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     {
  //       itemIds,
  //       characterId,
  //       membershipType,
  //     }
  //   );
  // }

  // /**
  //  * Set the Lock State for an instanced item.
  //  * @param {boolean} state
  //  * @param {int64} itemId
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // SetItemLockState(
  //   state,
  //   itemId,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.api}/Destiny2/Actions/Items/SetLockState/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     { state, itemId, characterId, membershipType }
  //   );
  // }

  // /**
  //  * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.
  //  * @param {boolean} state
  //  * @param {int64} itemId
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // SetQuestTrackedState(
  //   state,
  //   itemId,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/SetTrackedState/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     { state, itemId, characterId, membershipType }
  //   );
  // }

  // /**
  //  * Insert a plug into a socketed item.
  //  * @param {string} actionToken
  //  * @param {int64} itemInstanceId
  //  * @param {object} plug
  //  * @param {int64} characterId
  //  * @param {int32} membershipType
  //  * @param {object} tokens
  //  * @returns
  //  */
  // InsertSocketPlug(
  //   actionToken,
  //   itemInstanceId,
  //   plug,
  //   characterId,
  //   membershipType,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Actions/Items/InsertSocketPlug/`,
  //     "POST",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens),
  //     { actionToken, itemInstanceId, plug, characterId, membershipType }
  //   );
  // }

  // /**
  //  * Gets the available post game carnage report for the activity ID.
  //  * @param {int64} activityId The ID of the activity whose PGCR is requested.
  //  * @returns The available post game carnage report for the activity ID.
  //  */
  // GetPostGameCarnageReport(activityId) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`,
  //     "GET",
  //     this.wrapper.config.headers
  //   );
  // }

  // // @Note: To do when implements auth
  // ReportOffensivePostGameCarnageReportPlayer(activityId) {}

  // /**
  //  * Gets historical stats definitions.
  //  * @returns Historical stats definitions.
  //  */
  // GetHistoricalStatsDefinition() {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Stats/Definition/`,
  //     "GET",
  //     this.wrapper.config.headers
  //   );
  // }

  // /**
  //  * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  * @param {int64} groupId Group ID of the clan whose leaderboards you wish to fetch.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  */
  // GetClanLeaderboards(
  //   groupId,
  //   queryString = { maxtop: null, modes: null, statid: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/Stats/Leaderboards/Clans/${groupId}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets aggregated stats for a clan using the same categories as the clan leaderboards.
  //  * @param {int64} groupId Group ID of the clan whose leaderboards you wish to fetch.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Aggregated stats for a clan using the same categories as the clan leaderboards.
  //  */
  // GetClanAggregateStats(
  //   groupId,
  //   queryString = { modes: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/Stats/AggregateClanStats/${groupId}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  */
  // GetLeaderboards(
  //   membershipType,
  //   destinyMembershipId,
  //   queryString = { maxtop: null, modes: null, statid: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {int64} characterId The specific character to build the leaderboard around for the provided Destiny Membership.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.
  //  */
  // GetLeaderboardsForCharacter(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   queryString = { maxtop: null, modes: null, statid: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${characterId}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets a page list of Destiny items.
  //  * @param {string} type The type of entity for whom you would like results.
  //  * @param {string} searchTerm The string to use when searching for Destiny entities.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns A page list of Destiny items.
  //  */
  // SearchDestinyEntities(
  //   type,
  //   searchTerm,
  //   queryString = { page: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/Armory/Search/${type}/${searchTerm}/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets historical stats for indicated character.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {int64} characterId The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Historical stats for indicated character.
  //  */
  // GetHistoricalStats(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   queryString = {
  //     dayend: null,
  //     daystart: null,
  //     groups: null,
  //     modes: null,
  //     periodType: null,
  //   },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets aggregate historical stats organized around each character for a given account.
  //  * @param {int64} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Aggregate historical stats organized around each character for a given account.
  //  */
  // GetHistoricalStatsForAccount(
  //   membershipType,
  //   destinyMembershipId,
  //   queryString = { groups: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets activity history stats for indicated character.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {int64} characterId The id of the character to retrieve.
  //  * @param {object} queryString The optional querystrings that can be applied.
  //  * @returns Activity history stats for indicated character.
  //  */
  // GetActivityHistory(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   queryString = { count: null, mode: null, page: null },
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   const requestURL = formatQueryStrings(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/`,
  //     queryString
  //   );
  //   return request(
  //     requestURL,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets details about unique weapon usage, including all exotic weapons.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {int64} characterId The id of the character to retrieve.
  //  * @returns Details about unique weapon usage, including all exotic weapons.
  //  */
  // GetUniqueWeaponHistory(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/UniqueWeapons/`,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets all activities the character has participated in together with aggregate statistics for those activities.
  //  * @param {int32} membershipType A valid non-BungieNet membership type.
  //  * @param {int64} destinyMembershipId The Destiny membershipId of the user to retrieve.
  //  * @param {int64} characterId The specific character whose activities should be returned.
  //  * @returns All activities the character has participated in together with aggregate statistics for those activities.
  //  */
  // GetDestinyAggregateActivityStats(
  //   membershipType,
  //   destinyMembershipId,
  //   characterId,
  //   tokens = { access_token: null, refresh_token: null }
  // ) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/AggregateActivityStats/`,
  //     "GET",
  //     parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
  //   );
  // }

  // /**
  //  * Gets custom localized content for the milestone of the given hash, if it exists.
  //  * @param {uint32} milestoneHash The identifier for the milestone to be returned.
  //  * @returns Custom localized content for the milestone of the given hash, if it exists.
  //  */
  // GetPublicMilestoneContent(milestoneHash) {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Milestones/${milestoneHash}/Content/`,
  //     "GET",
  //     this.wrapper.config.headers
  //   );
  // }

  // /**
  //  * Gets public information about currently available Milestones.
  //  * @returns Public information about currently available Milestones.
  //  */
  // GetPublicMilestones() {
  //   return request(
  //     `${this.wrapper.config.urls.api}/Destiny2/Milestones/`,
  //     "GET",
  //     this.wrapper.config.headers
  //   );
  // }

  // // @Note: To do when implements auth
  // AwaInitializeRequest() {}

  // // @Note: To do when implements auth
  // AwaProvideAuthorizationResult() {}

  // // @Note: To do when implements auth
  // AwaGetActionToken() {}
}
