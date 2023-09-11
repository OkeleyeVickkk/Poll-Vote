/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"p-heavy": "#022958",
				"p-medium": "#0077b9",
				"p-light": "#8bc1db",
			},
			backgroundColor: {
				"p-heavy": "#022958",
				"p-medium": "#0077b9",
				"p-light": "#8bc1db",
			},
		},
	},
	plugins: [],
};
