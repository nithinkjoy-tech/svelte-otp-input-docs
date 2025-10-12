import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			allow: ['./packages/site-kit'],
		},
	},
	ssr: {
		noExternal: ['@sveltejs/site-kit'],
		external: ['shiki', 'typescript']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/site-kit', 'shiki']
	}
});