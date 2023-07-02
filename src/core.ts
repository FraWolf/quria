import { generateOptions } from "./adapters/utils";
import { ClientOptions, Options } from "./types/general";

import { App } from "./contents/app";
import { CommunityContent } from "./contents/communitycontent";
import { Content } from "./contents/content";
import { Destiny2 } from "./contents/destiny2";
import { Forum } from "./contents/forum";
import { GroupV2 } from "./contents/groupv2";
import { OAuth } from "./contents/oauth";
import { Tokens } from "./contents/tokens";
import { User } from "./contents/user";
import { Trending } from "./contents/trending";
import { Fireteam } from "./contents/fireteam";
import { Social } from "./contents/social";
import { Core } from "./contents/core";

export class Quria {
  private options: ClientOptions;

  public oauth: OAuth;
  public app: App;
  public user: User;
  public content: Content;
  public forum: Forum;
  public groupv2: GroupV2;
  public tokens: Tokens;
  public destiny2: Destiny2;
  public communitycontent: CommunityContent;
  public trending: Trending;
  public fireteam: Fireteam;
  public social: Social;
  public core: Core;

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
    this.forum = new Forum(this.options.urls.api, this.options.headers);
    this.groupv2 = new GroupV2(this.options.urls.api, this.options.headers);
    this.tokens = new Tokens(this.options.urls.api, this.options.headers);
    this.destiny2 = new Destiny2(this.options.urls.api, this.options.headers);
    this.communitycontent = new CommunityContent(this.options.urls.api, this.options.headers);
    this.trending = new Trending(this.options.urls.api, this.options.headers);
    this.fireteam = new Fireteam(this.options.urls.api, this.options.headers);
    this.social = new Social(this.options.urls.api, this.options.headers);
    this.core = new Core(this.options.urls.api, this.options.headers);
  }
}
