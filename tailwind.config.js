module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'sans': ['Montserrat', "sans-serif"],
      },
      colors: {
        'maroon': {
          DEFAULT: '#800000',
          '50': '#FF3939',
          '100': '#FF2424',
          '200': '#FA0000',
          '300': '#D20000',
          '400': '#A90000',
          '500': '#800000',
          '600': '#480000',
          '700': '#100000',
          '800': '#000000',
          '900': '#000000'
        },
      },
    }
  },
  plugins: [],
}
