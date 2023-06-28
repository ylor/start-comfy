import { normalizeUrl } from "./parseUrl";

export default function fetchFavicon(uri) {
  const url = new URL(normalizeUrl(uri));
  const domain = url.hostname;
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  // const favicon = 'https://icon.horse/icon/' + domain;

  return favicon;
}
