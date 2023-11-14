import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";

import esbuild from "esbuild";
import webpack from "webpack";

import { createSSRBuildEntry } from "./ssr-entry.js";

function createUrl(publicPath, file) {
  return (
    publicPath.split(path.win32.sep).join("/") +
    (file || "").split(path.win32.sep).join("/")
  );
}

/**
 *
 * @param {import("webpack").StatsCompilation} stats
 * @param {string} publicPath
 * @returns {(group: string) => string[]}
 */
function createNamedChunkGroupFactory(stats, publicPath) {
  const chunksById = new Map(stats.chunks?.map((chunk) => [chunk.id, chunk]));
  return (group) => {
    /** @type {Set<string>} */
    const files = new Set();
    stats.namedChunkGroups?.[group].chunks?.forEach((chunkId) => {
      const chunk = chunksById.get(chunkId);
      chunk?.files?.forEach((file) => files.add(createUrl(publicPath, file)));
    });
    return [...files];
  };
}

/**
 * @param {webpack.StatsCompilation} param0
 * @param {string} entrypointId
 */
const getAssets = ({ entrypoints }, entrypointId) => {
  if (entrypoints === undefined) throw Error("todo");
  const { assets } = entrypoints[entrypointId];
  if (assets === undefined) throw Error("todo");
  return assets;
};

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 * @param {import("webpack").Stats} stats
 * @returns {Promise<import("@remix-run/server-runtime/dist/entry.js").AssetsManifest>}
 */
export async function toManifest(remixConfig, stats) {
  const compilationStats = stats.toJson({
    modules: true,
    entrypoints: true,
    assets: true,
    groupAssetsByChunk: true,
    hash: true,
  });
  const getByNamedChunkGroup = createNamedChunkGroupFactory(
    compilationStats,
    remixConfig.publicPath
  );

  const entryImports = getByNamedChunkGroup("entry.client");
  const entryModule = createUrl(
    remixConfig.publicPath,
    getAssets(compilationStats, "entry.client").slice(-1)[0].name
  );
  const rootImports = getByNamedChunkGroup("root");

  // TODO: what are runtime imports? dynamic imports?
  // let runtimeImports = compilationStats.assetsByChunkName["runtime"].map(
  //   (asset) => createUrl(remixConfig.publicPath, asset)
  // );

  const routes = Object.fromEntries(
    Object.entries(remixConfig.routes).map(([routeId, route]) => {
      const assets = getAssets(compilationStats, routeId);
      const routeImports = assets
        .slice(0, -1)
        .map((asset) => createUrl(remixConfig.publicPath, asset.name));
      const routeModule = createUrl(
        remixConfig.publicPath,
        assets.slice(-1)[0].name
      );
      const routePath = path.resolve(remixConfig.appDirectory, route.file);
      const routeExports = getExports(routePath, remixConfig);
      return [
        routeId,
        {
          id: route.id,
          parentId: route.parentId,
          path: route.path,
          index: route.index,
          caseSensitive: route.caseSensitive,
          module: routeModule,
          imports: routeImports,
          hasAction: routeExports.includes("action"),
          hasLoader: routeExports.includes("loader"),
          hasCatchBoundary: routeExports.includes("CatchBoundary"),
          hasErrorBoundary: routeExports.includes("ErrorBoundary"),
          hasMeta: routeExports.includes("meta"),
          hasLinks: routeExports.includes("links"),
          hasHandle: routeExports.includes("handle"),
          hasHeaders: routeExports.includes("headers"),
          hasDefault: routeExports.includes("default"),
        },
      ];
    })
  );

  const version = compilationStats.hash;
  if (version === undefined) throw Error("todo");
  return {
    version,
    url: createUrl(
      remixConfig.publicPath,
      `manifest-${version.toUpperCase()}.js`
    ),
    entry: {
      imports: [
        ...new Set([/* ...runtimeImports, */ ...entryImports, ...rootImports]),
      ],
      module: entryModule,
    },
    routes,
  };
}

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 */
export async function toServerManifest(remixConfig) {
  const routes = Object.fromEntries(
    Object.entries(remixConfig.routes).map(([routeId, route]) => {
      const routePath = path.resolve(remixConfig.appDirectory, route.file);
      const routeExports = getExports(routePath, remixConfig);
      return [
        routeId,
        {
          id: route.id,
          parentId: route.parentId,
          path: route.path,
          index: route.index,
          caseSensitive: route.caseSensitive,
          hasAction: routeExports.includes("action"),
          hasLoader: routeExports.includes("loader"),
          hasCatchBoundary: routeExports.includes("CatchBoundary"),
          hasErrorBoundary: routeExports.includes("ErrorBoundary"),
          hasMeta: routeExports.includes("meta"),
          hasLinks: routeExports.includes("links"),
          hasHandle: routeExports.includes("handle"),
          hasHeaders: routeExports.includes("headers"),
          hasDefault: routeExports.includes("default"),
        },
      ];
    })
  );

  return {
    routes,
  };
}

/**
 *
 * @param {import("@remix-run/dev").ResolvedRemixConfig} config
 * @param {*} manifest
 */
export function writeManifest(config, manifest) {
  fs.mkdirSync(config.cacheDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(config.cacheDirectory, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  // fs.mkdirSync(config.assetsBuildDirectory, { recursive: true });
  // fs.writeFileSync(
  //   path.resolve(config.assetsBuildDirectory, path.basename(manifest.url)),
  //   `window.__remixManifest=${JSON.stringify(manifest)};`
  // );
}

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} config
 * @returns {import("@remix-run/dev").AssetsManifest}
 */
export function getManifest(config) {
  return JSON.parse(
    fs.readFileSync(path.join(config.cacheDirectory, "manifest.json"), "utf8")
  );
}

function getExports(routePath, remixConfig) {
  const { metafile, errors } = esbuild.buildSync({
    sourceRoot: remixConfig.appDirectory,
    entryPoints: [routePath],
    target: "esnext",
    bundle: false,
    metafile: true,
    write: false,
    outdir: os.tmpdir(),
  });
  if ((errors === null || errors === void 0 ? void 0 : errors.length) > 0) {
    throw new Error(
      esbuild.formatMessagesSync(errors, { kind: "error" }).join("\n")
    );
  }
  const outputs = Object.values(metafile.outputs);
  if (outputs.length !== 1) {
    throw Error();
  }
  const output = outputs[0];
  return output.exports;
}

export class ClientManifestPlugin {
  /**
   * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
   */
  constructor(remixConfig) {
    this.remixConfig = remixConfig;
  }
  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.afterCompile.tapPromise(
      "RemixAssetsManifest",
      async (compilation) => {
        const stats = compilation.getStats();
        const manifest = await toManifest(this.remixConfig, stats);
        writeManifest(this.remixConfig, manifest);

        const serverBuildModule = path.join(
          this.remixConfig.cacheDirectory,
          "ssr-module.mjs"
        );
        const serverBuildEntry = createSSRBuildEntry(
          this.remixConfig,
          manifest
        );
        fs.writeFileSync(serverBuildModule, serverBuildEntry, "utf8");

        fs.mkdirSync(this.remixConfig.assetsBuildDirectory, {
          recursive: true,
        });
        fs.writeFileSync(
          path.resolve(
            this.remixConfig.assetsBuildDirectory,
            path.basename(manifest.url)
          ),
          `window.__remixManifest=${JSON.stringify(manifest)};`
        );
      }
    );
  }
}
