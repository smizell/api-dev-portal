const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
})({
  experimental: {
    modern: true,
  },
});