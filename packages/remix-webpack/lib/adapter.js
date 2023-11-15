import { PassThrough } from "node:stream";

import RSDS from "react-server-dom-webpack/server.node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { readFileSync } from "node:fs";

export function wrapAction(action) {
  return async (...args) => {
    const result = await action(...args);
    if (result instanceof Response) return result;
    const readable = RSDS.renderToPipeableStream(result, {
      onError: console.error,
    });
    const stream = createReadableStreamFromReadable(
      readable.pipe(new PassThrough())
    );
    return new Response(stream, {
      headers: {
        "Content-Type": "text/x-component",
        "Transfer-Encoding": "chunked",
      },
    });
  };
}

let clientManifest = null;

export function wrapLoader(loader) {
  return async (...args) => {
    const result = await loader(...args);
    if (result instanceof Response) return result;

    if (!clientManifest) {
      try {
        // TODO: assumes we're in appPath and build/ has the file. a bit nasty
        clientManifest = JSON.parse(
          readFileSync("build/client-manifest.json", "utf-8")
        );
      } catch (err) {
        throw new Error("Failed to load client-manifest.json", { cause: err });
      }
    }

    const pipeable = RSDS.renderToPipeableStream(result, clientManifest, {
      onError: console.error,
    });
    const stream = createReadableStreamFromReadable(
      pipeable.pipe(new PassThrough())
    );
    return new Response(stream, {
      headers: {
        "Content-Type": "text/x-component",
        "Transfer-Encoding": "chunked",
      },
    });
  };
}
