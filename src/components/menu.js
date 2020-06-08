import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 0;
`

const MenuItem = styled.li`
  display: inline;
  color: black;
  margin-right: 16px;
`

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link>works</Link>
      </MenuItem>
      <MenuItem>
        <a href="">linkedin</a>
      </MenuItem>
      <MenuItem>
        <a href="">email</a>
      </MenuItem>
      <MenuItem>
        <a href="">source</a>
      </MenuItem>
    </MenuList>
  )
}

export default Menu
