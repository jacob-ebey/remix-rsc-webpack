import { type ActionFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import { HelloForm } from "./server-components.js";

export function loader() {
  return {
    helloForm: <HelloForm />,
  };
}

export default function About() {
  const loaderData = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const actionData = (useFetcher({ key: "helloForm" }).data || {}) as Awaited<
    ReturnType<typeof action>
  >;

  return (
    <main>
      <h1>About</h1>
      <p>This is the about route.</p>
      {actionData.helloForm || loaderData.helloForm}
    </main>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const formData = await request.formData();
  const name = formData.get("name");
  if (typeof name !== "string" || !name) {
    return {
      helloForm: <HelloForm errors={{ name: "Name is required" }} />,
    };
  }

  return {
    helloForm: <HelloForm name={name} />,
  };
}
