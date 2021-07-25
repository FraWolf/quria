const { request } = require("./http-request");

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
   * @param {uint32} membershipType
   * @param {string} membershipId
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
   * @param {array} components
   * @returns Destiny Profile information for the supplied membership.
   */
  GetProfile(membershipType, destinyMembershipId, components = []) {
    var requestURL = `${this.config.urls.api}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`;
    requestURL +=
      components.length > 0 ? `?components=${components.join(",")}` : "";

    return request(requestURL, "GET", this.config.headers);
  }
};
