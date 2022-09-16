// @ts-ignore
import { createInertiaApp } from '@inertiajs/inertia-svelte';
import { InertiaProgress } from '@inertiajs/progress';

import '../css/app.css';

InertiaProgress.init();
createInertiaApp({
	// @ts-ignore
	resolve: (name) => importPageComponent(name, import.meta.glob('../views/pages/**/*.svelte')),

	// @ts-ignore
  	setup({ el, App, props }) {
  	  	new App({ target: el, props })
  	},
})

function importPageComponent(name: string, pages: Record<string, any>) {
	// eslint-disable-next-line no-restricted-syntax
	for (const path in pages) {
		if (path.endsWith(`${name.replaceAll('.', '/')}.svelte`)) {
			return typeof pages[path] === 'function'
				? pages[path]()
				: pages[path]
		}
	}

	throw new Error(`Page not found: ${name}`)
}
