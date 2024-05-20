import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";
import PortableTextComponent from "../components/portableText";
import Layout from "../components/layout";

import "../styles/template.css";

export const postQuery = graphql`
  query MyQuery($slug: String) {
    sanityTrending(slug: { current: { eq: $slug } }) {
      id
      title
      readingTime
      publishedAt(formatString: "DD MMM YYYY")
      author {
        name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      mainImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      _rawBody
    }
  }
`;

function trendingBlog({ data }) {
  const blog = data.sanityTrending;
  return (
    <Layout>
      <div className="trending">
        <div style={{ display: `flex`, marginBottom: `2rem` }}>
          <GatsbyImage
            image={blog.author.image.asset.gatsbyImageData}
            className="avatar"
          />
          <div>
            <h2>
              {blog.author.name} <span className="border">follow</span>
            </h2>
            <p className="font-light text-sm my-3">{blog.publishedAt}. { blog.readingTime } read</p>
          </div>
        </div>
        <h1 className="text-3xl blog-title">{blog.title}</h1>
        <GatsbyImage
          image={blog.mainImage.asset.gatsbyImageData}
          alt=""
          className="coverImg"
        />

        <PortableText
          value={blog._rawBody}
          components={PortableTextComponent}
        />
      </div>
    </Layout>
  );
}

export default trendingBlog;
