module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10002b",
        secondary: "#240046",
        accent: "#7b2cbf",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #18181b, #09090b, #000000)', // Matches Tailwind's zinc-900 to zinc-950 to black
      },
    },
  },
  plugins: [],
};
