import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <div className='mw-mavenhive ph4 center mt5 pt3'>
    <Helmet title='Event/Blog/Talk Updates | MavenHive' />
    <h1 className='mb5 pb4'>&ldquo;What our team has been upto?&hellip;&rdquo;</h1>
    <h2 className='f3 brand mb4'>Events/Blog/Talk Updates</h2>
    <div className='mb5'>
      <a target='_blank' href='https://www.youtube.com/watch?v=J03pbYLeO_A' className='link black flex mv3 pv3 dim'>
        <img className='mr4' src='https://i1.ytimg.com/vi/J03pbYLeO_A/mqdefault.jpg' width='160' height='90' />
        <div>
          <h3 className='mt0 mb2 f4'><a className='link black' target='_blank' href='https://www.youtube.com/watch?v=J03pbYLeO_A'>Talk | RubyConf India 2013 Write your ruby in Style</a></h3>
          <p className='ma0 f6 mh-light-gray b'>Bhavin Javia</p>
        </div>
      </a>
      <a className='link black flex mv3 pv3 dim' target='_blank' href='https://www.youtube.com/watch?v=dLp-O1w1Duw'>
        <img className='mr4' src='https://i1.ytimg.com/vi/dLp-O1w1Duw/mqdefault.jpg' width='160' height='90' />
        <div>
          <h3 className='mt0 mb2 f4'>Talk | Make Ruby 'talk' to your users - literally</h3>
          <p className='ma0 f6 mh-light-gray b'>Bhavin Javia</p>
        </div>
      </a>
      <div className='mv3 pv3'>
        <h3 className='mt0 mb2 f4'>Event | We are Silver Sponsors @ RubyConf India</h3>
        <p className='f6'>2018 RubyConf India is going to be at Namma Bengaluru, Welcome! The Chancery Pavilion Hotel, Bengaluru. 9-10 February 2018</p>
        <p className='ma0 f6 mh-light-gray b'>Bhavin Javia</p>
      </div>
      <a className='db link black hover-gray mv3 pv3' target='_blank' href='https://blog.mavenhive.in/rails-controllers-and-services-49a2a6bb7cc7'>
        <h3 className='mt0 mb2 f4'>Blog | how to write 'thin' controllers</h3>
        <p className='f6'>In the last BRUG meet up a beginner, on the way to to be a ninja, showed me the below code asked me a simple question.</p>
        <p className='ma0 f6 mh-light-gray b'>Monika B</p>
      </a>
      <a className='db link black hover-gray mv3 pv3' target='_blank' href='https://blog.mavenhive.in/javascript-object-prototype-and-inheritance-9b2eb62a0503'>
        <h3 className='mt0 mb2 f4'>Blog | Javascript Object, Prototype and Inheritance</h3>
        <p className='f6'>Most of the things we create in javascript is an object including arrays, functions.</p>
        <p className='ma0 f6 mh-light-gray b'>Shiva Kumar</p>
      </a>
    </div>
  </div>
)

export default NotFoundPage
