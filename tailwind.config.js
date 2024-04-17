module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        '1_color': '#8E7AB5',
        '2_color': '#B784B7',
        '3_color': '#E493B3',
        '4_color': '#EEA5A6',
      },
      fontFamily: {
        sans: ['Modimi One', 'sans-serif'],
      },
      backgroundColor: {
        'default': '#8E7AB5',
      },
      // Adding custom styles for hiding scrollbars
      scrollbarHide: () => ({
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, Opera*/
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Assuming you have a plugin for scrollbar hide, if not you will need to create one or apply styles directly.
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, Opera */
          }
        }
      })
    }
  ],
};