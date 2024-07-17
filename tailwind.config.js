module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spaceBlue: '#0a0f1e',
        starYellow: '#ffcc00',
      },
      backgroundImage: {
        'space': "url('/images/space-background.jpg')",
      },
    },
  },
  plugins: [],
}
