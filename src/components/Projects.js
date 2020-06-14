import React from "react"

import projects from "../data/projects.json"
import ProjectContainer from "./ProjectContainer"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import media from "styled-media-query"
import FsLightbox from "fslightbox-react"

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
class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSelected: false,
      projects: projects,
    }
  }



  render() {
    return (
      <ProjectsWrapper>
        {projects.map((node, index) => (
          <div key={index}>
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
                    border: 18px solid hsla(0, 0%, 0%, 0.04);

                    box-shadow: 0 0 1px 0px hsla(0, 0%, 0%, 0.4);
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
          </div>
        ))}
      </ProjectsWrapper>
    )
  }
}

export default Projects
