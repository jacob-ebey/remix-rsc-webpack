import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import webpack from "webpack";

import { createServerBuildEntry } from "./server-entry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 * @param {import("@remix-run/server-runtime/dist/entry.js").AssetsManifest} serverManifest
 * @param {string} mode
 * @returns {webpack.Configuration}
 */
export function createServerConfig(remixConfig, serverManifest, mode) {
  const serverEntryModule = path.join(
    remixConfig.cacheDirectory,
    "server-entry-module.mjs"
  );
  const serverEntryModuleOutput = path.join(
    remixConfig.cacheDirectory,
    "server-module.mjs"
  );

  fs.mkdirSync(path.dirname(serverEntryModule), { recursive: true });
  const serverEntryCode = createServerBuildEntry(remixConfig, serverManifest);
  fs.writeFileSync(serverEntryModule, serverEntryCode, "utf8");

  const isModule = true;

  /** @type {import('webpack').RuleSetRule} */
  const ESBUILD_LOADER = {
    loader: "esbuild-loader",
    options: {
      target: "es2019",
      jsx: "automatic",
    },
  };

  return {
    name: "server",
    mode: mode === "development" ? "development" : "production",
    devtool: "cheap-source-map",
    target: "node",
    entry: serverEntryModule,
    experiments: isModule ? { outputModule: true } : undefined,
    externalsType: isModule ? "module" : undefined,
    externalsPresets: { node: true },
    resolve: {
      symlinks: true,
      conditionNames: [
        "react-server",
        "webpack",
        "node",
        "import",
        "require",
        "default",
      ],
      alias: {
        __remix_virtual__adapter__$: path.join(__dirname, "adapter.js"),
      },
      extensionAlias: {
        ".js": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    output: {
      environment: {
        module: true,
      },
      filename: path.basename(serverEntryModuleOutput),
      library: { type: isModule ? "module" : "commonjs" },
      chunkFormat: isModule ? "module" : "commonjs",
      chunkLoading: isModule ? "import" : "require",
      module: isModule,
      path: path.dirname(serverEntryModuleOutput),
      publicPath: remixConfig.publicPath,
      assetModuleFilename: "_assets/[name]-[contenthash][ext]",
      cssChunkFilename: "_assets/[name]-[contenthash][ext]",
    },
    optimization: {
      moduleIds: "deterministic",
      minimize: false,
      usedExports: true,
      innerGraph: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: [
            { loader: path.join(__dirname, "rsc-server-loader.js") },
            ESBUILD_LOADER,
          ],
        },
      ],
    },
  };
}
