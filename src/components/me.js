import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import datal from  './data/datal.json'

const Bio = styled.section`


`


const Me = () => (
  <Bio>
    <p>{datal.bio}</p>
   <p>{datal.bioLastLine}</p>
  </Bio>


)

export default Me

