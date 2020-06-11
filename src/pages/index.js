import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import media from "styled-media-query"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectContainer from "../components/ProjectContainer"

import Me from "../components/me"
import lw from "../images/lewagon.png"
import c from "../images/columbia-ny.jpg"

import SEO from "../components/seo"

import "../components/layout.css"


const projects = [
 {
   title: "Dovalfon.com",
   path: "dovalfon",
   description: "The official website of a bestselling crime author",
   technologies: "Ruby on Rails API and React.js",
   images: ["https://res.cloudinary.com/litall/image/upload/v1589978102/ygpgfm0py2h8nl57llxg6v38u4ln.png", ],

 },
  {
   title: "",
   path: "dovalfon",
   description: "The official website of a bestselling crime author",
   technologies: "Ruby on Rails API and React.js",
   images: ["https://res.cloudinary.com/litall/image/upload/v1589978102/ygpgfm0py2h8nl57llxg6v38u4ln.png", ],

 },
   {
   title: "",
   path: "dovalfon",
   description: "The official website of a bestselling crime author",
   technologies: "Ruby on Rails API and React.js",
   images: ["https://res.cloudinary.com/litall/image/upload/v1589978102/ygpgfm0py2h8nl57llxg6v38u4ln.png", ],

 }

]
const alternatingContainer = ['photoright', 'photoleft'];

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const ArticleHeader = styled.h3`
  margin-bottom: 0;
`

const Projects = styled.div`
  padding-top: 5rem;
`


const ProjectImage = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 0px;


  ${media.greaterThan("1000px")`
     width: 55%;
  `}
`
const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: pink;
  padding: 1em;
  height: 100%;


  ${media.greaterThan("1000px")`

         width: 45%;

  `}
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Me />
      <Projects>
        {projects.map((node, index) => (
            <div key={index}>
              <Link
                to={node.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <ProjectContainer direction={alternatingContainer[index % alternatingContainer.length]}>
                  <ProjectImage>
                    <img src={node.images[0]} alt=""  css={css`
                  margin-bottom: 0;
                `}/>
                  </ProjectImage>
                  <ProjectText>
                    <ArticleHeader>{node.title}</ArticleHeader>
                    <p>{node.description}</p>
                    <h6>Technologies:</h6>
                    {node.technologies}

                  </ProjectText>
                </ProjectContainer>
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
  }
`
