import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <em>
          © {new Date().getFullYear()} Deryk Lister. All Rights Reserved on
          logos, images and content.  Source code for website under MIT License.
          Full details at
          {` `}
          <a href="https://github.com/derykl/deryk-co-uk">My GitHub Repository</a>.
          You are very welcome to visit the repository, see how it works, learn
          from it, build from it, make the web a more performant place.
          </em>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
