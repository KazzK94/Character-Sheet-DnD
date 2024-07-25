/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "rgb(20, 36, 80)"
			},
			animation: {
				secondaryMenuSlideUp: 'secondaryMenuSlideUp 0.3s ease-in-out',
				secondaryMenuSlideDown: 'secondaryMenuSlideDown 0.3s ease-in-out'
			},
			keyframes: {
				secondaryMenuSlideUp: {
					'0%': {
						transform: 'translateY(3rem)',
						opacity: 0.6
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1
					},
				},
				secondaryMenuSlideDown: {
					'0%': {
						transform: 'translateY(-3rem)',
						opacity: 0.6
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1
					},
				},

			}
		},
	},
	plugins: [],
}

