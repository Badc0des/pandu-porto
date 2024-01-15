import { init, addMessages, locale } from "svelte-i18n";
import { derived } from "svelte/store";
import { base } from "$app/paths";

import en from "../locales/en.json";
import id from "../locales/id.json";

addMessages("en", en);
addMessages("id", id);

//console.log(es);
//console.log(en);

const defaultLocale = "en";

init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale,
});

/**
 * Base path with current locale included
 * Ex:
 * `"/id" | "/base/fr"`
 */
export const baseLocale = derived(locale, ($locale) => {
  let endRoute = `${base}/${$locale}`;
  if ($locale == "en") endRoute = `${base}`;

  return endRoute.replace(/([^:]\/)\/+/g, "$1");
});
