import { Response } from "./response.js";
import { readFileSync } from 'fs';


export function index(request) {
  const template = readFileSync('templates/home.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}

export function movies(request) {
  const template = readFileSync('templates/movies.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}

export function seasons(request) {
  const template = readFileSync('templates/seasons.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}

export function tv(request) {
  const template = readFileSync('templates/tv.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}


