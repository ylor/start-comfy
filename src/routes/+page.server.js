import { gifs } from "$lib/stores.js";

import fetchWeather from "$lib/actions/fetchWeather.js";
import * as VERCEL from "$lib/vercel/headers.js";

export async function load({ request }) {
  // const city = request.headers.get(VERCEL.HEADER_CITY) ?? 'Kakariko Village';
  // const country = request.headers.get(VERCEL.HEADER_COUNTRY) ?? 'JP';
  // const ip = request.headers.get(VERCEL.HEADER_IP) ?? '127.0.0.1';
  const lat = request.headers.get(VERCEL.HEADER_LATITUDE) ?? "25.7929891";
  const long = request.headers.get(VERCEL.HEADER_LONGITUDE) ?? "-80.1319527";
  const tz = request.headers.get(VERCEL.HEADER_TIMEZONE) ?? "America/New_York";

  return {
    gif: gifs[Math.floor(Math.random() * gifs.length)],
    lat,
    long,
    tz,
    weather: fetchWeather(lat, long),
  };
}
