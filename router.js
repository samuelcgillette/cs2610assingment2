import { Response } from "./response.js";
import { index, movies, seasons, tv, films } from "./endpoints.js";

export async function router(request) {
  if (request.uri === "/" || request.uri === "/home") {
    return await index(request);
  } else if (request.uri === "/movies") {
    return await movies(request);
  } else if (request.uri === "/seasons") {
    return await seasons(request);
  } else if (request.uri === "/tv") {
    return await tv(request);
  }
  else if (request.uri === "/films"){
    return await films(request)
  }
  else {
    return new Response(
      404,
      "NOT FOUND",
      "<div>Page not found</div>"
    )
  }
}
