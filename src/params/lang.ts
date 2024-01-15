import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
  return /^(id|en)$/.test(param);
}) satisfies ParamMatcher;
