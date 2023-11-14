import "@remix-run/dev";
import "@remix-run/server-runtime/dist/routes.js";

declare module "@remix-run/server-runtime/dist/routes.js" {
  interface AssetsManifest {
    hasMeta: boolean;
    hasLinks: boolean;
    hasHandle: boolean;
    hasHeaders: boolean;
    hasDefault: boolean;
  }
}
