import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/Home/About" 

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
  </Layout>
)

export default HomePage