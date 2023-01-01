<script>
	export let title = 'Lipsum';
</script>

<div class="flex grow basis-0 flex-col items-center rounded-lg p-4">
	<div class="">
		<h1 class="select-none font-black">~/{title}</h1>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<ul>
			<slot>
				<li>
					<a href="">lorem</a>
				</li>
				<li>
					<a href="">ipsum</a>
				</li>
				<li>
					<a href="">dolor</a>
				</li>
				<li>
					<a href="">sit</a>
				</li>
				<li>
					<a href="">amet</a>
				</li>
			</slot>
		</ul>
	</div>
</div>

<style lang="postcss">
	ul {
		list-style: none;
		padding-left: 1.5rem;
	}

	ul :global(a) {
		@apply font-medium hover:underline;
	}

	ul :global(li) {
		--branch: 1px solid rgb(163, 163, 163);
		max-width: 22ch;
		position: relative;
		word-wrap: normal;
	}

	ul :global(li::before) {
		border-top: var(--branch);
		top: 0.75rem;
		width: 0.75rem;
	}

	ul :global(li::after) {
		border-left: var(--branch);
		height: 100%;
		top: 0.25rem;
	}

	ul :global(li::before),
	ul :global(li::after) {
		content: '';
		left: -1rem;
		position: absolute;
	}

	ul :global(li:last-child::after) {
		height: 0.5rem;
	}
</style>
