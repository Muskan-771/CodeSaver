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
    extend: {},
  },
  plugins: [],
}

// "./src/**/*.{js,ts,jsx,tsx}",  iska mtlb sari jsx ,js .....files watch kro in src but hm  ".{html,js,jsx}" krenge to itmeans sari files watch kro
