import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	// Redirect from root path to /basic
	if (url.pathname === '/') {
		redirect(302, '/basic-usage');
	}

	// Return empty data for other paths
	return {};
}