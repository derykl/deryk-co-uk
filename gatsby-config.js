module.exports = {
  siteMetadata: {
    title: `Deryk Lister`,
    description: `An IT professional and enthusiast based in Ulverston, Cumbria, UK.`,
    author: `Deryk Lister`
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
        name: `Deryk Lister`,
        short_name: `Deryk`,
        start_url: `/`,
        background_color: `#391D9C`,
        theme_color: `#391D9C`,
        display: `standalone`,
        icon: `src/images/deryks-d-logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
