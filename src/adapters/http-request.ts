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
      requestToSend = {
        Response: {},
        ErrorCode: -1,
        ThrottleSeconds: 0,
        ErrorStatus: "Error",
        Message: "Quria request failed",
        MessageData: {},
      };
    }

    return requestToSend;
  }
}
