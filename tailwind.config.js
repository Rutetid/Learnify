/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-custom": "#F3F1F9",
				"custom-black": "#08060E",
				clifford: "#C19FF0",
				sidebar: "#F6F3FB",
				dashboard: "#D1C5EC",
				"accent-dark": "#8E71D0",
			},
			spacing: {
				22: "90px",
			},
			width: {
				350: "330px",
				370: "369px",
				"20vw": "17vw",
				"30vw": "30vw",
				"50vw": "53vw",
				"83vw": "83vw",
			},
			height: {
				370: "350px",
			},
			margin: {
				"20vw": "17vw",
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