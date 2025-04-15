/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.ts', // Explicitly point to your config file
    },
    autoprefixer: {},
  },
};
export default config;
