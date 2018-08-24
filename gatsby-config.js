module.exports = {
  siteMetadata: {
    title: 'GoInvo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GoInvo.com',
        short_name: 'GoInvo',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#eE5651c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline', // NOTE: This should come after gatsby-plugin-manifest
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layouts/case-study-layout.js")
        },
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "case-studies",
        path: `${__dirname}/src/case-studies/`
      }
    },
  ],
}
