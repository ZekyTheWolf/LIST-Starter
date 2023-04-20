<script>
	export let status;

	$: title = {
		503: "503: Service Unavailable",
		500: "500: Server Error",
		404: "404: Page Not Found",
		403: "403: Forbidden"
	}[status];

	$: description = {
		503: "Sorry, we are doing some maintenance. Please check back soon.",
		500: "Whoops, something went wrong on our servers.",
		404: "Sorry, the page you are looking for could not be found.",
		403: "Sorry, you are forbidden from accessing this page."
	}[status];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-md px-4 py-8 text-center lg:px-12 lg:py-16">
		<h1
			class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:mb-6 xl:text-6xl"
		>
			{title}
		</h1>
		<p
			class="font-light text-gray-500 dark:text-gray-400 md:text-lg xl:text-xl"
		>
			{description}
		</p>
	</div>
</section>
