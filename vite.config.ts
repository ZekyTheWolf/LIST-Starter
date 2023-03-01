import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import { svelte } from '@sveltejs/vite-plugin-svelte';
const vitePreprocess = import('@sveltejs/vite-plugin-svelte').then(m => m.vitePreprocess())
import path from 'path';

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			laravel({
				input: [
					'resources/scripts/main.ts'
				],
				refresh: true,
			}),
			svelte({
				preprocess: {
					//@ts-ignore
					script:async (options) => (await vitePreprocess).script(options),
					//@ts-ignore
					style:async (options) => (await vitePreprocess).style(options),
				}
			}),
		],

		server: {
			cors: mode === "development",
		},

		resolve: {
			alias: {
				'@Layouts':  path.resolve(__dirname, './resources/layouts/'),
				'@Components':  path.resolve(__dirname, './resources/components/'),
			}
		}
	}
})