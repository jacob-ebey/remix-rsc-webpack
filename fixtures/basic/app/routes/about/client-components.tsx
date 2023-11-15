"use client";

import { Form, useNavigation } from "@remix-run/react";

export function HelloForm({
  errors,
  name,
}: {
  errors?: { name?: string };
  name?: string;
}) {
  const { name: nameError } = errors || {};

  const navigation = useNavigation();

  return (
    <Form method="post">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" />
      {name && <p>Hello, {name}!</p>}
      {nameError && <p>{nameError}</p>}
      <button type="submit">
        {navigation.state === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </Form>
  );
}
