import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
    <div className="mw-mavenhive center ph4 mt5 pt3">
      <h1 className="f2 normal">
        &ldquo;We build solution for users problems.&rdquo;
      </h1>
      <p className="measure-mh lh-mh f-1 mb4 mb5-l mh-gray">
        We combine our software and product craftsmanship with our client’s
        disruptive ideas to achieve their business goals with high ROI
      </p>
    </div>
    <section className="mw-mavenhive center ph4 pv3 pv4-ns tc">
      <div className="flex-l justify-center mb4">
        <div className="w-feature-l">
          <img className="w4 h4" src="./assets/wedding-couple.svg" alt="" />
          <h3 className="f-1 brand ttu">Tech Partnership</h3>
          <ul className="list center mw-100-l pa0 f-1 lh-mh">
            <li>Core Product or Project delivery</li>
            <li>Build MVP</li>
            <li>Inception and Project planning</li>
            <li>End-to-end Product Design</li>
            <li>Development, Deployment and Scaling</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <img className="w4 h4" src="./assets/monitor-window.svg" alt="" />
          <h3 className="f-1 brand ttu">Enablement</h3>
          <ul className="list center mw-100-l pa0 f-1 lh-mh">
            <li>Agile process consulting</li>
            <li>Training Developers</li>
            <li>Technical Training </li>
            <li>Onsite Coaching</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <img
            className="w4 h4"
            src="./assets/netherlands-windmill.svg"
            alt=""
          />
          <h3 className="f-1 brand ttu">Innovation</h3>
          <ul className="list center mw-100-l pa0 f-1 lh-mh">
            <li>Design Thinking</li>
            <li>Rapid prototyping</li>
            <li>New technology research and migration</li>
            <li>Experimentation with business models, products and features</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pv4-ns bg-navy white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{frontmatter.cta.title}</h3>
        <div className="measure-mh center lh-copy f-1 mb4 mb5-l">
          <p>{frontmatter.cta.description}</p>
        </div>
        <p>
          <Link
            to={frontmatter.cta.path}
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >
            {frontmatter.cta.label}
          </Link>
        </p>
      </div>
    </section>
  </div>
)
