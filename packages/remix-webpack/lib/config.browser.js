import * as path from "node:path";

import { EsbuildPlugin } from "esbuild-loader";
import ReactFlightWebpackPlugin from "react-server-dom-webpack/plugin";
import webpack from "webpack";

import { ClientManifestPlugin } from "./manifest.js";

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 * @param {string} mode
 * @returns {webpack.Configuration}
 */
export function createBrowserConfig(remixConfig, mode) {
  const routeSet = new Set();
  const routes = Object.fromEntries(
    Object.entries(remixConfig.routes).map(([key, route]) => {
      const fullPath = path.resolve(remixConfig.appDirectory, route.file);
      routeSet.add(fullPath);
      return [key, fullPath];
    })
  );

  return {
    name: "browser",
    mode: mode === "development" ? "development" : "production",
    devtool: mode === "development" ? "inline-cheap-source-map" : undefined,
    entry: {
      "entry.client": remixConfig.entryClientFilePath,
      ...routes,
    },
    externalsType: "module",
    resolve: {
      mainFields: ["browser", "module", "main"],
      conditionNames: ["browser", "import", "default", "require"],
      symlinks: true,
      extensionAlias: {
        ".js": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    experiments: {
      outputModule: true,
    },
    output: {
      path: remixConfig.assetsBuildDirectory,
      publicPath: remixConfig.publicPath,
      module: true,
      library: { type: "module" },
      chunkFormat: "module",
      chunkLoading: "import",
      assetModuleFilename: "_assets/[name]-[contenthash][ext]",
      cssChunkFilename: "_assets/[name]-[contenthash][ext]",
      filename: "[name]-[contenthash].js",
      chunkFilename: "[name]-[contenthash].js",
    },
    module: {
      rules: [
        {
          include: (input) => routeSet.has(input),
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [
                  ["eliminator", { namedExports: ["action", "loader"] }],
                ],
              },
            },
            {
              loader: "esbuild-loader",
              options: {
                target: "es2019",
                jsx: "automatic",
              },
            },
          ],
        },
        {
          test: /\.[jt]sx?$/,
          exclude: (input) => routeSet.has(input),
          use: [
            {
              loader: "esbuild-loader",
              options: {
                target: "es2019",
                jsx: "automatic",
              },
            },
          ],
        },
      ],
    },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",

      // treeshake unused code in development
      // needed so that browser build does not pull in server code
      usedExports: true,
      innerGraph: true,
      splitChunks: {
        chunks: "all",
      },
      minimize: mode === "production",
      minimizer: [new EsbuildPlugin({ target: "es2019" })],
    },
    plugins: [
      new ReactFlightWebpackPlugin({
        isServer: false,
        clientReferences: {
          directory: remixConfig.appDirectory,
          recursive: true,
          include: /\.(js|ts|jsx|tsx)$/,
        },
        clientManifestFilename: path.relative(
          remixConfig.assetsBuildDirectory,
          path.resolve(remixConfig.cacheDirectory, "client-manifest.json")
        ),
        ssrManifestFilename: path.relative(
          remixConfig.assetsBuildDirectory,
          path.resolve(remixConfig.cacheDirectory, "ssr-manifest.json")
        ),
      }),
      new ClientManifestPlugin(remixConfig),
    ],
  };
}
