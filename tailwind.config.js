/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': {'max':'1120px'},
      'lg':{'max':'990px'},
      'md':{'max':'670px'},
      'ph': {'max': '360px'}
    }
  },
  plugins: [],
}

