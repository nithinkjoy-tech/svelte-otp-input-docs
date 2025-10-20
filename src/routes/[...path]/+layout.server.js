import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	// If path is empty or just "/" redirect to basic-usage
	if (!params.path || params.path === '') {
		throw redirect(307, '/basic-usage');
	}

	return {};
}