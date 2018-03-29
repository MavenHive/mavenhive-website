import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Illustration from '../images/image_projects.svg'
import VideoIcon from '../icons/icon_play.svg'
import Citrix from '../images/Bitmap.png'

import projects from '../content/projects.json'

const Project = ({ heading, client, services, summary, details }) => (
  <div className="pv2 mw8">
    <h3 className="f3 mv3">{heading}</h3>
    <p className="mh-light-gray ttu b f6 mv3 tracked">
      {client} - {services}
    </p>
    <p className="lh-copy mv2">{summary}</p>
    <p className="f6 lh-copy mv2">{details}</p>
  </div>
)

export default () => (
  <div>
    <Helmet title={`${projects.title} | MavenHive`} />
    <section className="mw-mavenhive center ph4 mt5 pt3 flex-l items-center justify-between">
      <img className="self-end order-1" src={Illustration} alt="" />
      <div className="mb6">
        <h1 className="f2 normal measure-narrow">{projects.heading}</h1>
        <p className="measure-mh lh-mh-1 f5 tracked-mh mb4 mb5-l mh-gray">{projects['sub-heading']}</p>
      </div>
    </section>

    <section className="mw-mavenhive center ph4 mb5">
      <h2 className="f3 brand mb4">Our Projects</h2>
      {projects.projects.map((project, i) => (
        <Project
          heading={project.heading}
          client={project.client}
          services={project.services}
          summary={project.summary}
          details={project.details}
          key={`project-${i}`}
        />
      ))}
    </section>

    <section className="mw-mavenhive center ph4 mb5 tc">
      <p className="mw8 center f3 lh-mh ph6 mv0">{projects.showcase.heading}</p>
      <div className="mb3">
        <img src={Citrix} alt="" />
      </div>
      <div>
        <a href={projects.showcase.url}>
          <img src={VideoIcon} alt="" width="90" height="90" />
        </a>
      </div>
    </section>

    <section className="pv4-ns bg-navy white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{projects.cta.heading}</h3>
        <div className="measure-mh center lh-copy f-1 mb4 mb5-l">
          <p>{projects.cta.content}</p>
        </div>
        <p>
          <Link
            to={projects.cta.button.link}
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >{projects.cta.button.label}</Link>
        </p>
      </div>
    </section>
  </div>
)
