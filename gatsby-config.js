module.exports = {
  siteMetadata: {
    title: `PH peso to $Au`,
    description: `Convert from PHP to AUD`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PHP to AUD`,
        short_name: `P to $`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#bb86fc`,
        display: `minimal-ui`,
        icon: `src/images/money.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
