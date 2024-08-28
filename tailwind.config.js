/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1290px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {
        'one': '0px 20px 30px 0px rgba(251, 100, 0, 0.15)', 
      },
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')", 
      },
      fontFamily: {
        'worksan': ['Work Sans', 'sans-serif'], 
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'], 
        'manrope': ['Manrope', 'sans-serif'], 
      },
      backgroundColor: {
        'first': '#009688', 
        'second': '#E0F2F1', 
        'third': '#F8F8F8', 
      },
      borderColor: {
        'first' : '#E9EAEC', 
      },
      colors: {
        'first': '#323B49', 
        'second': '#A0AEC0', 
        'third': '#009688', 
        'four': '#344054', 
      },
    },
  },
  plugins: [],
}

