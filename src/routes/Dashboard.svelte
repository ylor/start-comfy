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
	let weather = data.weather;

	function handleKeydown(e) {
		const { key } = e;
		switch (key) {
			case 'Escape':
				break;
			default:
				if (e.altKey || e.ctrlKey || e.metaKey) {
					if (key !== 'v') return; // allow pasting
				}
				$searching = true;
		}
	}

	onMount(() => {
		const timeInterval = setInterval(() => {
			now = new Date();
		}, 1000);
		const weatherInterval = setInterval(() => {
			fetchWeather(data.lat, data.long).then((response) => (weather = response));
		}, 900000);

		return () => {
			clearInterval(timeInterval);
			clearInterval(weatherInterval);
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="flex h-full flex-col items-center pt-8" in:blur>
	<aside class="pb-8 text-center">
		<time class="text-4xl font-black">
			{now.toLocaleTimeString([], { timeStyle: 'short', timeZone: data.tz })}
		</time>
		<div class="text-lg">
			<time>
				{now
					.toLocaleDateString([], {
						// weekday: 'short',
						month: 'short',
						day: 'numeric',
						timeZone: data.tz
					})
					.toLocaleLowerCase()}
			</time>
			<span>☀️ {Math.round(weather.current_weather.temperature)}°f</span>
		</div>
	</aside>

	<aside class="flex flex-col gap-4">
		<Tree title="media" links={media} />
		<Tree title="social" links={social} />
		<Tree title="twitch" links={twitch} />
		<!-- <Tree title="media">
			<li>
				<a href="https://giantbomb.com">giant_bomb</a>
			</li>
			<li>
				<a href="https://letterboxd.com">letterboxd</a>
			</li>
			<li>
				<a href="https://plex.tv/web">plex</a>
			</li>
			<li>
				<a href="https://twitch.tv">twitch</a>
			</li>
			<li>
				<a href="https://youtube.com/feed/subscriptions">youtube</a>
			</li>
		</Tree>
		<Tree title="social">
			<li>
				<a href="https://discord.com">discord</a>
			</li>
			<li>
				<a href="https://news.ycombinator.com">hacker_news</a>
			</li>
			<li>
				<a href="https://mastodon.social">mastodon</a>
			</li>
			<li>
				<a href="https://resetera.com">resetera</a>
			</li>
			<li>
				<a href="https://tildes.com">tildes</a>
			</li>
		</Tree>
		<Tree title="twitch">
			<li>
				<a href="https://twitch.tv/hasanabi">hasanabi</a>
			</li>
			<li>
				<a href="https://twitch.tv/tarik">tarik</a>
			</li>
			<li>
				<a href="https://twitch.tv/paymoneywubby">wubby</a>
			</li>
		</Tree> -->
	</aside>

	<!-- <button
		class="mt-auto mb-8 w-20 rounded-full border border-neutral-800/75 bg-black py-1 tracking-tight text-neutral-400 outline-none transition-all duration-300 hover:w-24"
		on:click={() => ($searching = true)}
	>
		search
	</button> -->
</section>
