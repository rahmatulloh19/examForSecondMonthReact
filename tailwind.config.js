/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					default: "20px",
				},
				screens: {
					default: "1280px",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("daisyui"),
		require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
	],

	daisyui: {
		themes: false,
		darkTheme: "light",
		base: false,
		styled: false,
		utils: false,
		prefix: "",
		logs: false,
		themeRoot: ":root",
	},
};
