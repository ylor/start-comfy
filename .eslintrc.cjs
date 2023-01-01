module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
	plugins: ['svelte3', 'tailwindcss'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		node: true,
		es2022: true
	}
};
