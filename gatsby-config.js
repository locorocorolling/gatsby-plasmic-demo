module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Plasmic Demo",
  },
  plugins: [
    {
      resolve: "@plasmicapp/loader-gatsby",
      options: {
        projects: [
          {
            id: "5ztJncxm4GNHHZLjFtMN3i",  // ID of a project you are using
            token: "ZvFrX7LXggA1dnkyrxbECzXX228PhpTvlIorAccxZjjbDEwjPYKA0trZq9xSPF5B5hdFBNOOx5mVVuaasWsg"  // API token for that project
          },
        ],
        defaultPlasmicPage: require.resolve('./src/templates/default.tsx'),
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true
      },
    },
  ],
};
