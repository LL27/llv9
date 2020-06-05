import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { jsx, css } from '@emotion/core'



const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 2.4rem;

`
const Description = styled.h2`
  align-self: flex-end;
  margin-bottom: 0;
`

const NameHeader = styled.h1`
  margin-bottom: 0;
  line-height: 1;
    width: 175px;




`

const Header = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
        <Container>
          <div css={css`
           margin-right: 2.2rem;
           width:200px;
           @media (min-width: 420px) {
            }
      @media (min-width: 576px) {
      }
    `}>
              <NameHeader>{data.site.siteMetadata.title}</NameHeader>

    </div>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>



    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

Description.propTypes = {
  subtitle: PropTypes.string,
}

Description.defaultProps = {
  subtitle: ``,
}



export default Header
