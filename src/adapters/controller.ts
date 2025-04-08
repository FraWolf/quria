export abstract class Controller {
  private static requestHandler: RequestHandler;

  public static async setRequestHandler(fetcher: RequestHandler) {
    this.requestHandler = fetcher;
  }

  public static async request<T>(
    url: string,
    json = false,
    method: "GET" | "POST" = "GET",
    headers: RequestInit["headers"],
    body?: RequestInit["body"]
  ) {
    return this.requestHandler(url, json, method, headers, body) as T;
  }
}

export type RequestHandler<T = unknown> = (
  url: string,
  json?: boolean,
  method?: "GET" | "POST",
  headers?: RequestInit["headers"],
  body?: RequestInit["body"]
) => T | Promise<T>;
