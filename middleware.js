import { Response } from "./response.js";
import { readFileSync } from 'fs';


// next is a middleware... or something with the same signature
export const loggingMiddlewareFactory = (next) => async (request) => {

  // do something with the request
  console.log(`${request.method} ${request.uri}`)
  // call the next middleware
  const response = await next(request);
  // do something with the response
  console.log(`${request.uri} ${response.status} ${response.reason}`)
  // return a response;
  return response;
}


export function staticFileHanderFactory(next) {
  return async function (request) {
    if (request.uri.endsWith('.css')) {
      const cstemp = readFileSync(`static${request.uri}`, 'utf-8');
      return new Response(200, 'OK', cstemp, 'text/css');
    }
    else if (request.uri.endsWith('.js')) {
      const jstemp = readFileSync(`static${request.uri}`, 'utf-8');
      return new Response(200, 'OK', jstemp, 'application/javascript');
    }
    else {
      return await next(request);
    }
  }
}






