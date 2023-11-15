"use client";

import { useFetcher, type FormProps } from "@remix-run/react";

export function PendingButton({
  label,
  pendingLabel,
  fetcherKey,
  disabled,
  ...rest
}: {
  fetcherKey: string;
  label: string;
  pendingLabel: string;
} & React.ComponentProps<"button">) {
  const fetcher = useFetcher({ key: fetcherKey });
  return (
    <button {...rest} disabled={disabled || fetcher.state !== "idle"}>
      {fetcher.state !== "idle" ? pendingLabel : label}
    </button>
  );
}

export function FetcherForm({
  fetcherKey,
  ...rest
}: { fetcherKey: string } & FormProps) {
  const { Form } = useFetcher({ key: fetcherKey });
  return <Form {...rest} />;
}
