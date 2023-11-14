import { readConfig } from "@remix-run/dev/dist/config.js";
import arg from "arg";

import { build } from "./build.js";

/**
 * @param {string[]} argv
 */
export async function cli(argv) {
  const args = arg(
    {
      "--mode": String,
      "--help": Boolean,
      "-m": "--mode",
      "-h": "--help",
    },
    {
      argv,
    }
  );
  const command = args._[0] || "dev";

  if (args["--help"]) {
    printHelp();
    return;
  }

  let mode = args["--mode"];
  const remixConfig = await readConfig(
    process.cwd(),
    // @ts-expect-error
    mode
  );

  switch (command) {
    case "build":
      mode = mode || "production";
      await build(remixConfig, mode);
      return;
    case "dev":
      mode = mode || "development";
      throw new Error("dev not implemented");
    default:
      throw new Error(`Unknown command: ${command}`);
  }
}

function printHelp() {
  console.log(`
  Usage
    $ remix-webpack <command> [options]

  Commands
    build
    dev

  Options
    --mode, -m
    --help, -h
  `);
}
