/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	  extend: {
		  colors: {
			  "black-100": "#2B2C35",
			  "primary-blue": {
				  DEFAULT: "#2B59FF",
				  100: "#e0eef6",
			  },
			  "secondary-orange": "#f79761",
			  "light-white": {
				  DEFAULT: "rgba(59,60,152,0.03)",
				  100: "#fdfeff",
			  },
			  grey: "#747A88",
			  app_green: "#2cb070",
			  app_blue: "#077dc7",
			  "app-light-blue":"#09437f",
			  "app-dark-blue":"#0c3b57",
			  "app-light-green": "#edfff5",
			  "app-light-gray":"#f3f3f3",
			  "app-medium-gray":"#9c9b9b",
			  "navbar-bg":"#ebf4fa"
			  
		  },
		  backgroundImage: {
			  'pattern': "url('/pattern.png')",
			  'hero-bg': "url('/hero-bg.png')"
		  }
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    },
  },
  plugins: [],
}
