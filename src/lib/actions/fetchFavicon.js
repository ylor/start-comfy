export default function fetchFavicon(uri) {
	const url = new URL(uri);
	const domain = url.hostname;
	const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
	return favicon;
}
