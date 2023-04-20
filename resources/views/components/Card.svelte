<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} class="block rounded-lg bg-gray-800 p-6 shadow-2xl hover:bg-gray-700">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
		{title}
	</h5>
	<p class="font-normal text-gray-400">
		<slot />
	</p>
</a>
