<script>
	import { searching } from '$lib/stores';

	import Dashboard from '../lib/dashboard/Dashboard.svelte';
	import Search from '../lib/search/Search.svelte';

	export let data;
	console.log(data);
</script>

<div
	class="crt fixed inset-0 -z-10 h-full w-full bg-cover bg-center md:hidden"
	style="background-image: url({data.gif})"
/>

<div id="wrapper" class="flex min-h-screen flex-col justify-center p-2">
	<main
		class="flex w-full grow overflow-hidden rounded-xl border border-neutral-700/25 bg-black/50 shadow backdrop-blur-sm backdrop-saturate-150 md:mx-auto md:max-h-[600px] md:max-w-screen-lg md:bg-neutral-900/50"
	>
		<picture class="relative shadow md:w-2/5">
			<aside class="crt" />
			<img class="hidden h-full w-full object-cover md:block" src={data.gif} alt="" />
		</picture>

		<section class="relative mt-4 w-full md:w-3/5">
			{#if $searching}
				<Search />
			{:else}
				<Dashboard {data} />
			{/if}
			<button class="btn" on:click={() => ($searching = !$searching)}
				>{$searching ? 'home' : 'search'}</button
			>
		</section>
	</main>
</div>

<style lang="postcss">
	.btn {
		@apply absolute right-0 bottom-4 left-0 mx-auto w-20 rounded-full border border-neutral-800/75 bg-black/50 py-1 tracking-tight text-neutral-500 backdrop-blur-xl duration-300 hover:w-28 hover:text-neutral-300;
	}
</style>
