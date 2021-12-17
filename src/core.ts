import { ClientOptions, Options } from "./types/general";
import { generateOptions } from "./adapters/utils";
import Destiny from "./contents/destiny2/api";
import OAuth from "./contents/oauth/oauth";

export class QuriaWrapper {
  private options: ClientOptions;
  public oauth: OAuth;
  public destiny2: Destiny;

  constructor(config: Options) {
    this.options = generateOptions(config);

    // this.parameters = require("./helpers/parameters");

    // Loads API endpoints paths
    this.oauth = new OAuth(
      this.options.urls.authorization,
      this.options.urls.token,
      this.options.headers,
      this.options.app.client_id,
      this.options.app.client_secret
    );
    // this.app;
    // this.user = new User(this);
    // this.content;
    // this.forum;
    // this.groupv2;
    // this.tokens;
    this.destiny2 = new Destiny(this.options.urls.api, this.options.headers);
  }
}
