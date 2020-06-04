import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Me from "../components/me"

import SEO from "../components/seo"


import "../components/layout.css"


const PageWrapper = styled.section`
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const ArticleHeader = styled.h3`
  margin-bottom: 0;
`

const Projects = styled.section`
  border-top: 1px solid black;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PageWrapper>
      <Me/>
      <Projects>
        <h2>PROJECTS</h2>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <ArticleHeader>{node.frontmatter.title}</ArticleHeader>
                <p>{node.frontmatter.description}</p>
              </Link>
            </div>
          ))}

      </Projects>

      </PageWrapper>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
