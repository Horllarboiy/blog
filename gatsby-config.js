require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `blog-site`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Olamide`,
    about: `creator of "Buzzmish" theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts.`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "dcv2jcl4",
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
  ],
};
