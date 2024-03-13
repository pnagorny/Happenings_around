module.exports = {
  content: [
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        '1_color' : '#8E7AB5',
        '2_color' : '#B784B7',
        '3_color':'#E493B3',
        '4_color':'#EEA5A6',
        'font_color':'#5E1675',
      },
      fontFamily: {
        sans: ['Modimi One', 'sans-serif'],
      },
      backgroundColor: {
        'default': '#8E7AB5',
        'sample':'#EEA5A6',
      },
    },
  },
  plugins: [],
}