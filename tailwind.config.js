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
      white: '#FCFCFC',
      black: '#14142B'
    },
    spacing: {
      1: '8px',
      1.2: '9px',
      1.3: '10px',
      2: '12px',
      3: '16px',
      4: '22px',
      5: '32px',
      6: '48px',
      44: '180px',
      48: '487px'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  }
}
