/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				customDark: '#070200',
				customYellow: '#FFB605',
				customGrey: '#D9D9D9',
				customOrange:'#FB5C02',
			  }
    },
  },
  plugins: [],
}

