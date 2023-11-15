import * as path from "node:path";

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} config
 * @param {import("@remix-run/dev").AssetsManifest} manifest
 * @returns
 */
export function createServerBuildEntry(config, manifest) {
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
      action: ${
        manifest.routes[routeId].hasAction
          ? `adapter.wrapAction(route${index}.action)`
          : "undefined"
      },
      loader: ${
        manifest.routes[routeId].hasLoader
          ? `adapter.wrapLoader(route${index}.loader)`
          : "undefined"
      },
    }`;
    }
  );

  return `
  import * as adapter from "__remix_virtual__adapter__";
  ${routeImports.join("\n")}
  export const routes = {
    ${routes.join(",\n  ")}
  };
`;
}
