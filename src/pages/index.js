import React from 'react'
import Link from 'gatsby-link'
import marked from 'marked'
import Carousel from 'react-slick'
import Clients from '../components/Clients'

import Illustration from '../images/image_illustration.svg'
import IconTechnology from '../icons/icon_technology.svg'
import IconGrowth from '../icons/icon_growth.svg'
import IconInnovation from '../icons/icon_innovation.svg'
import IconMVP from '../icons/icon_mvp.svg'
import IconRearchitect from '../icons/icon_rearchitect.svg'
import IconEstablishment from '../icons/icon_establishment.svg'
import IconStart from '../icons/icon_start.svg'
import IconArrow from '../icons/icon_arrow.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import page from '../content/home.json'

const carouselSettings = {
  infinite: false,
  dots: true,
  arrows: true,
  dotsClass: 'slick-dots bottom--2',
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const IndexPage = () => (
  <div>
    <section className="mw-mavenhive center ph4 pv3 pt4-l mt3-l flex-l items-center justify-between tc tl-l">
      <img className="order-1" src={Illustration} alt="" />
      <div>
        <h1 className="f2 normal">{page.heading}</h1>
        <p className="measure measure-wide-l lh-copy f4 mb4 mb5-l">
          {page['sub-heading']}
        </p>
        <p>
          <Link
            to="/projects"
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >
            See what we have built
          </Link>
        </p>
      </div>
    </section>
    <section className="bg-mh-gray ph4 pv3 pt5-l tc-l">
      <div className="mw-mavenhive center">
        <h1 className="f3 mb4 pb4-l normal">
          We are a team of imaginators helping business at all stages of growth
        </h1>
        <div
          style={{
            overflow: 'auto',
          }}
        >
          <ul
            className="relative list pa0 ma0 flex justify-between items-end w-100 h-100 mb4 mh-gray tracked-mh f5"
            style={{
              width: '840px',
              height: '120px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <li
              className="absolute bt bw1 flex justify-around mh-gray"
              style={{
                top: 'calc(50% - 0.5rem)',
                right: '0',
                left: '0',
                zIndex: '0',
              }}
            >
              <img
                width="11"
                height="21"
                src={IconArrow}
                alt=""
                style={{ marginTop: '-11px' }}
              />
              <img
                width="11"
                height="21"
                src={IconArrow}
                alt=""
                style={{ marginTop: '-11px' }}
              />
              <img
                width="11"
                height="21"
                src={IconArrow}
                alt=""
                style={{ marginTop: '-11px' }}
              />
            </li>
            <li className="relative">
              <img
                className="db center mb2 pb1"
                src={IconMVP}
                width="75"
                height="75"
                alt=""
              />MVP
            </li>
            <li className="relative">
              <img
                className="db center mb2 pb1"
                src={IconRearchitect}
                width="75"
                height="75"
                alt=""
              />Re-Architecture
            </li>
            <li className="relative">
              <img
                className="db center mb2 pb1"
                src={IconEstablishment}
                width="75"
                height="75"
                alt=""
              />Establishment
            </li>
            <li className="relative">
              <img
                className="db center mb2 pb1"
                src={IconStart}
                width="75"
                height="75"
                alt=""
              />Start
            </li>
          </ul>
        </div>
        <div className="flex-l justify-between mh-gray tracked-mh">
          <div className="mv4 w-third-l ph3-l pl5-l pr4-l">
            <h3 className="f5">MVP</h3>
            <p className="lh-mh-1 ph4-l">
              We form tech partnerships with our clients to validate idea. We
              help build MVPs from scratch, complete with end-to end product
              design, development, deployment and scaling.
            </p>
          </div>
          <div className="mv4 w-third-l ph3-l ph4-l">
            <h3 className="f5">Re-Architecture</h3>
            <p className="lh-mh-1 ph4-l">
              Growing fast but the tech lacks? Product needs bracing for rapid
              user influx? We rebuild product designed to sustain long term
              growth.
            </p>
          </div>
          <div className="mv4 w-third-l ph3-l pl4-l pr5-l">
            <h3 className="f5">Establishment and Stability</h3>
            <p className="lh-mh-1 ph4-l">
              That’s not all though, we also provide you with agile process
              consulting, onsite coaching and technical training relevant to
              your team’s needs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mw-mavenhive center ph4 pv3 pv4-ns tc">
      <div className="flex-l justify-center mb4">
        <p className="f-2 pb3 brand mh2 b">Training to help you grow.</p>
        <p className="f-2 pb3 brand mh2 b">Technology that help you build.</p>
        <p className="f-2 pb3 brand mh2 b">Expertise to help you scale.</p>
      </div>
      <div className="flex-l justify-center mb4">
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
      <p className="">
        <a
          href="#"
          className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
        >
          See all our services
        </a>
      </p>
    </section>

    <section className="bg-mh-gray pa4 tc">
      <div className="mw-mavenhive center flex flex-wrap justify-center pv3 mb4">
        {page.stats.map((stat, i) => (
          <div
            className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box"
            key={`stat-${i}`}
          >
            <h2 className="f2 normal ma2">{stat.value}</h2>
            <p className="lh-copy">{stat.metric}</p>
          </div>
        ))}
      </div>
      <Clients />
    </section>

    <div className="mw-mavenhive center">
      <section className="mt4 mb5 pv3">
        <div className="tc tracked-mh">
          <Carousel
            {...carouselSettings}
          >
            {page.testimonials.map((testimonial, i) => (
              <div
                className="dib mw6 ph4 ws-normal v-top h5"
                key={`testimonial-${i}`}
              >
                <section>
                  <h4 className="f5 lh-title">{testimonial.position}</h4>
                  <h5 className="f5 normal">{testimonial.name}</h5>
                  <p className="lh-copy">{testimonial.content}</p>
                </section>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>

    <section className="pv4-ns bg-mh-purple white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{page.cta.heading}</h3>
        <div
          className="lh-copy f-1 mb4 mb5-l tracked-mh mh-mid-gray"
          dangerouslySetInnerHTML={{ __html: marked(page.cta.content) }}
        />
        <p>
          <Link
            to="/contact"
            className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand"
          >
            Start a project with us
          </Link>
        </p>
      </div>
    </section>
  </div>
)

export default IndexPage
