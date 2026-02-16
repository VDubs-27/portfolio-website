// tailwind.config.js

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This path tells Tailwind to scan all your React components and HTML
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-dark": "#000010",
        "indigo-deep": "#202061",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      // Recreate the complex ::before pseudo-element effect
      addUtilities(
        {
          ".custom-hover-effect::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120%",
            height: "120%",
            background:
              "radial-gradient(circle, rgba(0, 123, 255, 0.7), transparent)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%) scale(0)",
            transition: "transform 0.2s ease-in-out",
            pointerEvents: "none",
            zIndex: "0",
          },
          ".group:hover .custom-hover-effect::before": {
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        ["hover"]
      ); // hover utility navbar.
    }),
  ],
};
