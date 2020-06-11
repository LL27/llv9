import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import media from "styled-media-query"


const ContainerImageLeft = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  width: 100%;
  margin-bottom: 6rem;
`
const ContainerImageRight = styled(ContainerImageLeft)`

  flex-direction: row;

`


const ProjectsContainer = (props) => {
 const direction = props.direction;

 if (direction === "photoright") {
  return <ContainerImageRight >{props.children}</ContainerImageRight>;
 } else if (direction === "photoleft") {
 return <ContainerImageLeft>{props.children}</ContainerImageLeft>
} else {
   return <ContainerImageLeft>{props.children}</ContainerImageLeft>
}
}
export default ProjectsContainer;











