import { read } from '$app/server';
import { create_index } from '@sveltejs/site-kit/server/content';

const documents = import.meta.glob('../content/**/*.md', {
	eager: true,
	query: '?url',
	import: 'default'
});

// const assets = import.meta.glob(
// 	['../../../content/**/+assets/**', '../../../content/**/+assets/**/.env'],
// 	{
// 		eager: true,
// 		query: '?url',
// 		import: 'default'
// 	}
// );

const assets = {};

export const index = await create_index(documents, assets, '../content', read);

const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

function format_date(date) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
		throw new Error(`Invalid blog post date for date ${date}, should be in the format YYYY-MM-DD`);
	}

	const [y, m, d] = date.split('-');
	const month = months[+m - 1];
	if (month === undefined) {
		throw new Error(`Invalid blog post month for date ${date}`);
	}
	return `${months[+m - 1]} ${+d} ${y}`;
}

const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

// export const blog_posts = index.blog.children
// 	.map((post) => {
// 		const authors = [];
//
// 		if (post.metadata.author) {
// 			const names = post.metadata.author.split(/, ?/);
// 			const urls = post.metadata.authorURL.split(/, ?/);
//
// 			if (names.length !== urls.length) {
// 				throw new Error(`Mismatched authors and URLs in ${post.file}`);
// 			}
//
// 			authors.push(...names.map((name, i) => ({ name, url: urls[i] })));
// 		}
//
// 		const date = post.metadata.date ?? post.file.split('/').pop().slice(0, 10);
//
// 		return {
// 			...post,
// 			date,
// 			date_formatted: format_date(date),
// 			authors,
// 			pinned: post.metadata.pinnedUntil ? post.metadata.pinnedUntil > today : false
// 		};
// 	})
// 	.sort((a, b) => {
// 		if (!!a.pinned !== !!b.pinned) {
// 			return a.pinned ? -1 : 1;
// 		}
//
// 		return a.date < b.date ? 1 : -1;
// 	});

export function remove_section(slug) {
	return slug.replace(/\/[^/]+(\/[^/]+)$/g, '$1');
}

function create_docs() {
	let docs = { topics: {}, pages: {} };
	// console.log("craeting docs", index);
	// for (const topic of index?.children || []) {
	// 	console.log("\nloop 1\n")
	// 	const pkg = topic.slug.split('/')[1];
	// 	const sections = topic.children;
	// 	const transformed_topic = (docs.topics[topic.slug] = {
	// 		...topic,
	// 		children: []
	// 	});

		// for (const section of [index]) {
	for (const [key, section] of Object.entries(index)) {
			docs.pages[key] = section;
			console.log({section})
			const pages = section.children;
			console.log({pages})
			const transformed_section = {
				...section,
				children: []
			};

			// transformed_topic.children.push(transformed_section);

			for (const page of pages) {
				const slug = remove_section(page.slug);
				console.log({slug})
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

// function create_docs() {
// 	let docs = { topics: {}, pages: {} };
// console.log("craeting docs", index);
// 	for (const topic of index?.children || []) {
// 		console.log("\nloop 1\n")
// 		const pkg = topic.slug.split('/')[1];
// 		const sections = topic.children;
// 		const transformed_topic = (docs.topics[topic.slug] = {
// 			...topic,
// 			children: []
// 		});
//
// 		for (const section of sections) {
// 			const pages = section.children;
// 			const transformed_section = {
// 				...section,
// 				children: []
// 			};
//
// 			transformed_topic.children.push(transformed_section);
//
// 			for (const page of pages) {
// 				const slug = remove_section(page.slug);
//
// 				if (Object.hasOwn(docs.pages, slug)) {
// 					throw new Error(`${docs.pages[slug].file} conflicts with ${page.file}`);
// 				}
//
// 				const transformed_page = (docs.pages[slug] = {
// 					...page,
// 					slug,
// 					next: page.next?.slug.startsWith(`docs/${pkg}/`)
// 						? { slug: remove_section(page.next.slug), title: page.next.title }
// 						: null,
// 					prev: page.prev?.slug.startsWith(`docs/${pkg}/`)
// 						? { slug: remove_section(page.prev.slug), title: page.prev.title }
// 						: null
// 				});
//
// 				transformed_section.children.push(transformed_page);
// 			}
// 		}
// 	}
//
// 	return docs;
// }

export function create_summary(document) {
	return {
		slug: document.slug,
		metadata: document.metadata,
		children: document.children.map(create_summary)
	};
}

export const docs = create_docs();
console.log({ docs });

// export const examples = index.examples.children;