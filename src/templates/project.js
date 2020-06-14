import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Header from "../components/header"

import SEO from "../components/seo"



const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  text-align: center;

`

const MarkedHeader = styled.h1`
  font-family: 'Lora', Fallback, serif;



`



// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <Header/>
      <Content>
        <MarkedHeader>{project.frontmatter.title}</MarkedHeader>
        <p>{project.frontmatter.description}</p>
         <p>Main technologies: {project.frontmatter.technologies}</p>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: project.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        path
        title
        description
        technologies
      }
    }
  }
`
