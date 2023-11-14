import * as path from "node:path";

import webpack from "webpack";

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 * @param {string} mode
 * @returns {webpack.Configuration}
 */
export function createSSRConfig(remixConfig, mode) {
  const serverEntryModule = path.join(
    remixConfig.cacheDirectory,
    "server-module.mjs"
  );
  const ssrEntryModule = path.join(
    remixConfig.cacheDirectory,
    "ssr-module.mjs"
  );
  const routeSet = new Set(
    Object.values(remixConfig.routes).map((route) =>
      path.resolve(remixConfig.appDirectory, route.file)
    )
  );

  const isModule = remixConfig.serverModuleFormat === "esm";

  return {
    name: "ssr",
    mode: "development",
    // mode: mode === "development" ? "development" : "production",
    devtool: "cheap-source-map",
    target: "node",
    entry: ssrEntryModule,
    experiments: isModule ? { outputModule: true } : undefined,
    externalsType: isModule ? "module" : undefined,
    externalsPresets: { node: true },
    resolve: {
      symlinks: true,
      alias: {
        __remix_virtual__server__: serverEntryModule,
      },
      extensionAlias: {
        ".js": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    output: {
      filename: path.basename(remixConfig.serverBuildPath),
      library: { type: isModule ? "module" : "commonjs" },
      chunkFormat: isModule ? "module" : "commonjs",
      chunkLoading: isModule ? "import" : "require",
      module: isModule,
      path: path.dirname(remixConfig.serverBuildPath),
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
  };
}
