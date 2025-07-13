// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

//  /** @type {import('tailwindcss').Config} */
// export default {
//    content: ["./src/**/*.{html,js}"],
//    theme: {
//      extend: {},
//    },
//    plugins: [],
//  }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'fade-in': 'fadeIn 0.5s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
},

  plugins: [],
}

// "./src/**/*.{js,ts,jsx,tsx}",  iska mtlb sari jsx ,js .....files watch kro in src but hm  ".{html,js,jsx}" krenge to itmeans sari files watch kro
