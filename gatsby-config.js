module.exports = {
  siteMetadata: {
    title: "MavenHive",
    siteUrl: `https://mavenhive.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages"
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sitemap"
  ]
}
