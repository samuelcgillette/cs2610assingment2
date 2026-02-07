import { Response } from "./response.js";
import { readFileSync } from 'fs';


// next is a middleware... or something with the same signature
export function loggingMiddlewareFactory(next) {
  return function (request) {
    // do something with the request
    console.log(`${request.method} ${request.uri}`)
    // call the next middleware
    const response = next(request);
    // do something with the response
    console.log(`${request.uri} ${response.status} ${response.reason}`)
    // return a response;
    return response;
  }
}

export function JSONParsingMiddlewareFactory(next) {
  return function (request) {
    if (request.headers["Content-Type"] == "application/json") {
      request.parsedBody = JSON.parse(request.body);
    }
    return next(request);
  }
}



export function staticFileHanderFactory(next) {
  return function (request) {
    if (request.uri.includes('.css')) {
      console.log('a static has been requested')
      const cstemp = readFileSync(`static${request.uri}`, 'utf-8');
      return new Response(200, 'OK', cstemp, 'text/css');
    }
    else {
      return next(request);
    }
  }
}






