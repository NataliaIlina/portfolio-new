module.exports = {
  pathPrefix: '/portfolio-new',
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        ssr: false,
        displayName: true,
        fileName: false,
      },
    },
  ],
};
