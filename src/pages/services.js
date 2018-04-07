import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import IconTechnology from '../icons/icon_technology.svg'
import IconGrowth from '../icons/icon_growth.svg'
import IconInnovation from '../icons/icon_innovation.svg'

import page from '../content/services.json'

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
    <Helmet title={`${page.title} | MavenHive`} />
    <section className="mw-mavenhive center ph4 mt5 pt3">
      <h1 className="f2 normal">{page.heading}</h1>
      <p className="measure-mh lh-mh-1 f5 tracked-mh mb4 mb5-l mh-gray">
        {page['sub-heading']}
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

    <section className="mw8 center mb5 ph5">
      {page.features.map((feature, i) => {
        return (
          <div className="mb5" key={`feature-${i}`}>
            <h3 className="f3">{feature.heading}</h3>
            <p className="f5 mh-gray lh-mh-1">{feature.content}</p>
          </div>
        )
      })}
      <div className="tc">
        <p className="mh-light-gray f3 lh-copy">{page.cta1.content}</p>
        <Link
          to={page.cta1.button.link}
          className="mh-gray dib link f-1 pv2 ph4 ba br2 b--silver tc w-100 w-auto-ns bg-white"
        >
          {page.cta1.button.label}
        </Link>
      </div>
    </section>

    <section className="pv4-ns bg-navy white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{page.cta.heading}</h3>
        <div className="measure-mh center lh-copy f-1 mb4 mb5-l">
          <p>{page.cta.content}</p>
        </div>
        <p>
          <Link
            to={page.cta.button.link}
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >
            {page.cta.button.label}
          </Link>
        </p>
      </div>
    </section>
  </div>
)
