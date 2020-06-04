import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Oh an <em>Under Construction</em> site - the absolute WORST of the 1990s!
    I hear you, but it's my own site that I'm building up my
    {" "}<a href="https://gatsbyjs.org">GatsbyJS</a> muscles with and since there was
    nothing there before, it might as well be my development and production site
    all in one.  The horror!</p>
  </Layout>
)

export default IndexPage
