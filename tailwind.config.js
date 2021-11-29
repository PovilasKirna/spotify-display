module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: "Roboto, sans-serif",
		},
		extend: {
			animation: {
				scroll: "move 10s linear infinite",
				scrollHorizontal: "translateX(100%)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
