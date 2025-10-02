import { render_content_markdown } from '@sveltejs/site-kit/markdown';

export const render_content = (filename, body, options = {}) => {
	return render_content_markdown(filename, body, options, (filename, source) => {
		const injected = [];

		if (/(svelte)/.test(source) || filename.includes('typescript')) {
			injected.push(`// @filename: ambient.d.ts`, `/// <reference types="svelte" />`);
		}

		if (filename.includes('svelte-compiler')) {
			injected.push('// @esModuleInterop');
		}

		if (filename.includes('svelte.md')) {
			injected.push('// @errors: 2304');
		}

		if (filename.includes('svelte-action') || source.includes(' declare const ')) {
			injected.push('// @noErrors');
		}

		if (filename.includes('typescript')) {
			injected.push('// @errors: 2304');
		}

		if (
			source.includes('$app/') ||
			source.includes('$service-worker') ||
			source.includes('@sveltejs/kit/')
		) {
			injected.push(`// @filename: ambient-kit.d.ts`, `/// <reference types="@sveltejs/kit" />`);
		}

		if (source.includes('$env/')) {
			injected.push(
				`declare module '$env/dynamic/private' { export const env: Record<string, string> }`,
				`declare module '$env/dynamic/public' { export const env: Record<string, string> }`,
				`declare module '$env/static/private' { export const API_KEY: string }`,
				`declare module '$env/static/public' { export const PUBLIC_BASE_URL: string }`
			);
		}

		if (source.includes('./$types') && !source.includes('@filename: $types.d.ts')) {
			injected.push(
				`// @filename: $types.d.ts`,
				`import * as Kit from '@sveltejs/kit';`,
				`export const PageLoad = Kit.Load;`,
				`export const PageServerLoad = Kit.ServerLoad;`,
				`export const LayoutLoad = Kit.Load;`,
				`export const LayoutServerLoad = Kit.ServerLoad;`,
				`export const RequestHandler = Kit.RequestHandler;`,
				`export const Action = Kit.Action;`,
				`export const Actions = Kit.Actions;`,
				`export const EntryGenerator = () => Promise.resolve([]) || [];`
			);
		}

		if (filename.endsWith('$env-all.md') || filename.endsWith('$app-forms.md')) {
			injected.push('// @errors: 7006 7031');
		}

		if (filename.endsWith('10-configuration.md')) {
			injected.push('// @errors: 2307');
		}

		if (source.includes('$lib/types')) {
			injected.push(`declare module '$lib/types' { export interface User {} }`);
		}

		return injected.join('\n');
	});
};