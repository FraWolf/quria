const { request } = require("../adapters/http-request");

module.exports = class User {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  /**
   * Loads a bungienet user by membership id.
   * @param {int64} id The requested Bungie.net membership id.
   * @returns bungienet user informations.
   */
  GetBungieNetUserById(id) {
    return request(
      `${this.wrapper.config.urls.api}/User/GetBungieNetUserById/${id}`,
      "GET",
      this.wrapper.config.headers
    );
  }

  /**
   * Returns a list of credential types attached to the requested account
   * @param {int64} membershipId The user's membership id
   * @returns a list of credential types attached to the requested account
   */
  GetCredentialTypesForTargetAccount(membershipId) {
    return request(
      `${this.wrapper.config.urls.api}/User/GetCredentialTypesForTargetAccount/${membershipId}`,
      "GET",
      this.wrapper.config.headers
    );
  }

  /**
   * Returns a list of all available user themes.
   * @returns a list of all available user themes.
   */
  GetAvailableThemes() {
    return request(
      `${this.wrapper.config.urls.api}/User/GetAvailableThemes`,
      "GET",
      this.wrapper.config.headers
    );
  }

  /**
   * Returns a list of accounts associated with the supplied membership ID and membership type.
   * @param {int64} membershipId
   * @param {int32} membershipType
   * @returns a list of accounts associated with the supplied membership ID and membership type.
   */
  GetMembershipDataById(membershipId, membershipType) {
    return request(
      `${this.wrapper.config.urls}/User/GetMembershipsById/${membershipId}/${membershipType}`,
      "GET",
      this.wrapper.config.headers
    );
  }

  /**
   * Returns a list of accounts associated with signed in user.
   * @param {object} tokens Tokens object for authenticated request
   * @returns a list of accounts associated with signed in user.
   */
  GetMembershipDataForCurrentUser(
    tokens = { access_token: null, refresh_token: null }
  ) {
    return request(
      `${this.wrapper.config.urls}/User/GetMembershipsForCurrentUser`,
      "GET",
      parseAuthenticationHeaders(this.wrapper.config.headers, tokens)
    );
  }

  /**
   * Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
   * @param {string} credential The credential to look up. Must be a valid SteamID64.
   * @param {byte} crType The credential type. 'SteamId' is the only valid value at present.
   * @returns any hard linked membership given a credential.
   */
  GetMembershipFromHardLinkedCredential(credential, crType) {
    return request(
      `${this.wrapper.config.urls}/User/GetMembershipFromHardLinkedCredential/${crType}/${credential}`,
      "GET",
      this.wrapper.config.headers
    );
  }

  /**
   * Given the prefix of a global display name, returns all users who share that name.
   * @param {string} displayNamePrefix The display name prefix you're looking for.
   * @param {int32} page The zero-based page of results you desire.
   * @returns the prefix of a global display name, returns all users who share that name.
   */
  SearchByGlobalNamePrefix(displayNamePrefix, page) {
    return request(
      `${this.wrapper.config.urls.api}/User/Search/Prefix/${displayNamePrefix}/${page}`,
      "GET",
      this.wrapper.config.headers
    );
  }
};
