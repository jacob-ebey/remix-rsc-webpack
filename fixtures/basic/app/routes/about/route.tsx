import { type ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

import { HelloForm } from "./client-components.js";

export default function About() {
  const actionData = (useActionData() || {}) as Awaited<
    ReturnType<typeof action>
  >;

  return (
    <main>
      <h1>About</h1>
      <p>This is the about route.</p>
      {actionData.helloForm || <HelloForm />}
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
