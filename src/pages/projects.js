import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Illustration from '../images/image_projects.svg'
import VideoIcon from '../icons/icon_play.svg'
import Citrix from '../images/Bitmap.png'

const Project = ({
  heading,
  client,
  services,
  summary,
  details
}) => (
  <div className='pv2 mw8'>
    <h3 className='f3 mv3'>{ heading }</h3>
    <p className='mh-light-gray ttu b f6 mv3 tracked'>{ client } - { services }</p>
    <p className='lh-copy mv2'>{ summary }</p>
    <p className='f6 lh-copy mv2'>{ details }</p>
  </div>
)

export default () => (
  <div>
    <Helmet title="Projects | MavenHive" />
    <section className="mw-mavenhive center ph4 mt5 pt3 flex-l items-center justify-between">
      <img className="self-end order-1" src={Illustration} alt="" />
      <div className='mb6'>
        <h1 className="f2 normal measure-narrow">
          &ldquo;We have worked in all major domains.&rdquo;
        </h1>
        <p className="measure-mh lh-mh-1 f5 tracked-mh mb4 mb5-l mh-gray">
          E-commerce, Fintech, Telecom, Non Profit, Real Estate, Social Media, Sports &amp; Fitness, Non-Profit, Marketing, Consulting and many more&hellip;
        </p>
      </div>
    </section>

    <section className='mw-mavenhive center ph4 mb5'>
      <h2 className='f3 brand mb4'>Our Projects</h2>
      <Project
        heading='The Non-profit MVP story'
        client='Grasshopper'
        services='Product Design and Development'
        summary='A US client’s MVP built by a 3 person team and launched in 6 months resulted in $1M+ funding'
        details='Grasshopper is a US based 13+ years old company providing cloud based telephony services to startups. They wanted to enter international markets and expand. But their decade old system was not scaling. So they wanted to re-architect and rebuild their core system.  MicroService Architecture. API based system. Adhersion.'
      />
      <Project
        heading='Training for Grads'
        client='ThoughtWorks'
        services='Training'
        summary='Some catchy text to define MavenHive teams work there.'
        details='Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work. Some more text explaning our work.'
      />
    </section>

    <section className='mw-mavenhive center ph4 mb5 tc'>
      <p className='mw8 center f3 lh-mh ph6 mv0'>“Watch the GrassHopper team share how MavenHive helped them build and launch the international version of their core telephony product”</p>
      <div className='mb3'><img src={Citrix} alt='' /></div>
      <div>
        <a href='#'><img src={VideoIcon} alt='' width='90' height='90' /></a>
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
