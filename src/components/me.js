import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import datal from "./data/datal.json"
import literary from "../images/polaroid-columbia.png" // with import
import haaretz from "../images/polaroid-haaretz.png" // with import
import Header from "../components/header"
import Menu from "../components/menu"

import { CSSTransition } from "react-transition-group"
import "./hovers.css"

const Bio = styled.section`
  font-weight: 700;
  line-height: 1.8;
`
const BioP = styled.p`
 position: relative;
`


const BioLink = styled.span`
  text-decoration-line: underline;
  text-decoration-style: double;
  display: inline-block;
  cursor: pointer;
  position:relative;
`

const HoverImage = styled.div`
  height: 100%;
  width: 210px;
  top: -100px;
  right: 0;
  position: absolute;
  z-index: 1000;
   cursor: auto;
`

function Me() {
  const [showImageOne, setShowImageOne] = useState(false)
  const [showImageTwo, setShowImageTwo] = useState(false)

  return (
    <Bio>
      <Header />
      <BioP>
        Based in Paris, France, I develop fast & efficient web sites using
        advanced Javascript frameworks and Ruby for backend. I enjoy planning
        well-organized web apps that successfully map content into the site’s
        structure and visual elements, drawing on techniques earned during my

        {" "}<BioLink
          onMouseEnter={() => setShowImageOne(true)}
          onMouseLeave={() => setShowImageOne(false)}
        >
          literary studies <CSSTransition
          in={showImageOne}
          timeout={300}
          classNames="polaroid"
          unmountOnExit
        >
          <HoverImage
            onMouseEnter={() => setShowImageOne(true)}
            onMouseLeave={() => setShowImageOne(false)}
          >
            <img className="polaroid-image" src={literary} />
          </HoverImage>
        </CSSTransition>
        </BioLink>{" "}
        and in seven years as a <BioLink
          onMouseEnter={() => setShowImageTwo(true)}
          onMouseLeave={() => setShowImageTwo(false)}
        >
          news editor and reporter <CSSTransition
          in={showImageTwo}
          timeout={300}
          classNames="polaroid"
          unmountOnExit
        >
          <HoverImage
            onMouseEnter={() => setShowImageTwo(true)}
            onMouseLeave={() => setShowImageTwo(false)}
          >
            <img className="polaroid-image" src={haaretz} />
          </HoverImage>
        </CSSTransition>
        {" "}
        </BioLink>{" "} .
      </BioP>
      <BioP>I also enjoy playing the guitar and sewing.</BioP>
      <Menu/>
    </Bio>
  )
}

export default Me
