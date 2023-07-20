import fetch from "isomorphic-unfetch";

export async function httpRequest(
  url: string,
  json = false,
  method = "GET",
  headers: RequestInit["headers"],
  body?: RequestInit["body"]
) {
  let options: RequestInit = { method, headers };
  if (method === "POST") options.body = body;

  let bungieRequest = await fetch(url, options);

  return json ? await bungieRequest.json() : await bungieRequest.text();
}
