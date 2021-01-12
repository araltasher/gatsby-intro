module.exports = {
  siteMetadata: {
    title: 'Gatsby Intro',
    description:
      'A site we built together during a full-day Frontend Masters Workshop',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout'),
        },
      },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: 'posts'
        }
    }
  ],
};
