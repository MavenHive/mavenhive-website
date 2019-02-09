import React from "react"
import Helmet from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import "./fonts.css"
import "./mavenhive.css"
import "tachyons/"

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-column min-vh-100">
    <Helmet
      title="MavenHive - Trusted companion for your product journey"
      meta={[
        {
          name: "description",
          content:
            "We combine our software and product craftsmanship with our client's disruptive ideas to achieve business goals with high ROI"
        }
      ]}
    />
    <Header />
    <main className="flex-auto">{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
