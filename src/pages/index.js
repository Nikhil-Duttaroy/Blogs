import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>
        Nikhil's Thoughts{" "}
        <span style={{ fontSize: "1rem" }}>
          0-{data.allMarkdownRemark.totalCount}
        </span>
      </h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span style={{ fontWeight: "bold" }}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark (sort :{fields:[frontmatter___date],order:DESC}){
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`
