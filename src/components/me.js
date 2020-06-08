import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import datal from  './data/datal.json'

const Bio = styled.section`
  font-weight: 700;
  line-height: 1.8;

`

const BioHover = styled.span`
  text-decoration-line: underline;
  text-decoration-style: double;
  &:hover {
    color: red;
  }

`
const Me = () => (
  <Bio>
    <p>Based in Paris, France, I develop fast & efficient web sites using advanced Javascript frameworks and Ruby for backend. I enjoy planning well-organized web apps that successfully map content into the site’s structure and visual elements, drawing on techniques earned during my <BioHover>literary studies</BioHover> and in seven years as a news editor and reporter.</p>
  <p>I also enjoy playing the guitar and sewing.</p>
  </Bio>


)

export default Me

