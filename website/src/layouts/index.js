import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import style from './index.css'

const TemplateWrapper = ({ children }) => (
  <div className='flex flex-column min-vh-100'>
    <Helmet
      title="MavenHive"
      meta={[
        { name: 'description', content: 'mavenhive' },
        { name: 'keywords', content: 'mavenhive' },
      ]}
    >
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700' rel='stylesheet' />
      <link href='https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css' rel='stylesheet' />
    </Helmet>
    <Header />
    <div className='flex-auto'>
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
