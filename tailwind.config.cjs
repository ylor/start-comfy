const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains MonoVariable', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};
