/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'rotate-slow': 'rotate 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typing 4s steps(40) 1s forwards',
        'gradient-flow': 'gradient 6s ease-in-out infinite', // Smooth gradient transition
        'fade-in-up': 'fadeInUp 1s ease-out', // Smooth fade-in upwards
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%', // For animated gradients
      },
      colors: {
        'gradient-start': '#7f5af0', // Custom color for gradients
        'gradient-end': '#2cb67d',
      },
    },
  },
  plugins: [],
};
