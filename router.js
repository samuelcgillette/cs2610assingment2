import { Response } from "./response.js";
import { index, movies, seasons, tv, films } from "./endpoints.js";

export function router(request) {
  if (request.uri === "/" || request.uri === "/home") {
    return index(request);
  } else if (request.uri === "/movies") {
    return movies(request);
  } else if (request.uri === "/seasons") {
    return seasons(request);
  } else if (request.uri === "/tv") {
    return tv(request);
  }
  else if (request.uri === "/fimls"){
    return films(request)
  }
  else {
    return new Response(
      404,
      "NOT FOUND",
      "<div>Page not found</div>"
    )
  }
}
