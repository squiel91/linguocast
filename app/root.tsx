
import React from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import stylesheet from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  }
]

export const meta: MetaFunction = () => {
  return [
    { title: "Linguocast" },
    {
      property: "og:title",
      content: "Linguocast | The podcast directory for language learners",
    },
    {
      name: "description",
      content: "Your go-to open-source language learning podcast directory. We're community-maintained and committed to offering the most comprehensive and up to date collection of shows.",
    },
    { name: "og:type", content: "website" },
    { name: "og:image", content: "https://linguocast.com/social-logo.png" }
  ]
}

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}