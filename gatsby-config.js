module.exports = {
  siteMetadata: {
    title: 'MavenHive',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages"
      }
    },
    'gatsby-plugin-netlify-cms'
  ],
};
