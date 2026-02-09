import { Response } from "./response.js";
import { readFileSync } from 'fs';
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();



export function index(request) {
  const template = readFileSync('templates/home.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}

export async function movies(request) {
  const client = new Client({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: 'asdf',
    database: process.env.DB_NAME
  })
  try {
    await client.connect();
    const movies = await client.query("SELECT * FROM movie");
    const listItems = movies.rows.map((movie) => {
      return `
      <li>
        ${movie.title}
      </li>`
    }).join("\n");

    const template = readFileSync('templates/movies.html', 'utf-8').toString();
    const final = template.replace("{{MOVIES}}", listItems);
    return new Response(
      200,
      "OK",
      final
    )
  } finally {
    await client.end();
  }

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


