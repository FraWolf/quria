const { request } = require("./http-request");

module.exports = class Warmind {
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
    const manifestRequest = request(
      `${this.config.urls.api}/Destiny2/Manifest/`
    );
    return manifestRequest;
  }
};
