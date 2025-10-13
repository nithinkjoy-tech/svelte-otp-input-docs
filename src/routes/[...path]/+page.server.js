import { docs } from '$lib/server/content.js';
import { render_content } from '$lib/server/renderer';
import { error } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return Object.keys(docs.pages).map(path => ({ path }));
}

export async function load({ params }) {
	const path = Array.isArray(params.path) ? params.path.join('/') : params.path;
	const document = docs.pages[path];

	if (!document) {
		error(404);
	}

	return {
		document: {
			...document,
			body: await render_content(document.file, document.body)
		}
	};
}