import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import IconTechnology from '../icons/icon_technology.svg'
import IconGrowth from '../icons/icon_growth.svg'
import IconInnovation from '../icons/icon_innovation.svg'

const frontmatter = {
  cta: {
    title: 'title',
    description: 'description',
    label: 'label',
    path: '/services',
  },
}
export default () => (
  <div>
    <Helmet title="Services | MavenHive" />
    <section className="mw-mavenhive center ph4 mt5 pt3">
      <h1 className="f2 normal">
        &ldquo;We build solution for users problems.&rdquo;
      </h1>
      <p className="measure-mh lh-mh-1 f5 tracked-mh mb4 mb5-l mh-gray">
        We combine our software and product craftsmanship with our client’s
        disruptive ideas to achieve their business goals with high ROI
      </p>
    </section>

    <section className="mw-mavenhive center ph4 pv3 pv4-ns tc mb5">
      <div className="flex-l justify-center">
        <div className="w-feature-l">
          <img className="w3 h3 content-box pa1" src={IconTechnology} alt="" />
          <h3 className="f-1 brand ttu">Tech Partnership</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Core Product or Project delivery</li>
            <li className="mv2">Build MVP</li>
            <li className="mv2">Inception and Project planning</li>
            <li className="mv2">End-to-end Product Design</li>
            <li className="mv2">Development, Deployment and Scaling</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <img className="w3 h3 content-box pa1" src={IconGrowth} alt="" />
          <h3 className="f-1 brand ttu">Enablement</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Agile process consulting</li>
            <li className="mv2">Training Developers</li>
            <li className="mv2">Technical Training </li>
            <li className="mv2">Onsite Coaching</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <img className="w3 h3 content-box pa1" src={IconInnovation} alt="" />
          <h3 className="f-1 brand ttu">Innovation</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Design Thinking</li>
            <li className="mv2">Rapid prototyping</li>
            <li className="mv2">New technology research and migration</li>
            <li className="mv2">
              Experimentation with business models, products and features
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className='mw8 center mb5 ph5'>
      <div className='mb5'>
        <h3 className='f3'>Tech Partnership</h3>
        <p className='f5 mh-gray lh-mh-1'>Some dummy text ….. “Consistent delivery with high quality and productivityContinual growth and extraordinary performance are the only true measures of success.” This philosophy is hard coded into our work ethic. With these goals in our sights we persistently work hard to deliver bespoke software for our clients.perfect for the fruitful realisation of your ideas. </p>
      </div>
      <div className='mb5'>
        <h3 className='f3'>Enablement</h3>
        <p className='f5 mh-gray lh-mh-1'>Some dummy text ….. “Consistent delivery with high quality and productivityContinual growth and extraordinary performance are the only true measures of success.” This philosophy is hard coded into our work ethic. With these goals in our sights we persistently work hard to deliver bespoke software for our clients.perfect for the fruitful realisation of your ideas. </p>
      </div>
      <div className='mb5'>
        <h3 className='f3'>Innovation</h3>
        <p className='f5 mh-gray lh-mh-1'>Some dummy text ….. “Consistent delivery with high quality and productivityContinual growth and extraordinary performance are the only true measures of success.” This philosophy is hard coded into our work ethic. With these goals in our sights we persistently work hard to deliver bespoke software for our clients.perfect for the fruitful realisation of your ideas. </p>
      </div>
      <div className='tc'>
        <p className='mh-light-gray f3 lh-copy'>We have perfect team of rockstars to assist you transform your ambitions into success and your idea into an enterprise can be hard work.</p>
        <Link to='/projects' className='mh-gray dib link f-1 pv1 ph4 ba br2 tc w-100 w-auto-ns bg-white'>See what we have built</Link>
      </div>
    </section>

    <section className="pv4-ns bg-navy white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">Let’s craft awesome products!</h3>
        <div className="measure-mh center lh-copy f-1 mb4 mb5-l">
          <p>We combine our software and product craftsmanship with our client’s disruptive ideas to achieve their business goals with high ROI.</p>
        </div>
        <p>
          <Link
            to='/contact'
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >
            Start a project with Us
          </Link>
        </p>
      </div>
    </section>
  </div>
)
