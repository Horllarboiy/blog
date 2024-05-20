import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const Index = ({ data }) => {
  return (
    <Layout>
      <div className="">
        <h1 className="text-4xl my-3 font-bold">BuzzFeeds</h1>
        <h3 className="text-xl mb-5 font-light">
          TailwindCSS theme, medium style, simply perfect for bloggers
        </h3>
        <h2 className="text-2xl my-2 font-bold">
          Trending <span className="animate-ping">...</span>
        </h2>
        <hr className="md:my-4 xs:mt-4 mx-1" />
      </div>

      <section>
        {data.allSanityTrending.edges.map((edge) => {
          return (
            <div
              key={edge.node.id}
              className="lg:w-3/6 md:w-4/5 md:mx-auto lg:inline-block xs:block lg:px-2 lg:py-2 xs:py-10"
            >
              <Link
                to={`trending-blog/${edge.node.slug.current}`}
                className="lg:flex justify-between xs:block lg:h-64 border"
              >
                <GatsbyImage
                  image={edge.node.mainImage.asset.gatsbyImageData}
                  alt=""
                  className="xs:w-full lg:h-full lg:w-60 xs:mb-10"
                />
                <div className="lg:px-6 xs:px-5 lg:py-3 lg:w-40 flex-1">
                  <h1 className="text-xl font-bold">{edge.node.title}</h1>
                  <h3 className="text-sm mt-4 font-light">
                    {edge.node.description}
                  </h3>
                  <div className="flex lg:mt-10 xs:my-7">
                    <GatsbyImage
                      image={edge.node.author.image.asset.gatsbyImageData}
                      alt=""
                      className="w-10 rounded-full"
                    />
                    <div className="flex flex-col text-xs ml-3">
                      <p className="mb-1 font-semibold">
                        {edge.node.author.name}
                      </p>
                      <p className="font-extralight">
                        <span> {edge.node.publishedAt}.</span>
                        <span className="ml-3">
                          {edge.node.readingTime} read
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>

      <section className="mt-16">
        <div>
          <h2 className="text-2xl my-2 font-bold">
            All Stories <span className="animate-ping">...</span>
          </h2>
          <hr className="my-4 mx-2" />
        </div>
        {data.allSanityPost.edges.map((edge) => {
          return (
            <div
              key={edge.node.id}
              className="lg:w-3/6 md:w-4/5 md:mx-auto lg:inline-block xs:block lg:px-2 lg:py-2 xs:py-10"
            >
              <Link
                to={`blog/${edge.node.slug.current}`}
                className="lg:flex justify-between xs:block lg:h-64 border"
              >
                <GatsbyImage
                  image={edge.node.mainImage.asset.gatsbyImageData}
                  alt=""
                  className="xs:w-full lg:h-full md:w-64 xs:mb-10"
                />
                <div className="lg:px-6 xs:px-5 lg:py-3 lg:w-40 flex-1">
                  <h1 className="text-xl font-bold">{edge.node.title}</h1>
                  <h3 className="text-sm mt-4">{edge.node.description}</h3>
                  <div className="flex lg:my-10 xs:my-7">
                    <GatsbyImage
                      image={edge.node.author.image.asset.gatsbyImageData}
                      className="w-10 rounded-full"
                    />
                      <div className="flex flex-col text-xs ml-3">
                      <p className="mb-1 font-semibold">
                        {edge.node.author.name}
                      </p>
                      <p className="font-extralight">
                        <span> {edge.node.publishedAt}.</span>
                        <span className="ml-3">
                          {edge.node.readingTime} read
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Index;
export const query = graphql`
  query {
    allSanityPost {
      edges {
        node {
          id
          title
          readingTime
          publishedAt(formatString: "DD MMM YYYY")
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
    allSanityTrending {
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
`;
