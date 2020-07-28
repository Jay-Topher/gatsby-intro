import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>My name is Jones Ogolo, I'm a fullstack developer</p>
      <p>
        Want to start a project? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
