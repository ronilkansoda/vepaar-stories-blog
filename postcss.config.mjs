// Tailwind CSS v4: only use the Tailwind PostCSS plugin here.
// Other Tailwind plugins (like typography) should be enabled via
// `@plugin '@tailwindcss/typography'` in your CSS, not in PostCSS plugins.
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
