/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-custom": "#F3F1F9",
				"custom-black": "#08060E",
				clifford: "#C19FF0",
				sidebar: "E5E0EF",
				dashboard: "#D1C5EC",
				"accent-dark": "#8E71D0",
			},
			width: {
				350: "330px",
			},
			fontSize: {
				46: "46px",
			},
			fontFamily: {
				kaushan: ["Kaushan Script", "cursive"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};