/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],

	daisyui: {
		themes: false,
		darkTheme: "light",
		base: false,
		styled: true,
		utils: false,
		prefix: "",
		logs: false,
		themeRoot: ":root",
	},
};
