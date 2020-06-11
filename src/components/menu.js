import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import media from "styled-media-query"

const MenuList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;

  ${media.greaterThan("730px")`
    margin-top: 0;
  `}
`

const MenuItem = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 1.6rem;
`
const MenuLink = styled.a`

  :&active {
    color: black;
  }
`
const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link>works</Link>
      </MenuItem>
      <MenuItem>
        <MenuLink href="https://www.linkedin.com/in/lital-levin-4a989010/">linkedin</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="mailto:lital@litallevin.com">
email me
</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="https://github.com/LL27/llv9">source</MenuLink>
      </MenuItem>
    </MenuList>
  )
}

export default Menu
