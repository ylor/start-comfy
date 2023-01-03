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

<main class="flex h-screen flex-col justify-center p-4">
	<div
		class="flex h-screen w-full overflow-hidden rounded-2xl border border-neutral-800/25 bg-black/50 shadow-xl backdrop-blur-sm md:mx-auto md:max-h-[600px] md:max-w-screen-lg md:bg-neutral-900/50"
	>
		<img class="hidden aspect-square object-cover md:block md:w-2/5" src={data.gif} alt="" />
		{#if $searching}
			<Search />
		{:else}
			<Dashboard {data} />
		{/if}
	</div>
</main>
