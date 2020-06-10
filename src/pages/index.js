import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import media from "styled-media-query";

import Layout from "../components/layout"
import Me from "../components/me"
import lw from "../images/lewagon.jpg"
import c from "../images/columbia-ny.jpg"


import SEO from "../components/seo"

import "../components/layout.css"

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const ArticleHeader = styled.h3`

  margin-bottom: 0;
`

const Projects = styled.div`
  padding-top: 5rem;

`;


const ProjectContainer = styled.section`

  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  height: 320px;
  width: 100%;
      background-color: yellow;
      margin-bottom: 6rem;

`
const ProjectContainerRight = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 320px;
  width: 100%;
      background-color: yellow;
            margin-bottom: 6rem;


`
const ProjectImage = styled.img`
  height: 320px;
   width: 100%;
   margin-bottom: 0px;
   object-fit:cover;
   background-color: grey;

  ${media.greaterThan("medium")`
     width: 360px;


  `}
  ${media.greaterThan("1000px")`
     width: 450px;
  `}

`
const ProjectText = styled.div`
    width: 100%;
    background-color: pink;
    padding-left: 1em;
    padding-top: 1em;
     height: auto;

  ${media.greaterThan("medium")`
     width: 220px;


  `}
    ${media.greaterThan("1000px")`

         width: 300px;

  `}
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Me />
      <Projects>
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
                <ProjectContainer>
                  <ProjectImage src={lw} alt="le wagon" />

                  <ProjectText>

                    <ArticleHeader>{node.frontmatter.title}</ArticleHeader>
                    <p>{node.frontmatter.description}</p>
                  </ProjectText>


                </ProjectContainer>
                                <ProjectContainerRight>
                  <ProjectImage src={c} alt="columbia-ny" />

                  <ProjectText>

                    <ArticleHeader>{node.frontmatter.title}</ArticleHeader>
                    <p>{node.frontmatter.description}</p>
                  </ProjectText>


                </ProjectContainerRight>
              </Link>
            </div>
          ))}
      </Projects>
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
