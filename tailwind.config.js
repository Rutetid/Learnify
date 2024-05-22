/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-custom": "#F3F1F9",
				"custom-black": "#08060E",
				"clifford": "#C19FF0"
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