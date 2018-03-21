import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-column min-vh-100">
    <Helmet
      title="MavenHive"
      meta={[
        {
          name: 'description',
          content:
            "We combine our software and product craftsmanship with our client's disruptive ideas to achieve business goals with high ROI",
        },
        { name: 'keywords', content: '' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
      />
    </Helmet>
    <Header />
    <main className="flex-auto">{children()}</main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
