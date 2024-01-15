import type { EntryGenerator } from "./$types";

export const entries = (() => {
  return [
    {
      language: "id",
    },
    {
      language: "en",
    },
  ];
}) satisfies EntryGenerator;

export const prerender = true;
