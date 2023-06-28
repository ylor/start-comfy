<script>
	export let title = 'favorites';
	export let links = [{ name: 'example', url: 'https://example.com' }];

	let button;
</script>

<button
	class="el1 group max-h-14 overflow-hidden rounded-xl border duration-300 focus:max-h-64 md:bg-[#161618]"
	bind:this={button}
	on:click={button.focus()}
>
	<span
		class="flex h-14 items-center truncate px-4 text-lg font-semibold duration-300 group-hover:pl-[15%] group-focus:pl-[25%]"
	>
		~/{title}
	</span>

	<div class="break-all pl-6 pb-4 pr-4 text-left">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</button>

<style lang="postcss">
	a {
		@apply font-medium hover:underline;
	}

	ul {
		list-style: none;
		padding-left: 1.5rem;
	}

	ul li {
		--branch: 1px solid rgb(163, 163, 163);
		max-width: 22ch;
		position: relative;
		word-wrap: normal;
	}

	ul li::before {
		border-top: var(--branch);
		top: 0.75rem;
		width: 0.75rem;
	}

	ul li::after {
		border-left: var(--branch);
		height: 100%;
		top: 0.25rem;
	}

	ul li::before,
	ul li::after {
		content: '';
		left: -1rem;
		position: absolute;
	}

	ul li:last-child::after {
		height: 0.5rem;
	}
</style>
