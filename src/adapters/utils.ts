import { ClientOptions, Options, ITokens, CustomUserAgent } from "../types";
import { Controller } from "./";
import { httpRequest } from "./http-request";

export function formatQueryStrings(
  uri: string,
  queryObject: {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | undefined;
  } | null
): string {
  // Querystring example : { "components": components }

  const allKeys = Object.keys(queryObject || {});
  const allValues = Object.values(queryObject || {});

  let formattedQuerystring = "";

  allValues.forEach((item, index) => {
    if (item !== null && item !== undefined) {
      const startingChar = index === 0 ? "?" : "&";
      const formattedItem = typeof item === "object" ? item.join(",") : item;
      formattedQuerystring += `${startingChar}${allKeys[index]}=${formattedItem}`;
    }
  });

  return `${uri}${formattedQuerystring}`;
}

export function parseAuthenticationHeaders(headers: object, tokens?: ITokens) {
  let newObject = {};

  if (tokens && tokens.access_token) newObject = { Authorization: `Bearer ${tokens.access_token}` };

  return { ...headers, ...newObject };
}

export function parseUserAgent(userAgent?: CustomUserAgent, appId?: string) {
  let appName: string = "Quria Wrapper";
  let appVersion: string = "2.3.0";
  let contacts: string = "";

  if (userAgent) {
    // If the user specify a string User Agent, pass it
    if (typeof userAgent === "string") {
      return userAgent;
    }

    // Parse user agent from object
    if ("APP_NAME" in userAgent) {
      appName = userAgent.APP_NAME;
      appVersion = userAgent.APP_VERSION.toString();

      if ("CONTACT_WEBSITE" in userAgent) {
        contacts += `${userAgent.CONTACT_WEBSITE}`;

        if ("CONTACT_MAIL" in userAgent) {
          contacts += `;${userAgent.CONTACT_MAIL}`;
        }
      }
    }
  }

  // Build user agent
  let final = `${appName}/${appVersion}`;

  // Add AppId to User Agent
  if (appId) {
    final += ` AppId/${appId}`;
  }

  // Add contacts
  if (contacts) {
    final += ` (+${contacts})`;
  }

  return final;
}

export function generateOptions(changes: Options): ClientOptions {
  const host = changes.HOST || "https://www.bungie.net";
  const parsedUserAgent = parseUserAgent(changes.USER_AGENT, changes.CLIENT_ID);

  Controller.setRequestHandler(changes.FETCHER || httpRequest);

  return {
    host,
    urls: {
      api: `${host}/Platform`,
      authorization: `${host}/en/OAuth/Authorize`,
      token: `${host}/Platform/App/OAuth/Token`,
    },
    app: {
      client_id: changes.CLIENT_ID,
      client_secret: changes.CLIENT_SECRET || undefined,
      redirect_uri: changes.REDIRECT_URI || undefined,
    },
    headers: {
      "X-API-Key": changes.API_KEY,
      "User-Agent": parsedUserAgent,
    },
  };
}

export function checkRunningEnvironment() {
  return typeof process !== "undefined" && process.versions != null && process.versions.node != null ? "node" : "browser";
}
