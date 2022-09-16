import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({ mode }) => {
	return {
		plugins: [
            laravel({
                input: ['resources/scripts/main.ts'],
                refresh: true,
            }),
            svelte({
				experimental: {
					useVitePreprocess: true,
					prebundleSvelteLibraries: true,
				},
			}),
		],

		server: {
			cors: mode === "development",
		},

		optimizeDeps: {
			include: [
				"@inertiajs/inertia",
				"@inertiajs/inertia-svelte",
				"@inertiajs/progress",
				"classnames",
			],
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
