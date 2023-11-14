import * as React from "react";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

import RSDC from "react-server-dom-webpack/client";

const callServer = undefined;

// Override fetch to fenange RSC responses to be able to go through
// @remix-run/router's json decode logic.
const ogFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await ogFetch(...args);
  const contentType = response.headers.get("Content-Type");
  if (!contentType || !/\btext\/x\-component\b/.test(contentType)) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("Content-Type", "application/json");
  const newResponse = new Response("", {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
  newResponse.json = () => {
    return RSDC.createFromReadableStream(response.body, {
      callServer,
    });
  };

  return newResponse;
};

async function decodeInitialRSCStateData(data) {
  if (typeof data !== "object" || !data) {
    return data;
  }

  const rscData = {};
  const promises = [];
  for (const [k, value] of Object.entries(data)) {
    const key = k;
    if (
      typeof value !== "object" ||
      !value ||
      typeof value.___rsc_encoded !== "string"
    ) {
      rscData[key] = value;
      continue;
    }
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(value.___rsc_encoded));
        controller.close();
      },
    });
    promises.push(
      RSDC.createFromReadableStream(stream, {
        callServer,
      }).then((result) => {
        console.log({ result });
        rscData[key] = result;
      })
    );
  }

  await Promise.all(promises);
  return rscData;
}

Promise.all([
  decodeInitialRSCStateData(window.__remixContext.state.loaderData),
  decodeInitialRSCStateData(window.__remixContext.state.actionData),
]).then(([loaderData, actionData]) => {
  window.__remixContext.state.loaderData = loaderData;
  window.__remixContext.state.actionData = actionData;

  console.log(loaderData);

  React.startTransition(() => {
    hydrateRoot(document, <RemixBrowser />);
  });
});
