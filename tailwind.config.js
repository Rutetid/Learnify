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
				"purple-dark": "#6b21a8",
				"gradient-purple": "#B59CFF",
				"gradient-white": "#F3F1F9",
				"start-gradient": "#6B46C1",
				"end-gradient": "#43218C",
				"button-start": "#43218C",
				"button-end": "#824EF3",
				"card-start": "#AC8AF6",
				"card-end": "#FFDDDD",
				"db-secondary": "#6627D8",
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
	variants: {
		extend: {
			backgroundImage: ["hover", "focus"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		function ({ addUtilities }) {
			const newUtilities = {
				".gradient-text": {
					background: "linear-gradient(to right, var(--tw-gradient-stops))",
					"-webkit-background-clip": "text",
					"-webkit-text-fill-color": "transparent",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
