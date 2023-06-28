import fetchJsonp from "fetch-jsonp";

import { isUrl } from "$lib/actions/parseUrl.js";
import { isTracking } from "$lib/actions/parseTracking.js";

const google = "https://google.com/complete/search?client=firefox&q=";
// const duck = "https://duckduckgo.com/ac/?q=" + query + "&type=list", { jsonpCallbackFunction: "autocompleteCallback" }

export default async function fetchSuggestions(string) {
  const query = string.includes(":") ? string.split(":")[1] : string;

  if (isUrl(query) || isTracking(query)) return [query];

  const response = await fetchJsonp(google + query);
  const data = await response.json();
  return data[1].slice(0, 8) || [];
}
