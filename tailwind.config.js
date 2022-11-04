/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      background: '#F0F2F3',
      foreground: '#0B0B0B',
      primary: '#2843DE',
      success: '#0ECD9D',
      danger: '#CD0E61',
      failure: '#CD0E61',
      disabled: '#DDDDDD',
      gray: '#6E7191',
      white: '#FCFCFC',
      black: '#14142B'
    },

    extend: {}
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  }
}
