import * as fetchImport from "isomorphic-unfetch";
const fetch = (fetchImport.default ||
  fetchImport) as typeof fetchImport.default;

export async function request(
  url: string,
  json = false,
  method = "GET",
  headers = {},
  body?: RequestInit["body"]
) {
  if (!url) throw Error;
  else {
    let req;
    try {
      let options: RequestInit = { method, headers };
      if (method === "POST") options.body = body;

      let req1 = await fetch(url, options);
      if (!json) req = await req1.text();
      else if (json) req = await req1.json();
    } catch (e: any) {
      console.log(`[REQUEST] Error on request: ${url}`);
      e.error = true;
      return e;
    }
    return req;
  }
}
