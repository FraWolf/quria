import { ClientOptions, Options } from "./types/general";
import { generateOptions } from "./utils";
import Destiny from "./contents/destiny2/api";

export class QuriaWrapper {
  public options: ClientOptions;
  public destiny2: any;

  constructor(config: Options) {
    this.options = generateOptions(config);

    // this.parameters = require("./helpers/parameters");

    // Loads API endpoints paths
    // this.oauth = new OAuth(this);
    // this.app;
    // this.user = new User(this);
    // this.content;
    // this.forum;
    // this.groupv2;
    // this.tokens;
    this.destiny2 = new Destiny(this.options.urls.api, this.options.headers);
  }
}
