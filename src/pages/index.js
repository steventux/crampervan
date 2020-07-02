import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Crampervan - A DIY van conversion"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Link to="/blog/">
          <img style={{ margin: 0 }} src="./bad-camper.jpg" alt="Bad camper" />
        </Link>

        <h1>
          Hello!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>This site documents the DIY conversion of a panel van into sub-luxurious camper.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Read about the conversion</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
