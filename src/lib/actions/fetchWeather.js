import { dev } from '$app/environment';
import mock from './weather_mock.json';

export default async function (lat, long) {
	if (dev) {
		return mock;
	} else {
		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit&timezone=auto`
		);
		const data = await response.json();
		return data;
	}
}
