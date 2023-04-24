// This is required for Visual Studio Code to recognize
// imported .svelte files

declare module "*.svelte" {
	export { SvelteComponentDev as default } from "svelte/internal";
}
