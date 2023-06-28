export async function GET({ params }) {
  const kagi = "https://kagi.com/api/autosuggest?q=";
  const response = await fetch(kagi + "r/bat");
  const data = await response.json();

  console.log(data[1]);
  return new Response(JSON.stringify(data[1]));
}
