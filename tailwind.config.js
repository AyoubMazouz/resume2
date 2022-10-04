/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				light: "#F0EEE2",
				"light-gray": "#C6C5BB",
				"dark-gray": "#272727",
				dark: "#272727",
				accent: "#1E5559",
			},
			fontFamily: {
				dm: "'DM Mono', monospace",
				lora: "'Lora', serif",
			},
		},
	},
	safelist: ["w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-full"],
	plugins: [],
}
