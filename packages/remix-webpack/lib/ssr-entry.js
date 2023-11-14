import * as path from "node:path";

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} config
 * @param {import("@remix-run/dev").AssetsManifest} manifest
 * @returns
 */
export function createSSRBuildEntry(config, manifest) {
  const routeImports = Object.values(config.routes).map((route, index) => {
    return `import * as route${index} from "${path
      .relative(
        path.resolve("./.cache"),
        path.resolve(config.appDirectory, route.file)
      )
      .replace(/\\/g, "/")}";`;
  });
  const routes = Object.entries(config.routes).map(
    ([routeId, route], index) => {
      return `${JSON.stringify(routeId)}: {
      id: ${JSON.stringify(route.id)},
      parentId: ${JSON.stringify(route.parentId)},
      path: ${JSON.stringify(route.path)},
      index: ${JSON.stringify(route.index)},
      caseSensitive: ${JSON.stringify(route.caseSensitive)},
      module: {
        default: ${
          manifest.routes[routeId].hasDefault
            ? `route${index}.default`
            : "undefined"
        },
        action: ${
          manifest.routes[routeId].hasAction
            ? `server.routes[${JSON.stringify(routeId)}].action`
            : "undefined"
        },
        loader: ${
          manifest.routes[routeId].hasLoader
            ? `server.routes[${JSON.stringify(routeId)}].loader`
            : "undefined"
        },
        // TODO: Add links, meta, and handle, Error
        links: ${
          manifest.routes[routeId].hasLinks
            ? `route${index}.links`
            : "undefined"
        },
        meta: ${
          manifest.routes[routeId].hasMeta ? `route${index}.meta` : "undefined"
        },
        handle: ${
          manifest.routes[routeId].hasHandle
            ? `route${index}.handle`
            : "undefined"
        },
        headers: ${
          manifest.routes[routeId].hasHeaders
            ? `route${index}.headers`
            : "undefined"
        },
        ErrorBoundary: ${
          manifest.routes[routeId].hasErrorBoundary
            ? `route${index}.ErrorBoundary`
            : "undefined"
        },
      }
    }`;
    }
  );

  return `
  import { PassThrough } from "node:stream";
  
  import RSDC from "react-server-dom-webpack/client.node";
  import { writeReadableStreamToWritable } from "@remix-run/node";

  import * as server from "__remix_virtual__server__";
  import * as entryServer from "${config.entryServerFilePath.replace(
    /\\/g,
    "/"
  )}";

  global.decodeXComponent = async (stream) => {
    const writable = new PassThrough();
    writeReadableStreamToWritable(stream, writable);
    return await RSDC.createFromNodeStream(
      writable,
      {},
      { onError: console.error }
    );
  };

  ${routeImports.join("\n")}
  export const entry = { module: entryServer };
  export const routes = {
    ${routes.join(",\n  ")}
  };
  export const assets = ${JSON.stringify(manifest)};
  export const future = ${JSON.stringify(config.future)};
  export const publicPath = ${JSON.stringify(config.publicPath)};
  export const assetsBuildDirectory = ${JSON.stringify(
    path
      .relative(config.rootDirectory, config.assetsBuildDirectory)
      .replace(/\\/g, "/")
  )}
`;
}
