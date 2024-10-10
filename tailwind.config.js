module.exports = {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx,astro}', // Adjust paths based on your project structure
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0038A8', // Rangers blue
					secondary: '#CE1126', // Rangers red
					accent: '#FFFFFF', // White (neutral)
					neutral: '#F0F0F0', // Light gray for neutral backgrounds
					'base-100': '#FFFFFF', // Base white background
					info: '#005BB7', // Slightly darker blue for info
					success: '#4CAF50', // Success green (optional)
					warning: '#FFC107', // Warning yellow
					error: '#E53935', // Error red
				},
			},
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')], // Add DaisyUI here
};
