<script lang="ts">
	import { card_data } from "../components/card_data";
	import Card from "../components/Card.svelte";

	let list: string = "LIST";

	export let laravel: string = "";
	export let php: string = "";
</script>

<svelte:head>
	<title>{list} - Laravel {laravel} | PHP {php}</title>
</svelte:head>

<section class="bg-gray-900">
	<div class="mx-auto max-w-screen-2xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="text-center">
			<div class="mx-auto max-w-screen-sm text-center">
				<h1
					class="text-primary-500 mb-8 text-7xl font-extrabold tracking-tight lg:text-9xl"
				>
					{list}
				</h1>
			</div>
			<div class="grid grid-cols-1 content-center gap-4 sm:grid-cols-5">
				{#each card_data as card}
					<Card href={card.href} title={card.title}>
						<p class="mb-3 font-normal text-gray-400">
							{@html card.desc}
						</p>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
