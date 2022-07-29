import fetch from "isomorphic-unfetch";

export async function request(
  url: string,
  json = false,
  method = "GET",
  headers: RequestInit["headers"],
  body?: RequestInit["body"]
) {
  if (!url) throw Error;
  else {
    let requestToSend;
    try {
      let options: RequestInit = { method, headers };
      if (method === "POST") options.body = body;

      let bungieRequest = await fetch(url, options);

      requestToSend = json
        ? await bungieRequest.json()
        : await bungieRequest.text();
    } catch (e: any) {
      requestToSend = { error: true, message: e.message };
    }

    return requestToSend;
  }
}
