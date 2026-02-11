import { Response } from "./response.js";
import { readFileSync } from 'fs';
import { Client } from "pg";




export function index(request) {
  const template = readFileSync('templates/home.html', 'utf-8');
  return new Response(
    200,
    "OK",
    template
  )
}

export async function movies(request) {
  const client = new Client(
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  );
  try {
    await client.connect();
    const movies = await client.query("SELECT * FROM movie;"); //do I need to organize these by alphabetical order, or are they already ordered by ID
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

export async function seasons(request) {
  const client = new Client(
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  );
  try {
    await client.connect();
    const seasons = await client.query("SELECT * FROM season;");
    const listItems = seasons.rows.map((season) => {
      return `
      <li>
        ${season.title}
      </li>`
    }).join("\n");

    const template = readFileSync('templates/seasons.html', 'utf-8').toString();
    const final = template.replace("{{SEASONS}}", listItems);
    return new Response(
      200,
      "OK",
      final
    )
  } finally {
    await client.end();
  }
}

export async function tv(request) {
  const client = new Client(
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  );
  try {
    await client.connect();
    const tvShows = await client.query("SELECT * FROM tv_show;");
    const listItems = tvShows.rows.map((tvShow) => {
      return `
      <li>
        ${tvShow.title}
      </li>`
    }).join("\n");

    const template = readFileSync('templates/tv.html', 'utf-8').toString();
    const final = template.replace("{{TV_SHOWS}}", listItems);
    return new Response(
      200,
      "OK",
      final
    )
  } finally {
    await client.end();
  }
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


