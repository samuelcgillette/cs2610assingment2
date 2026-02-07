import { Response } from "./response.js";
import { index, movies, seasons, tv } from "./endpoints.js";

export function router(request) {
  if (request.uri === "/" || request.uri === "/home") {
    return index(request);
  } else if (request.uri === "/movies") {
    return movies(request);
  } else if (request.uri === "/seasons") {
    return seasons(request);
  } else if (request.uri === "/tv") {
    return tv(request);
  } else {
    return new Response(
      404,
      "NOT FOUND",
      "<div>Page not found</div>"
    )
  }
}
