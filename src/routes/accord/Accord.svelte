<script>
	import data from './data.json';
	console.log(data);
</script>

<!-- Component Start -->
<div class="flex w-56 flex-col">
	<button class="group overflow-hidden focus:outline-none">
		<div class="flex items-center justify-between p-3 px-3 font-semibold hover:bg-neutral-500">
			<span class="truncate">Heading One</span>
		</div>
		<div class="max-h-0  duration-300 group-focus:max-h-48">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item C</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item C</a>
		</div>
	</button>

	<button class="group focus:outline-none">
		<div class="flex h-12 items-center justify-between px-3 font-semibold hover:bg-neutral-500">
			<span class="truncate">Heading Two</span>
		</div>
		<div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item C</a>
		</div>
	</button>

	<button class="group focus:outline-none">
		<div class="flex h-12 items-center justify-between px-3 font-semibold hover:bg-neutral-500">
			<span class="truncate">Heading Three</span>
		</div>
		<div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-neutral-500" href="#">Item C</a>
		</div>
	</button>
</div>

<!-- Component End  -->
<style lang="postcss">
	button {
		@apply border-t border-l border-r border-white outline-none last:border-b;
	}
</style>
