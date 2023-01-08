<script>
	import { searching } from '$lib/stores';

	import Dashboard from './Dashboard.svelte';
	import Search from './Search.svelte';

	export let data;
	console.log(data);
</script>

<div
	class="fixed inset-0 -z-10 h-full w-full bg-cover bg-center md:hidden"
	style="background-image: url({data.gif})"
/>

<div id="wrapper" class="flex min-h-screen flex-col justify-center p-2">
	<main
		class="flex w-full grow overflow-hidden rounded-xl border border-neutral-700/25 bg-black/50 shadow backdrop-blur-sm backdrop-saturate-150 md:mx-auto md:max-h-[600px] md:max-w-screen-lg md:bg-neutral-900/50"
	>
		<img class="hidden aspect-square object-cover md:block md:w-2/5" src={data.gif} alt="" />
		<section class="relative mt-4 w-full md:w-3/5">
			{#if $searching}
				<Search />
				<button
					class="absolute right-0 bottom-4 left-0 mx-auto w-20 rounded-full border border-neutral-800/75 bg-black py-1 tracking-tight text-neutral-400 outline-none transition-all duration-300 hover:w-24"
					type="button"
					on:click={() => ($searching = false)}
					in:blur
				>
					home
				</button>
			{:else}
				<Dashboard {data} />
				<button
					class="absolute right-0 bottom-4 left-0 mx-auto w-20 rounded-full border border-neutral-800/75 bg-black py-1 tracking-tight text-neutral-400 outline-none transition-all duration-300 hover:w-24"
					type="button"
					on:click={() => ($searching = true)}
					in:blur
				>
					search
				</button>
			{/if}
		</section>
	</main>
</div>
