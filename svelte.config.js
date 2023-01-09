//import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		//adapter: adapter()
		adapter: vercel({ edge: true })
	},
	preprocess: vitePreprocess({ postcss: true })
};

export default config;
