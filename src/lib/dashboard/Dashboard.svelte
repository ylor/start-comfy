<script>
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	import social from '$lib/dashboard/db/social.json';
	import media from '$lib/dashboard/db/media.json';
	import twitch from '$lib/dashboard/db/twitch.json';
	import { searching } from '$lib/stores';

	import fetchWeather from '$lib/actions/fetchWeather';
	import Tree from '$lib/dashboard/Tree.svelte';

	export let data;

	let now = new Date();
	let time = now.toLocaleTimeString([], { timeStyle: 'short', timeZone: data.tz });
	let date = now.toLocaleDateString([], {
		month: 'short',
		day: 'numeric',
		timeZone: data.tz
	});

	let weather = data.weather;
	let temperature = weather.current_weather.temperature;

	function handleKeydown(e) {
		if (e.altKey || e.ctrlKey || e.metaKey) {
			if (e.key !== 'v') return; // allow pasting
		}

		switch (e.key) {
			case 'Escape':
				break;
			default:
				$searching = true;
		}
	}

	onMount(() => {
		const timeInterval = setInterval(() => {
			now = new Date();
		}, 1000); // 1 sec
		const weatherInterval = setInterval(() => {
			fetchWeather(data.lat, data.long).then((response) => (weather = response));
		}, 900000); // 15 min

		return () => {
			clearInterval(timeInterval);
			clearInterval(weatherInterval);
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="mt-8 flex h-full select-none flex-col items-center" in:blur>
	<aside class="text-center">
		<time class="text-4xl font-black">
			{time}
		</time>
		<div class="text-lg lowercase">
			<time>
				{date}
			</time>
			<span>☀️ {Math.round(temperature)} °f</span>
		</div>
	</aside>

	<aside class="mt-12 flex flex-col gap-2">
		<Tree title="media" links={media} />
		<Tree title="social" links={social} />
		<Tree title="twitch" links={twitch} />
	</aside>
</section>
