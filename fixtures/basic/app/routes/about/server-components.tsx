import { FetcherForm, PendingButton } from "./client-components.js";

export function HelloForm({
  errors,
  name,
}: {
  errors?: { name?: string };
  name?: string;
}) {
  const { name: nameError } = errors || {};

  return (
    <FetcherForm fetcherKey="helloForm" method="post">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" />
      {name && <p>Hello, {name}!</p>}
      {nameError && <p>{nameError}</p>}
      <PendingButton
        fetcherKey="helloForm"
        label="Submit"
        pendingLabel="Submitting..."
        type="submit"
      />
    </FetcherForm>
  );
}
