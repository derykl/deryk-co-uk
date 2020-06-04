import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      mylogo: file(relativePath: { eq: "derykcouk-logo.png" }) {
        childImageSharp {
          fixed(width: 169, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.mylogo.childImageSharp.fixed} alt="Deryk.co.uk (Home)"/>
}

export default Logo
