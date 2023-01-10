<script>
	import { blur, fade, fly, scale, slide } from 'svelte/transition';

	import { searching } from '$lib/stores.js';

	import fetchFavicon from '$lib/actions/fetchFavicon.js';
	import fetchSuggestions from '$lib/actions/fetchSuggestions.js';
	import { focusable_children, trap } from '$lib/actions/focus.js';
	import parseQuery from '$lib/actions/parseQuery.js';
	import { normalizeUrl } from '$lib/actions/parseUrl.js';

	let form;
	let input;
	let search = '';
	let suggestions = [];

	function handleKeydown(e) {
		const { key } = e;
		const group = focusable_children(form);
		const selectors = 'a, input';

		switch (key) {
			case 'Escape':
				search === '' ? ($searching = false) : (search = '');
				break;
			case 'ArrowDown':
				group.next(selectors);
				break;
			case 'ArrowUp':
				group.prev(selectors);
				break;
			default:
				if (input && document.activeElement !== input) input.focus();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<form
	autocapitalize="none"
	autocomplete="off"
	autocorrect="off"
	class="relative mx-4 flex h-full flex-col"
	spellcheck="false"
	bind:this={form}
	on:submit|preventDefault={(location.href = normalizeUrl(parseQuery(search)))}
	use:trap
	in:scale
>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		autofocus
		class="my-2 flex items-center gap-x-4 rounded-xl border border-neutral-800/75 bg-black/50 p-2 text-2xl text-neutral-100 shadow-lg outline-none backdrop-blur-xl placeholder:text-neutral-500 focus:border-neutral-700/50 focus:bg-neutral-900/50"
		placeholder="search"
		bind:this={input}
		bind:value={search}
		on:input={fetchSuggestions(search).then((data) => (suggestions = data))}
	/>
	<ul class="select-none overflow-y-auto md:overflow-hidden">
		{#each suggestions as i}
			<a
				href={normalizeUrl(parseQuery(i))}
				class="my-2 flex items-center gap-x-4 rounded-lg border border-neutral-800/75 bg-black/50 p-2 text-lg shadow-lg outline-none backdrop-blur-xl hover:bg-neutral-900/50 focus:bg-neutral-900/50"
				on:mousemove={(event) => event.target.focus()}
				on:focus={() => (search = search.includes(':') ? search.split(':')[0] + ':' + i : i)}
				in:fly|local
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					class="ml-2 h-8 w-8"
					src={fetchFavicon(parseQuery(search.includes(':') ? search.split(':')[0] : i))}
				/>
				<li class="break-all text-neutral-100">
					{@html i.replace(
						search.substring(search.indexOf(':') + 1).match(/.*\S/),
						`<span class="text-neutral-300">${search
							.substring(search.indexOf(':') + 1)
							.trim()}</span>`
					)}
				</li>
				<span class="ml-auto mr-2 font-thin text-neutral-600">❯</span>
			</a>
		{/each}
	</ul>
</form>
