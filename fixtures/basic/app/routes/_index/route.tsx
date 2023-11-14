import { useLoaderData } from "@remix-run/react";

import { Counter } from "../../components/counter.js";

export function loader() {
  // RSC Server Context to load data and render static content
  return {
    // header: "Hello, World!",
    // message: "This is the index route!",
    header: <h1>Hello, World!</h1>,
    message: <p>This is the index route rendering RSC Content.</p>,
    counter: <Counter />,
    test: Promise.resolve("test"),
  };
}

export default function IndexRoute() {
  // RSC Client Context to re-assemble the data / static content
  const data = useLoaderData() as ReturnType<Awaited<typeof loader>>;
  console.log(data);

  return (
    <main>
      {data.header}
      {data.message}
      {data.counter}
    </main>
  );
}
