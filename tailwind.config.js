const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
                heading: ["var(--font-poppins)", ...fontFamily.sans],
            },
            colors: {
                navy: {
                    DEFAULT: '#002147',
                    50: '#f2f5f9',
                    100: '#e1e8f1',
                    200: '#cbd7e7',
                    300: '#a7bdd5',
                    400: '#7d9cbc',
                    500: '#5e7ea4',
                    600: '#4a658a',
                    700: '#3d5270',
                    800: '#35455d',
                    900: '#002147',
                },
                teal: {
                    DEFAULT: '#008080',
                    50: '#f0f9f9',
                    400: '#2dbaba',
                    500: '#008080',
                    600: '#006666',
                    700: '#004d4d'
                }
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [],
};
