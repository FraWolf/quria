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
};
