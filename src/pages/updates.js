import React from 'react'
import Helmet from 'react-helmet'

import { Talk, Blog, Event } from '../components/Updates'

const NotFoundPage = () => (
  <div className="mw-mavenhive ph4 center mt5 pt3">
    <Helmet title="Event/Blog/Talk Updates | MavenHive" />
    <h1 className="mb5 pb4">
      &ldquo;What our team has been upto?&hellip;&rdquo;
    </h1>

    <h2 className="f3 brand mb4">Events/Blog/Talk Updates</h2>

    <div className="mb5">
      <Talk
        title="RubyConf India 2013 Write your ruby in Style"
        author="Bhavin Javia"
        url="https://youtu.be/J03pbYLeO_A"
      />
      <Blog
        title="Javascript Object, Prototype and Inheritance"
        content="Most of the things we create in javascript is an object including arrays, functions."
        url="https://blog.mavenhive.in/javascript-object-prototype-and-inheritance-9b2eb62a0503"
        author="shiva kumar"
      />
    </div>
  </div>
)

export default NotFoundPage
