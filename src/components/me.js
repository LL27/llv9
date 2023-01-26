import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import datal from "./data/datal.json"
import literary from "../images/polaroid-columbia.png"
import haaretz from "../images/polaroid-haaretz.png"
import lewagon from "../images/lewagon-polaroid.png"
import Header from "./header"

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
  top: 20%;
  right: 10%;
  position: absolute;
  z-index: 1000;
  cursor: auto;

`

function Me() {
  const [showImageOne, setShowImageOne] = useState(false)
  const [showImageTwo, setShowImageTwo] = useState(false)
  const [showImageThree, setShowImageThree] = useState(false)


  return (

    <Bio>
      <Header />



      <BioP>
        Based in Paris, France, I develop fast & efficient web sites using
        Javascript frameworks such as React and Gatsby, Ruby on Rails and Wordpress. I enjoy planning
        well organized web apps that successfully map content into the site’s
        structure and visual elements, drawing on techniques earned during my

        {" "}<BioLink
          onMouseEnter={() => setShowImageTwo(true)}
          onMouseLeave={() => setShowImageTwo(false)}
        >
          literary studies
        </BioLink><CSSTransition
          in={showImageTwo}
          timeout={300}
          classNames="polaroid"
          unmountOnExit
        >
          <HoverImage
            onMouseEnter={() => setShowImageTwo(true)}
            onMouseLeave={() => setShowImageTwo(false)}
          >
            <img className="polaroid-image" src={literary} />
          </HoverImage>
        </CSSTransition>{" "}
        and in seven years as a <BioLink
          onMouseEnter={() => setShowImageThree(true)}
          onMouseLeave={() => setShowImageThree(false)}
        >
          news editor and reporter
        </BioLink>{" "}.<CSSTransition
          in={showImageThree}
          timeout={300}
          classNames="polaroid"
          unmountOnExit
        >
          <HoverImage
            onMouseEnter={() => setShowImageThree(true)}
            onMouseLeave={() => setShowImageThree(false)}
          >
            <img className="polaroid-image" src={haaretz} />
          </HoverImage>
        </CSSTransition>

      </BioP>
    </Bio>
  )
}

export default Me
