module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'sans': [
                 '-apple-system',
                  'BlinkMacSystemFont',
                  'Segoe UI',
                  'Roboto',
                  'Oxygen',
                  'Ubuntu',
                  'Cantarell',
                  'Fira Sans',
                  'Droid Sans',
                  'Helvetica Neue',
                  'sans-serif',
                  ],
        'serif': ['Cardo', 'Times', 'serif']
      },
      colors: {
        primary: '#4a4a4a',
        secondary: '#800000',
        
      },
    }
  },
  plugins: [],
}
