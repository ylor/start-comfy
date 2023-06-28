export function isUrl(string) {
  const ipPattern = new RegExp(
    /^(.*?:\/\/)?((dev|local|localhost)|((2(?!5?[6-9])|1|(?!0\d))\d\d?\.?\b){4})(:\d+)?(\/.*)?$/g
  );
  const urlPattern = new RegExp(
    /^(https?:\/\/)?(\w+)(\.[a-zA-Z]{2,})+(:\d+)?(\/.+)?(\/)?$/i
  );

  if (ipPattern.test(string) || urlPattern.test(string)) {
    return true;
  } else {
    return false;
  }
}

export function normalizeUrl(string) {
  if (string === "/") return "/";

  string = string.trim();
  string = string.includes("://") ? string : `http://${string}`;

  const urlObject = new URL(string);

  if (urlObject.hostname) {
    // Strip `www.`
    // if (urlObject.hostname.startsWith("www.")) {
    // 	urlObject.hostname = urlObject.hostname.replace(/^www\./, "");
    // }

    // Redirect "dev" and "local" to "localhost"
    if (["dev", "local"].includes(urlObject.hostname)) {
      urlObject.hostname = urlObject.hostname.replace(
        /dev|local/gi,
        "localhost"
      );
    }
  }

  if (urlObject.pathname) {
    urlObject.pathname = decodeURI(urlObject.pathname); // Decode URI octets
    urlObject.pathname = urlObject.pathname.replace(/\/$/, ""); // Remove trailing slash
  }

  // Take advantage of node `url` normalizations
  string = urlObject.toString();

  // Remove trailing slash if found
  // if (str.endsWith("/")) {
  // 	str = str.replace(/\/+$/, "");
  // }

  return string;
}
