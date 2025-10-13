import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			allow: ['./packages/site-kit', './packages/icons'],
		},
	},
	resolve: {
		alias: {
			'icons': path.resolve(__dirname, './packages/icons/icons')
		}
	},
	ssr: {
		noExternal: ['@sveltejs/site-kit'],
		external: ['shiki', 'typescript']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/site-kit', 'shiki']
	}
});