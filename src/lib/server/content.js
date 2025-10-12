import { read } from '$app/server';
import { create_index } from '@sveltejs/site-kit/server/content';

const documents = import.meta.glob('../content/**/*.md', {
	eager: true,
	query: '?url',
	import: 'default'
});

const assets = {};

export const index = await create_index(documents, assets, '../content', read);

export function remove_section(slug) {
	return slug.replace(/\/[^/]+(\/[^/]+)$/g, '$1');
}

function create_docs() {
	let docs = { topics: {}, pages: {} };

	for (const [key, section] of Object.entries(index)) {
			docs.pages[key] = section;
			const pages = section.children;
			const transformed_section = {
				...section,
				children: []
			};

			for (const page of pages) {
				const slug = remove_section(page.slug);
				if (Object.hasOwn(docs.pages, slug)) {
					throw new Error(`${docs.pages[slug].file} conflicts with ${page.file}`);
				}

				const transformed_page = (docs.pages[slug] = {
					...page,
					slug,
					next: page.next?.slug.startsWith(`docs/${pkg}/`)
						? { slug: remove_section(page.next.slug), title: page.next.title }
						: null,
					prev: page.prev?.slug.startsWith(`docs/${pkg}/`)
						? { slug: remove_section(page.prev.slug), title: page.prev.title }
						: null
				});

				transformed_section.children.push(transformed_page);
			}
		}

	return docs;
}

export const docs = create_docs();