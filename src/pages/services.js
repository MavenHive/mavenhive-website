import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import marked from "marked"
import Layout from "../layouts"
import Services from "../components/Services"
import page from "../content/services.json"

export default () => (
  <Layout>
    <Helmet title={`${page.title} | MavenHive`} />
    <section className="mw-mavenhive center ph3 mt5-l pt3">
      <h1 className="f2 normal">{page.heading}</h1>
      <p className="measure-mh lh-mh-1 f5 tracked-mh mb4 mb5-l mh-gray">
        {page["sub-heading"]}
      </p>
    </section>

    <section className="mw-mavenhive center pa3 pv4-ns tc mb3 mb5-l">
      <Services />
    </section>

    <section className="mw8 center mb4 mb5-l ph3 ph5-l">
      {page.features.map((feature, i) => {
        return (
          <div className="mb4 mb5-l" key={`feature-${i}`}>
            <h3 className="f3">{feature.heading}</h3>
            <div
              className="f5 mh-gray lh-mh-1"
              dangerouslySetInnerHTML={{ __html: marked(feature.content) }}
            />
          </div>
        )
      })}
      <div className="tc">
        <p className="mh-light-gray f3 lh-copy">{page.cta1.content}</p>
        <Link
          to={page.cta1.button.link}
          className="mh-gray dib link f-1 pv2 ph4 ba br2 b--silver tc w-100 w-auto-ns bg-white hover-bg-near-white bg-animate"
        >
          {page.cta1.button.label}
        </Link>
      </div>
    </section>

    <section className="pv4-ns bg-navy white tc">
      <div className="mw8 center pa3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{page.cta.heading}</h3>
        <div className="measure-mh center lh-copy f-1 mb4 mb5-l">
          <div dangerouslySetInnerHTML={{ __html: marked(page.cta.content) }} />
        </div>
        <p>
          <Link
            to={page.cta.button.link}
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand hover-bg-dark-red bg-animate"
          >
            {page.cta.button.label}
          </Link>
        </p>
      </div>
    </section>
  </Layout>
)
