const OAuth = require("./oauth");
const User = require("./user");
const Destiny2 = require("./bungie");

module.exports = class QuriaWrapper {
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

    // Loads API endpoints paths
    this.oauth = new OAuth(this);
    // this.app;
    this.user = new User(this);
    // this.content;
    // this.forum;
    // this.groupv2;
    // this.tokens;
    this.destiny2 = new Destiny2(this);
  }
};
