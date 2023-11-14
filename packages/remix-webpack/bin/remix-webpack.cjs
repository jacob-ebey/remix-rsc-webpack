#!/usr/bin/env node

let errored = false;
import("../lib/cli.js")
  .then((mod) => mod.cli(process.argv.slice(2)))
  .catch((error) => {
    errored = true;
    console.error(error?.message || error);
    console.error(error?.stack);
  })
  .finally(() => {
    if (errored) process.exit(1);
  });
