import { dev } from "$app/environment";
import fauxcast from "$lib/dashboard/db/weather.json";

export default async function (lat, long) {
  if (dev) {
    return fauxcast;
  } else {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit&timezone=auto`
    );
    const data = await response.json();
    return data;
  }
}
