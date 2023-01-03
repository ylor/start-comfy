import fetchJsonp from 'fetch-jsonp';

const google = 'https://google.com/complete/search?client=firefox&q=';
// const duck = "https://duckduckgo.com/ac/?q=" + query + "&type=list", { jsonpCallbackFunction: "autocompleteCallback" }

export default async function fetchSuggestions(string) {
	const query = string.includes(':') ? string.split(':')[1] : string;
	const response = await fetchJsonp(google + query);
	const data = await response.json();
	return data[1].slice(0, 8) || [];
}
