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
        <a href="https://www.linkedin.com/in/lital-levin-4a989010/">linkedin</a>
      </MenuItem>
      <MenuItem>
       <a href="mailto:lital@litallevin.com">
email me
</a>
      </MenuItem>
      <MenuItem>
        <a href="https://github.com/LL27/llv9">source</a>
      </MenuItem>
    </MenuList>
  )
}

export default Menu
