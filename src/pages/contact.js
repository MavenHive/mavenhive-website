import React from 'react'
import Helmet from 'react-helmet'

import Background from '../images/image_clienthive.png'

export default () => (
  <div>
    <Helmet title='Start a project with us | MavenHive' />
    <div className='mw-mavenhive center ph4 mv5 pt3 h5 cover' style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat'}}>
      <h1 className="f2 normal measure-mh-narrow lh-mh-1">&ldquo;Start a Project with us to build awesome product&rdquo;</h1>
    </div>
    <div className='mw-mavenhive center ph4 mt6 mb5'>
      <h2 className='f3 normal mt0 mb4 pb3'>Please add your project details, we will get back to you</h2>
      <form className='mw6 tracked-mh' method='POST' netlify>
        <div className='h3 mv4'>
          <label className='db f5 mb1'>Company/Project Name</label>
          <input className='h-75 w-100 pa3 ba br2 b--moon-gray' type='text' />
        </div>
        <div className='h3 mv4'>
          <label className='db f5 mb1'>Contact Name</label>
          <input className='h-75 w-100 pa3 ba br2 b--moon-gray' type='text' />
        </div>
        <div className='h3 mv4'>
          <label className='db f5 mb1'>Email Address *</label>
          <input className='h-75 w-100 pa3 ba br2 b--moon-gray' type='text' />
        </div>
        <div className='h3 mv4'>
          <label className='db f5 mb1'>Phone Number</label>
          <input className='h-75 w-100 pa3 ba br2 b--moon-gray' type='text' />
        </div>
        <div className='h3 mv4'>
          <label className='db f5 mb1'>Approx Budget *</label>
          <select className='h-75 w-100 pa3 ba br2 b--moon-gray bg-white'>
            <option disabled>Select Budget</option>
            <option>&lt; $5000</option>
            <option>&gt; $5000</option>
            <option>&gt; $10000</option>
          </select>
        </div>
        <div className='mv4'>
          <label className='db f5 mb1'>What do you need help with? *</label>
          <textarea className='h2 w-100 mw-100 pa3 h4 ba br2 b--moon-gray' />
        </div>
        <button className='f-1 bg-brand br2 white pv2 ph4 tc bw0'>Submit</button>
      </form>
    </div>
  </div>
)
