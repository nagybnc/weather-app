/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            background: {
                primary: "var(--bg-background-primary)",
                secondary: "var(--bg-background-secondary)",
            },
            colors: {
                primary: "var(--text-color-primary)",
                secondary: "var(--text-color-secondary)",
            },
            white: "white",
        },
    },
    plugins: [],
};
