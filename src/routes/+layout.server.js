import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	if (url.pathname === '/docs/svelte-otp-input/' || url.pathname === '/docs/svelte-otp-input') {
		redirect(302, '/docs/svelte-otp-input/basic-usage');
	}

	if(url.pathname === '/') {
		redirect(302, '/basic-usage');
	}

	return {};
}