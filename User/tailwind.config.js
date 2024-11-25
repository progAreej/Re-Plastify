

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
        blue: "#006cd8", // Custom blue color
        blueD: "#0051a2", // Custom blue color
        green:"#0080ff",
        blueLight:"#3EB0E4"
        // green:"##32CD32"
      },
    },
  },
  plugins: [],
};
