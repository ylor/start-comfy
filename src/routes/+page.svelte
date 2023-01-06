<script>
	import { searching } from '$lib/stores';

	import Dashboard from './Dashboard.svelte';
	import Search from './Search.svelte';

	export let data;
	console.log(data);
</script>

<div
	class="fixed inset-0 -z-50 h-full w-full bg-cover bg-center brightness-75 md:hidden"
	style="background-image: url({data.gif})"
/>

<main class="flex h-full flex-col justify-center p-2 md:h-screen">
	<div
		class="flex h-screen w-full overflow-hidden rounded-2xl border border-neutral-600/25 bg-black/40 drop-shadow-xl backdrop-blur backdrop-saturate-150 md:mx-auto md:max-h-[600px] md:max-w-screen-lg md:bg-neutral-900/50"
	>
		<img class="hidden aspect-square object-cover md:block md:w-2/5" src={data.gif} alt="" />
		{#if $searching}
			<Search />
		{:else}
			<Dashboard {data} />
		{/if}
	</div>
</main>
