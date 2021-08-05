const btoa = require("btoa");
const { request } = require("../adapters/http-request");
const { formatQueryStrings } = require("../utils");

module.exports = class OAuth {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  /**
   * Generate authorization url with default client id and state.
   * @param {string} state OPTIONAL: String containing some information, particulary for avoid cross site scripting.
   * @returns Authorization url.
   */
  GenerateAuthorizationURL(state = null) {
    return formatQueryStrings(`${this.wrapper.config.urls.authorization}`, {
      client_id: this.wrapper.config.app.client_id,
      response_type: "code",
      state,
    });
  }

  GetOAuthAccessToken(code) {
    const encodedCredentials = btoa(
      `${this.wrapper.config.app.client_id}:${this.wrapper.config.app.client_secret}`
    );
    return request(
      `${this.wrapper.config.urls.token}`,
      "POST",
      {
        ...this.wrapper.config.headers,
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      `grant_type=authorization_code&code=${encodeURIComponent(code)}`
    );
  }

  RefreshAccessToken(access_token, refresh_token) {}
};
