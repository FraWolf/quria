const { request } = require("./adapters/http-request");
const { formatComponents } = require("./utils");

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
    return request(`${this.config.urls.api}/Destiny2/Manifest/`);
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
  GetLinkedProfiles(membershipType, membershipId) {
    return request(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`,
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
  GetProfile(membershipType, destinyMembershipId, components = []) {
    const requestURL = formatComponents(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
      components
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
    components = []
  ) {
    const requestURL = formatComponents(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
      components
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
    components = []
  ) {
    const requestURL = formatComponents(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
      components
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
    components = []
  ) {
    const requestURL = formatComponents(
      `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
      components
    );
    return request(requestURL, "GET", this.config.headers);
  }
};
