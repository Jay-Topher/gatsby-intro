import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hi! I'm Jones</h1>
      <h2>A fullstack developer living in Lagos.</h2>
      <p>Need a developer? <a href="/contact">Contact Me.</a></p>
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
    </Layout>
  )
}
