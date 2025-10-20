import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	if (url.pathname === '/' || url.pathname === '') {
		throw redirect(302, '/basic-usage');
	}
	return {};
}