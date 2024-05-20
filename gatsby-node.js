exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            title
            readingTime
            description
            slug {
              current
            }
            categories {
              title
            }
            mainImage {
              asset {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
      allSanityTrending(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            title
            readingTime
            description
            readingTime
            publishedAt(formatString: "DD MMM YYYY")
            slug {
                current
            }
            categories {
              title
            }
            mainImage {
              asset {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            author {
              name
              image {
                asset {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const allStories = result.data.allSanityPost.edges || [];
  allStories.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const trending = result.data.allSanityTrending.edges || [];
  trending.forEach((edge, index) => {
    const path = `/trending-blog/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/trending-blog.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
