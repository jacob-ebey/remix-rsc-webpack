import { PassThrough } from "node:stream";

import RSDS from "react-server-dom-webpack/server.node";
import { createReadableStreamFromReadable } from "@remix-run/node";

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

export function wrapLoader(loader) {
  return async (...args) => {
    const result = await loader(...args);
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
