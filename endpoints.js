import { Response } from "./response.js";
import { readFileSync } from 'fs';
// import dotenv from "dotenv";
// dotenv.config();



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

export function films(request) {
  return new Response(
    301,
    "Redirect",
    "",
    "text/html",
    "/movies"
  )
}


