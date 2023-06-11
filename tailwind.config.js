/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				hoverBgClr: "#6274F8",
			},
			colors: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				custom_1: "#182341",
				hoverBgClr: "#6274F8",
				custom_2: "#273250",
			},
			boxShadow: {
				custom_1: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
				custom_2: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				custom_3: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
				inputShadow: "0px 0px 2px -1px rgb(131, 144, 250, 0.8)",
			},
		},
	},
	plugins: [],
};
