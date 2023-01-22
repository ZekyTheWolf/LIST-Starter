import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({ mode }) => {
	return {
		plugins: [
            laravel({
                input: ['resources/scripts/main.ts'],
                refresh: true,
            }),
            svelte({
				preprocess: [
					vitePreprocess(),
				]
			}),
		],

		server: {
			cors: mode === "development",
		},

		resolve: {
			alias: {
				'@':  path.resolve(__dirname, './resources/scripts/'),
				'@Views':  path.resolve(__dirname, './resources/views/'),
				'@Pages':  path.resolve(__dirname, './resources/views/pages/'),
			}
		},
	}
})
