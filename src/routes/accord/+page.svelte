<!-- Component Start -->
<div class="flex w-56 flex-col">
	<button
		class="max-h-12 overflow-hidden border-black font-semibold duration-300 focus:max-h-40 focus:outline-none"
	>
		<span
			class="flex h-12 items-center justify-between truncate px-3 font-semibold hover:bg-gray-200"
			>Heading One</span
		>
		<div class="">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
		</div>
	</button>

	<button class="group border-t border-r border-l border-black focus:outline-none">
		<div class="flex h-12 items-center justify-between px-3 font-semibold hover:bg-gray-200">
			<span class="truncate">Heading Two</span>
		</div>
		<div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
		</div>
	</button>
	<button class="group border border-black focus:outline-none">
		<div class="flex h-12 items-center justify-between px-3 font-semibold hover:bg-gray-200">
			<span class="truncate">Heading Three</span>
		</div>
		<div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
			<a class="flex h-8 items-center px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
		</div>
	</button>
</div>

<!-- Component End  -->
<style lang="postcss">
	button {
		@apply border-t border-l border-r border-white last:border-b;
	}
</style>
