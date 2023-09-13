/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "320px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				secondary: "#121212",
				primary: "#18cc3f",
				"primary-dark": "#12a733",
				"primary-opacity": "rgba(24 204 63 / 0.1)",
				ash: "#8F8F8F",
				"dark-grey": "#878787",
			},
			backgroundColor: {
				secondary: "#121212",
				primary: "#18cc3f",
				"primary-dark": "#12a733",
				"primary-opacity": "rgba(24 204 63 / 0.1)",
				ash: "#8F8F8F",
				"dark-grey": "#878787",
			},
			boxShadow: {
				cat: "0 0 2px 3px rgba(24 204 63 / 0.3)",
				hoverCat: "0 0 2px 3px rgba(24 204 63 / 0.6)",
			},
		},
	},
	plugins: [],
};
