
  import { PassThrough } from "node:stream";
  
  import RSDC from "react-server-dom-webpack/client.node";
  import { writeReadableStreamToWritable } from "@remix-run/node";

  import * as server from "__remix_virtual__server__";
  import * as entryServer from "/Users/jacob/git/remix-rsc-webpack/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx";

  global.decodeXComponent = async (stream) => {
    const writable = new PassThrough();
    writeReadableStreamToWritable(stream, writable);
    return await RSDC.createFromNodeStream(
      writable,
      {},
      { onError: console.error }
    );
  };

  import * as route0 from "../app/root.tsx";
import * as route1 from "../app/routes/_index/route.tsx";
import * as route2 from "../app/routes/about/route.tsx";
  export const entry = { module: entryServer };
  export const routes = {
    "root": {
      id: "root",
      parentId: undefined,
      path: "",
      index: undefined,
      caseSensitive: undefined,
      module: {
        default: route0.default,
        action: undefined,
        loader: undefined,
        // TODO: Add links, meta, and handle, Error
        links: undefined,
        meta: undefined,
        handle: undefined,
        headers: undefined,
        ErrorBoundary: undefined,
      }
    },
  "routes/_index": {
      id: "routes/_index",
      parentId: "root",
      path: undefined,
      index: true,
      caseSensitive: undefined,
      module: {
        default: route1.default,
        action: undefined,
        loader: server.routes["routes/_index"].loader,
        // TODO: Add links, meta, and handle, Error
        links: undefined,
        meta: undefined,
        handle: undefined,
        headers: undefined,
        ErrorBoundary: undefined,
      }
    },
  "routes/about": {
      id: "routes/about",
      parentId: "root",
      path: "about",
      index: undefined,
      caseSensitive: undefined,
      module: {
        default: route2.default,
        action: undefined,
        loader: undefined,
        // TODO: Add links, meta, and handle, Error
        links: undefined,
        meta: undefined,
        handle: undefined,
        headers: undefined,
        ErrorBoundary: undefined,
      }
    }
  };
  export const assets = {"version":"5cc5e9541c4235b34e75","url":"/build/manifest-5CC5E9541C4235B34E75.js","entry":{"imports":["/build/runtime-7ab19b6fdae82572941f.js","/build/203-cfcf655e85f3f78d3cae.js","/build/325-e95555664c64fc6d7a17.js","/build/entry.client-27e626cf320ed9229eb9.js","/build/root-5f1677b3f32e2d52d0fa.js"],"module":"/build/entry.client-27e626cf320ed9229eb9.js"},"routes":{"root":{"id":"root","path":"","module":"/build/root-5f1677b3f32e2d52d0fa.js","imports":["/build/runtime-7ab19b6fdae82572941f.js","/build/203-cfcf655e85f3f78d3cae.js"],"hasAction":false,"hasLoader":false,"hasCatchBoundary":false,"hasErrorBoundary":false,"hasMeta":false,"hasLinks":false,"hasHandle":false,"hasHeaders":false,"hasDefault":true},"routes/_index":{"id":"routes/_index","parentId":"root","index":true,"module":"/build/routes/_index-41900c91e959a5cc7ee5.js","imports":["/build/runtime-7ab19b6fdae82572941f.js","/build/203-cfcf655e85f3f78d3cae.js"],"hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false,"hasMeta":false,"hasLinks":false,"hasHandle":false,"hasHeaders":false,"hasDefault":true},"routes/about":{"id":"routes/about","parentId":"root","path":"about","module":"/build/routes/about-08ea2037caf7242e3c82.js","imports":["/build/runtime-7ab19b6fdae82572941f.js"],"hasAction":false,"hasLoader":false,"hasCatchBoundary":false,"hasErrorBoundary":false,"hasMeta":false,"hasLinks":false,"hasHandle":false,"hasHeaders":false,"hasDefault":true}}};
  export const future = {"v3_fetcherPersist":false};
  export const publicPath = "/build/";
  export const assetsBuildDirectory = "public/build"
