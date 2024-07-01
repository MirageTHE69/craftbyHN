import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/navBar"
import Hero from "../components/hero"
import Info from "../components/info"
import Services from "../components/service"
import Footer from "../components/footer"




const IndexPage = () => (
  <div className=" h-screen">
    <Navbar/>    

    <Hero/>

    <Info/>

    <Services/>

    <Footer/>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
