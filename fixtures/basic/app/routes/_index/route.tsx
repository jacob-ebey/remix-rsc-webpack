import * as React from "react";
import { useLoaderData } from "@remix-run/react";

import { Counter } from "../../components/counter.js";

async function RecursiveAsync({ count = 0, max = 5 }) {
  if (count >= max) {
    return null;
  }
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div>
      <p>Count: {count}</p>
      <React.Suspense fallback={<p>Loading...</p>}>
        <RecursiveAsync count={count + 1} max={max} />
      </React.Suspense>
    </div>
  );
}

export function loader() {
  // RSC Server Context to load data and render static content
  return {
    // header: "Hello, World!",
    // message: "This is the index route!",
    header: <h1>Hello, World!</h1>,
    message: <p>This is the index route rendering RSC Content.</p>,
    counter: <Counter />,
    test: <RecursiveAsync />,
  };
}

export default function IndexRoute() {
  // RSC Client Context to re-assemble the data / static content
  const data = useLoaderData() as ReturnType<Awaited<typeof loader>>;

  return (
    <main>
      {data.header}
      {data.message}
      {data.counter}
      {data.test}
    </main>
  );
}
