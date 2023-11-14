# Quick Overview

## `packages/remix-webpack`

A CLI to build a remix application.

Usual remix build:

- ssr bundle containing all routes and manifest meta on a object that you pass to remix.createRequestHandler
- browser bundle split by routes

This project:

- server bundle containing all the loaders and actions for the routes
  - built with condition `react-server`
- ssr bundle containing all routes and manifest meta on a object that you pass to remix.createRequestHandler
  - omits loader and action from the routes in this build, instead, delegates calls to the server bundle
  - should contain metadata for loading client references from the server bundle
- browser bundle split by routes
  - should contain metadata for loading client references from the server bundle

Files to note:

- `build.js` (the orchestration of the three bundles above)
- `config.browser.js`, `config.server.js`, `config.ssr.js` (the webpack configs for each bundle)

Server build notes:

- generates a `.cache/server-entry-module.mjs` that is used as the entrypoint for the webpack config
- the virutal module `__remix_virtual__adapter__` is used to hack the crap out of remix to allow returning RSC from a loader / action and is used int he `.cache/server-entry-module.mjs` entry

SSR build notes:

- generates a `.cache/ssr-module.mjs` that is used as the entrypoint for the webpack config
- the virutal module `__remix_virtual__server__` references the output of the server build and is used to re-assemble loader / action functions onto the relevant routes

Browser build notes:

- nothing weird here really, it uses the routes as entrypoints and spits out a manifest file to know what assets to load for each route. This is just remix as remix today
- `app/entry.client.tsx` hacks the crap out of `window.fetch` to allow RSC responses to flow through react-router's internal logic without having to patch package it right now, this is a temporary hack and I have a PR / proposal to react-router
- `app/entry.client.tsx` also decodes the RSC payload strings on the window into the shape remix expects for hydration
