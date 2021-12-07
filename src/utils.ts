import { ClientOptions, Options } from "./types/general";

export function formatQueryStrings(
  uri: string,
  queryObject: { [key: string]: string | string[] | number | number[] }
) {
  // Querystring example : { "components": components }
  // console.log(queryObject);

  const allKeys = Object.keys(queryObject);
  const allValues = Object.values(queryObject);

  var formattedQuerystring = "";

  allValues.forEach((item, index) => {
    if (item !== null) {
      const startingChar = index === 0 ? "?" : "&";
      const formattedItem = typeof item === "object" ? item.join(",") : item;
      formattedQuerystring += `${startingChar}${allKeys[index]}=${formattedItem}`;
    }
  });

  const urlToReturn = `${uri}${formattedQuerystring}`;

  return urlToReturn;
}

export function parseAuthenticationHeaders(
  headers: object,
  tokens: { access_token?: string; refresh_token?: string }
) {
  var newObject = {};

  if (tokens && tokens.access_token)
    newObject = { Authorization: `Bearer ${tokens.access_token}` };

  return { ...headers, ...newObject };
}

export function generateOptions(changes: Options): ClientOptions {
  const host = changes.HOST || "https://www.bungie.net";

  return {
    host,
    urls: {
      api: `${host}/Platform`,
      authorization: `${host}/en/OAuth/Authorize`,
      token: `${host}/Platform/App/OAuth/token`,
    },
    app: {
      client_id: changes.CLIENT_ID,
      client_secret: changes.CLIENT_SECRET || undefined,
      redirect_uri: changes.REDIRECT_URI || undefined,
    },
    headers: {
      "X-API-Key": changes.API_KEY,
    },
  };
}
