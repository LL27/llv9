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
   title: "Official Author Website",
   path: "dovalfon",
   description: "The official website of a bestselling crime author",
   technologies: "Ruby on Rails API, React.js and Heroku",
   images: ["https://res.cloudinary.com/litall/image/upload/v1591986046/litallevin/dovallfon-homepage_sc8gr2.png", "https://res.cloudinary.com/litall/image/upload/v1591986046/litallevin/dovalfon-interviewspage_mlanfb.png", "https://res.cloudinary.com/litall/image/upload/v1591986046/litallevin/dovallfon-homepage_sc8gr2.png", "https://res.cloudinary.com/litall/image/upload/v1591986046/litallevin/dovalfon-biopage_vdgk6g.png" ],

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


const ArticleHeader = styled.h3`
  margin-right: 1rem;
  margin-bottom: 0px;
  align-self: flex-start;
   ${media.greaterThan("1000px")`
       margin-bottom: 1.25rem;
  `}
`

const Projects = styled.div`
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
                   border-radius: 20px;
                     border: 18px solid hsla(0, 0%, 0%, 0.04);

                   box-shadow: 0 0 1px 0px hsla(0, 0%, 0%, 0.4);

                `}/>
                  </ProjectImage>
                  <ProjectText>
                    <ArticleHeader>{node.title}</ArticleHeader>
                    <Par><strong>Main technologies:</strong> {node.technologies}</Par>


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
