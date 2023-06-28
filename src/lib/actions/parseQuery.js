import { db } from "$lib/stores.js";
import { getTracking, isTracking } from "./parseTracking.js";
import { isUrl } from "./parseUrl.js";

function find(str) {
  str = str.toLowerCase();
  return db.find(
    (x) => x.name.toLowerCase() === str || x.alias.toLowerCase() === str
  );
}
// console.log(find('google'));

let keys = db.map((d) => [d.name, d.alias]).flat();
if (keys.length !== new Set(keys).size) {
  console.log(
    "DUPLICATE VALUES DETECTED",
    keys.filter((e, i, a) => a.indexOf(e) !== i)
  );
}
keys = keys.map((x) => x.toLowerCase());

export default function parse(string) {
  const stringLower = string.toLowerCase();

  // BEGIN PARSER

  if (!string) return (location.href = "/");

  // handle @ for Twitter (@SwiftOnSecurity)
  if (stringLower.startsWith("@") || stringLower === "twitter") {
    return `https://twitter.com/${string}`;
  }

  // handle ~ for Tildes (~tech)
  if (string.startsWith("~") || stringLower === "tildes") {
    return `https://tildes.net/${string}`;
  }

  // handle $ for stocks ($aapl)
  if (string.startsWith("$")) {
    return `https://google.com/finance?q=${string}`;
  }

  if (stringLower.includes("wiki")) {
    return (
      "https://wikipedia.org/wiki/" +
      string.replace("wiki", "").replace("wikipedia", "").trim()
    );
  }

  // handle r/ for subreddits
  if (stringLower.startsWith("r/")) {
    // handled aliased subreddits
    const subredditAlias = stringLower.match(/r\/\w+/i)[0];
    if (keys.includes(subredditAlias)) {
      // aliased subreddit search
      // r/mm:vega
      if (stringLower.includes(":")) {
        const query = string.split(":")[1].trim();
        return find(subredditAlias).search_url.replace("{}", query);
      }

      // aliased subreddit with path
      // Ex r/mm || r/mm/new
      if (stringLower.includes("/")) {
        const path = string.split("/").slice(2).join();
        return `${find(subredditAlias).url}/${path}`;
      }
    }

    // subreddit search
    // Ex: r/mechmarket:vega
    if (string.includes(":")) {
      const subreddit = string.split(":")[0];
      const query = string.split(":")[1].trim();

      return "https://www.reddit.com/[]/search/?q={}&restrict_sr=1"
        .replace("[]", subreddit)
        .replace("{}", query);
    }

    //Ex: r/all
    return `https://reddit.com/${string}`;
  }

  // handle match to aliased site
  // Ex: gb => https://www.giantbomb.com/
  if (keys.includes(stringLower)) return find(stringLower).url;

  // handle match to alias with search
  // Ex: Search YouTube => 'y:query'
  if (string.includes(":") && keys.includes(stringLower.split(":")[0])) {
    const alias = stringLower.split(":")[0];
    const query = string.split(":")[1].trim();

    return find(alias).search_url.replace("{}", query);
  }

  // handle paths with a matched alias
  // Ex: gb/api => https://www.giantbomb.com/api
  if (string.includes("/") && keys.includes(stringLower.split("/")[0])) {
    const alias = stringLower.split("/")[0];
    const path = string.split("/").slice(1).join("/");
    let site = find(alias).url;

    return site + "/" + path;
  }

  // handle tracking numbers
  if (isTracking(string)) return getTracking(string);

  //  handle localhost/ip/url with optional specified port
  //  Ex: apple.com
  //  Ex: 127.0.1.1/index.html
  //  Ex: localhost:5000
  //  Ex: local:1337 || dev:1337 => localhost: 1337
  if (isUrl(string)) return string;

  // send query to search engine
  // const duckUrl = "https://duckduckgo.com/?q=";
  // const googleUrl = 'https://google.com/search?q=';
  // return googleUrl + string;
  return find("google").url + string;
}
