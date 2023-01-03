const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	future: {
		hoverOnlyWhenSupported: true
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			},
			transitionProperty: {
				spacing: 'margin, padding'
			}
		}
	},
	plugins: []
};
