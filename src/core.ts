import { generateOptions } from "./adapters/utils";
import { App } from "./contents/app";
import { Content } from "./contents/content";
import { Destiny } from "./contents/destiny2";
import { OAuth } from "./contents/oauth";
import { User } from "./contents/user";
import { ClientOptions, Options } from "./types/general";

export class Quria {
  private options: ClientOptions;

  public oauth: OAuth;
  public app: App;
  public user: User;
  public content: Content;
  public destiny2: Destiny;

  constructor(config: Options) {
    this.options = generateOptions(config);

    // Loads API endpoints paths
    this.oauth = new OAuth(
      this.options.urls.authorization,
      this.options.urls.token,
      this.options.headers,
      this.options.app.client_id,
      this.options.app.client_secret
    );
    this.app = new App(this.options.urls.api, this.options.headers);
    this.user = new User(this.options.urls.api, this.options.headers);
    this.content = new Content(this.options.urls.api, this.options.headers);
    // this.forum;
    // this.groupv2;
    // this.tokens;
    this.destiny2 = new Destiny(this.options.urls.api, this.options.headers);
  }
}
