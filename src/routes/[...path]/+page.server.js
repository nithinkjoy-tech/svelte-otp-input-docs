import { docs } from '$lib/server/content.js';
import { render_content } from '$lib/server/renderer';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log('Loading docs route:', params.path);

	const path = Array.isArray(params.path) ? params.path.join('/') : params.path;
	const document = docs.pages[path];

	if (!document) {
		console.log('Document not found for path:', path);
		error(404);
	}

	return {
		document: {
			...document,
			body: await render_content(document.file, document.body)
		}
	};
}


// import { docs } from '$lib/server/content.js';
// import { render_content } from '$lib/server/renderer';
// import { error } from '@sveltejs/kit';
//
// export async function load({ params }) {
// 	console.log({ new:params });
// 	const document = docs.pages[`${params.path}`];
//
// 	console.log({ document, docs });
//
// 	if (!document) {
// 		error(404);
// 	}
//
// 	// console.log({ document });
//
// 	return {
// 		document: {
// 			...document,
// 			body: await render_content(document.file, document.body)
// 		}
// 	};
// }
