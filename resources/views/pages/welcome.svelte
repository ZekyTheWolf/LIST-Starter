<script lang="ts">
    let list: string = "LIST";

    export let laravel: string = "";
    export let php: string = "";
</script>

<svelte:head>
    <title>{list} - Laravel {laravel} | PHP {php}</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                {list}
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Laravel, Inertia, Svelte with TypeScript & TailwindCSS, Flowbite.
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Starter pack, welcome in home page.
            </p>
        </div>   
    </div>
</section>
