import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import FormBackground from '../images/image_lauchpad.png'
import page from '../content/contact.json'

export default props => (
  <Layout>
    <Helmet title={`${page.title} | MavenHive`} />
    <div
      className="cover mv3 relative bg-center h5 pv5 content-box"
      style={{
        backgroundImage: `url(${page.cover})`,
      }}
    >
      <div className="mw-mavenhive center ph3">
        <h1 className="f2 normal measure-mh-narrow lh-mh-1">{page.heading}</h1>
      </div>
    </div>
    <div
      className="mw-mavenhive bg-form center ph3 mv4 bg-right bg-white"
      style={{
        backgroundImage: `url(${FormBackground})`,
      }}
    >
      <h2 className="f3 normal mt0 mb4 pb3">{page.formHeading}</h2>
      <form
        className="mw6 tracked-mh"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
      >
        <div className="h3 mv4">
          <label className="db f5 mb1">Company/Project Name</label>
          <input
            className="h-75 w-100 ph3 ba br2 b--moon-gray"
            type="text"
            name="company-name"
          />
        </div>
        <div className="h3 mv4">
          <label className="db f5 mb1">Contact Name</label>
          <input
            className="h-75 w-100 ph3 ba br2 b--moon-gray"
            type="text"
            name="contact-name"
          />
        </div>
        <div className="h3 mv4">
          <label className="db f5 mb1">Email Address *</label>
          <input
            className="h-75 w-100 ph3 ba br2 b--moon-gray"
            type="text"
            name="email"
          />
        </div>
        <div className="h3 mv4">
          <label className="db f5 mb1">Phone Number</label>
          <input
            className="h-75 w-100 ph3 ba br2 b--moon-gray"
            type="text"
            name="phone"
          />
        </div>
        <div className="h3 mv4">
          <label className="db f5 mb1">Approx Budget *</label>
          <select
            className="h-75 w-100 ph3 ba br2 b--moon-gray bg-white"
            name="budget"
          >
            <option>&lt; $5000</option>
            <option>&gt; $5000</option>
            <option>&gt; $10000</option>
          </select>
        </div>
        <div className="mv4">
          <label className="db f5 mb1">What do you need help with? *</label>
          <textarea
            className="h2 w-100 mw-100 pa3 h4 ba br2 b--moon-gray"
            name="brief"
          />
        </div>
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <button className="f-1 bg-brand br2 white pv2 ph4 tc bw0 pointer hover-bg-dark-red bg-animate">
          Submit
        </button>
      </form>
    </div>
  </Layout>
)
