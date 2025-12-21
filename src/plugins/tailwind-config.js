// src/plugins/tailwind-config.js
module.exports = function tailwindPlugin(context, options) {
  return {
    name: "docusaurus-tailwindcss",
    configurePostCss(postcssOptions) {
      // 注入 Tailwind 和 Autoprefixer
      postcssOptions.plugins.push(require('tailwindcss'));
      postcssOptions.plugins.push(require('autoprefixer'));
      return postcssOptions;
    },
  };
};