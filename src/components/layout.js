/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from '@emotion/core'




const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

        <div
          css={css`
          margin: 0 auto;
          max-width: 1000px;
          padding: 2em;
      @media (min-width: 576px) {
        padding: 4em;
      }
      @media (min-width: 768px) {
        padding: 6em;
      }

    `}
        >
          <main>{children}</main>

        </div>
        <Footer>
            <p>
            © {new Date().getFullYear()}
            {` `}LL
            </p>

          </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
