const { request } = require("./adapters/http-request");
const { formatQueryStrings } = require("./utils");

module.exports = class Quria {
  constructor(config = {}) {
    this.host = "https://www.bungie.net";
    this.config = {
      urls: {
        api: `${this.host}/Platform`,
        authorization: `${this.host}/en/OAuth/Authorize`,
        token: `${this.host}/Platform/App/OAuth/token/`,
      },
      app: {
        client_id: config.CLIENT_ID || "",
        client_secret: config.CLIENT_SECRET || "",
        redirect_uri: config.REDIRECT_URI || "",
      },
      headers: {
        "X-API-Key": config.API_KEY || "",
      },
    };
    this.parameters = require("./helpers/parameters");
  }

  /**
   * Getting Destiny Manifest
   */
  GetDestinyManifest() {
    return request(
      `${this.config.urls.api}/Destiny2/Manifest/`,
      "GET",
      this.config.headers
    );
  }

  /**
   *
   * @param {string} entityType The type of entity for whom you would like results.
   * @param {uint32} hashIdentifier The hash identifier for the specific Entity you want returned.
   */
  GetDestinyEntityDefinition(entityType, hashIdentifier) {
    return request(
      `${this.config.urls.api}/Destiny2/Manifest/${entityType}/${hashIdentifier}/`,
      "GET",
      this.config.headers
    );
  }

  /**
   *
   * @param {uint32} membershipType
   * @param {string} displayName
   * @returns
   */
  SearchDestinyPlayer(membershipType, displayName) {
    return request(
      `${this.config.urls.api}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`,
      "GET",
      this.config.headers
    );
  }

  /**
   *
   * @param {uint32} membershipType Destiny membership ID.
   * @param {string} membershipId A valid non-BungieNet membership type.
   * @returns
   */
  GetLinkedProfiles(membershipType, membershipId, getAllMemberships = false) {
    return request(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/?getAllMemberships=${getAllMemberships}`,
      "GET",
      this.config.headers
    );
  }

  /**
   * Returns Destiny Profile information for the supplied membership.
   * @param {int64} membershipType Destiny membership ID.
   * @param {int32} destinyMembershipId A valid non-BungieNet membership type.
   * @param {array} components A comma separated list of components to return (as strings or numeric values).
   * @returns Destiny Profile information for the supplied membership.
   */
  GetProfile(
    membershipType,
    destinyMembershipId,
    queryString = { components: [] }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
      queryString
    );

    return request(requestURL, "GET", this.config.headers);
  }

  /**
   * Returns character information for the supplied character.
   * @param {int64} membershipType ID of the character.
   * @param {int64} destinyMembershipId Destiny membership ID.
   * @param {int32} characterId A valid non-BungieNet membership type.
   * @param {array} components A comma separated list of components to return (as strings or numeric values).
   * @returns Character information for the supplied character.
   */
  GetCharacter(
    membershipType,
    destinyMembershipId,
    characterId,
    queryString = { components: [] }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  /**
   * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   * @param {int64} groupId A valid group id of clan.
   * @returns Information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   */
  GetClanWeeklyRewardState(groupId) {
    return request(
      `${this.config.urls.api}/Destiny2/Clan/${groupId}/WeeklyRewardState/`,
      "GET",
      this.config.headers
    );
  }

  /**
   * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {int64} destinyMembershipId The membership ID of the destiny profile.
   * @param {int64} itemInstanceId The Instance ID of the destiny item.
   * @param {array} components A comma separated list of components to return (as strings or numeric values).
   * @returns The details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId.
   */
  GetItem(
    membershipType,
    destinyMembershipId,
    itemInstanceId,
    queryString = { components: [] }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  /**
   * Returns character information for the supplied character.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {int64} destinyMembershipId The membership ID of the destiny profile.
   * @param {int64} characterId ID of the character.
   * @param {array} components A comma separated list of components to return (as strings or numeric values).
   * @returns Character information for the supplied character.
   */
  GetVendors(
    membershipType,
    destinyMembershipId,
    characterId,
    queryString = {
      components: [],
      filters: [],
    }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  /**
   * Get the details of a specific Vendor.
   * @param {int32} membershipType A valid non-BungieNet membership type.
   * @param {int64} destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param {int64} characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param {uint32} vendorHash The Hash identifier of the Vendor to be returned.
   * @param {array} components A comma separated list of components to return (as strings or numeric values).
   * @returns The details of a specific Vendor.
   */
  GetVendor(
    membershipType,
    destinyMembershipId,
    characterId,
    vendorHash,
    queryString = {
      components: [],
    }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  GetPublicVendors(queryString = { components: [] }) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/Vendors/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  GetCollectibleNodeDetails(
    membershipType,
    destinyMembershipId,
    characterId,
    collectiblePresentationNodeHash,
    queryString = {
      components: [],
    }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  // @Note: To do when implements auth
  TransferItem() {}

  // @Note: To do when implements auth
  PullFromPostmaster() {}

  // @Note: To do when implements auth
  EquipItem() {}

  // @Note: To do when implements auth
  EquipItems() {}

  // @Note: To do when implements auth
  SetItemLockState() {}

  // @Note: To do when implements auth
  SetQuestTrackedState() {}

  // @Note: To do when implements auth
  InsertSocketPlug() {}

  GetPostGameCarnageReport(activityId) {
    return request(
      `${this.config.urls.api}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`
    );
  }

  // @Note: To do when implements auth
  ReportOffensivePostGameCarnageReportPlayer(activityId) {}

  GetHistoricalStatsDefinition() {
    return request(
      `${this.config.urls.api}/Destiny2/Stats/Definition/`,
      "GET",
      this.config.headers
    );
  }

  GetClanLeaderboards(
    groupId,
    queryString = { maxtop: null, modes: null, statid: null }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/Stats/Leaderboards/Clans/${groupId}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  GetClanAggregateStats(groupId, queryString = { modes: null }) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/Stats/AggregateClanStats/${groupId}/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  GetLeaderboards(
    membershipType,
    destinyMembershipId,
    queryString = { maxtop: null, modes: null, statid: null }
  ) {
    const requestURL = formatQueryStrings(
      `${this.config.urls.api}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
      queryString
    );
    return request(requestURL, "GET", this.config.headers);
  }

  GetLeaderboardsForCharacter() {}

  SearchDestinyEntities() {}

  GetHistoricalStats() {}

  GetHistoricalStatsForAccount() {}

  GetActivityHistory() {}

  GetUniqueWeaponHistory() {}

  GetDestinyAggregateActivityStats() {}

  GetPublicMilestoneContent() {}

  GetPublicMilestones() {}

  AwaInitializeRequest() {}

  AwaProvideAuthorizationResult() {}

  AwaGetActionToken() {}
};
