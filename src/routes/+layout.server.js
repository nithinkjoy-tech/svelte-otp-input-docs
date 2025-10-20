import { redirect } from '@sveltejs/kit';

export const prerender = false;

export function load({ url }) {
	const pathname = url.pathname;

	// Production path
	if (pathname === '/docs/svelte-otp-input/' || pathname === '/docs/svelte-otp-input') {
		throw redirect(302, '/docs/svelte-otp-input/basic-usage');
	}

	// Development path
	if (pathname === '/') {
		throw redirect(302, '/basic-usage');
	}

	return {};
}