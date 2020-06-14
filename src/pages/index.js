import React from "react"
import { Link, graphql } from "gatsby"

import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import media from "styled-media-query"

import ProjectContainer from "../components/ProjectContainer"

import projects from "../data/projects"

import Me from "../components/me"

import SEO from "../components/seo"

import "../components/layout.css"


const alternatingContainer = ["photoright", "photoleft"]

const ArticleHeader = styled.h3`
  margin-right: 1rem;
  margin-bottom: 0px;
  align-self: flex-start;
  ${media.greaterThan("1000px")`
       margin-bottom: 1.25rem;
  `}
`

const ProjectsWrapper = styled.div`
  padding-top: 5rem;
`

const Par = styled.p`
  margin-bottom: 0;
`

const ProjectImage = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 0px;
}

  ${media.greaterThan("1000px")`
     width: 55%;
  `}
`
const ProjectText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0rem;
  height: 100%;

  ${media.greaterThan("1000px")`
         flex-direction: column;
         width: 45%;
          padding: 1.45rem 1.2rem;
          justify-content: flex-start;



  `}
`

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Me />
      <ProjectsWrapper id="works">
        <h2 css={css`
                  border-bottom: 1px black solid;
                  padding-bottom: 1.45rem;
                  color: inherit;
                `}>works</h2>
        {projects
          .map((node, index) => (
          <div key={index}>
                   <Link
                to={node.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >

            <ProjectContainer
              direction={
                alternatingContainer[index % alternatingContainer.length]
              }
            >

              <ProjectImage>
                <img
                  src={node.images[0]}
                  alt=""
                  css={css`
                    margin-bottom: 0;
                    border-radius: 20px;

                  `}
                />
              </ProjectImage>

              <ProjectText>
                <ArticleHeader>{node.title}</ArticleHeader>
                <Par>
                  <strong>Main technologies:</strong> {node.technologies}
                </Par>
              </ProjectText>
            </ProjectContainer>
            </Link>
          </div>
        ))}
      </ProjectsWrapper>
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
  }
`
