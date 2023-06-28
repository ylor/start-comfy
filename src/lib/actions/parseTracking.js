const fedexPattern = new RegExp(
  /^([0-9]{12}|100\d{31}|\d{15}|\d{18}|96\d{20}|96\d{32})$/
);
const upsPattern = new RegExp(/^1Z[A-Z0-9]{16}$/i);
const uspsPattern = new RegExp(
  /^([A-Z]{2}\d{9}[A-Z]{2}|(420\d{9}(9[2345])?)?\d{20}|(420\d{5})?(9[12345])?(\d{24}|\d{20})|82\d{8})$/i
);

export function isTracking(string) {
  if (
    fedexPattern.test(string) ||
    upsPattern.test(string) ||
    uspsPattern.test(string)
  ) {
    return true;
  } else {
    return false;
  }
}

export function getTracking(string) {
  if (fedexPattern.test(string)) {
    return `https://www.fedex.com/apps/fedextrack/?tracknumbers=${string}`;
  }

  if (upsPattern.test(string)) {
    return `https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${string}`;
  }

  if (uspsPattern.test(string)) {
    return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${string}`;
  }

  return false;
}
