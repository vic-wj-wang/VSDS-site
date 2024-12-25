/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vs-sans': ["Inter"],
    },
    screens: {
      'sm': '320px',
      'md':'640',
      'lg': '1024px',
      'xl': '1440px',
    },
    
    extend: {
      colors: {
        'on-surface-inverse': '#ffffff',
        'surface-100': '#000000',
        'surface-200':'#F6F6F6',
        'surface-300':'#E5E5E5',
        'outline':'#E5E5E5',
        'outline-variant':'#B2B2B2',
        'blue-100':'#E5ECFF',
        'blue-500':'#4C71D2',
        'red-400':'#E7556E',
        'red-50':'#FFF3F5',
        'green-500':'#81B23D',
        'on-surface': '#333333',
        'on-surface-variant':'#999999',
        'on-info-variant':'#ffffff',
        'tertiary-variant':'#2C9799',
        'slate-100': '#D3D6E1',
        'neutral-100': '#F6F6F6',
        'info-varient': '#2F88CC',
        'link':'#3C5AAA',
        'link-variant':'#4C71D2',
        'green-100': '#E7F7D0',
        'neutral-variant':'#333333',
        'neutral-300':'#E5E5E5',
        'purple-50':'#F6EAFF',
        'tertiary-variant':'#2C9799',
      },
      backgroundImage:{
        'herobannerbg':"url('/src/assets/images/herobanner-bg.png')",
      },
    },
  },
  plugins: [],
}

