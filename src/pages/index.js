import React from 'react'
import Layout from '../layouts'
import { Link } from 'gatsby'
import marked from 'marked'
import Carousel from 'react-slick'
import Services from '../components/Services'

import Illustration from '../images/image_illustration.svg'
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
      breakpoint: 960,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
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

const Arrow = () => (
  <img
    width="11"
    height="21"
    src={IconArrow}
    alt=""
    style={{ marginTop: '-11px' }}
  />
)

const Step = ({ icon, label }) => (
  <li className="relative">
    <img
      className="db center mb2 pb1"
      src={icon}
      width="75"
      height="75"
      alt=""
    />
    {label}
  </li>
)

const Process = ({ title, content }) => (
  <div className="mv4 w-third-l ph3-l">
    <h3 className="f5">{title}</h3>
    <p className="lh-mh-1 ph4-l">{content}</p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <section className="mw-mavenhive center pa3 pa4-l mt3-l flex-l items-center justify-between tc tl-l">
      <img className="order-1 w-60 w-auto-ns" src={Illustration} alt="" />
      <div>
        <h1 className="f2 normal">{page.heading}</h1>
        <p className="measure measure-wide-l center ml0-l lh-copy f4 mb4 mh2 mb5-l">
          {page['sub-heading']}
        </p>
        <p>
          <Link
            to="/portfolio"
            className="dib link f-1 pv1 ph4 ba b--brand br2 fw5 tc w-100 w-auto-ns white bg-brand hover-bg-dark-red bg-animate"
          >
            {page['hero-cta']}
            <i icon={IconStart} />
          </Link>
        </p>
      </div>
    </section>
    <section className="bg-mh-gray pa3 pt5-l tc-l">
      <div className="mw-mavenhive center">
        <h1 className="f3 mb4 pb4-l normal">
          We are a team of imaginators helping business at all stages of growth
        </h1>
        <div className="dn db-l">
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
              className="absolute bt bw1 flex justify-around gray"
              style={{
                top: 'calc(50% - 0.5rem)',
                right: '2rem',
                left: '2rem',
                zIndex: '0',
              }}
            >
              <Arrow />
              <Arrow />
              <Arrow />
            </li>
            <Step icon={IconMVP} label="MVP" />
            <Step icon={IconRearchitect} label="Re-Architecture" />
            <Step icon={IconEstablishment} label="Establishment" />
            <Step icon={IconStart} label="Stability" />
          </ul>
        </div>
        <div className="flex-l justify-between mh-gray tracked-mh">
          <Process
            title="MVP"
            content="Tech partnerships that help clients validate core ideas. MVPs built from scratch,
              complete with end-to end product design, development, deployment and scaling"
          />
          <Process
            title="Re-Architecture"
            content="Tech not keeping up with business? Products needs bracing for rapid
              user influx. We rebuild products and help scale design to sustain long term
              growth"
          />
          <Process
            title="Establishment and Stability"
            content="Agile process
              consulting, on-site coaching & technical training relevant to
              your team’s needs. Magic sauce that helps successful product stay on top"
          />
        </div>
      </div>
    </section>

    <section className="mw-mavenhive center pa3 pv4-ns tc">
      <div className="dn db-l flex-l justify-center mb4">
        <p className="f-2 pb3 brand mh2 b">Technology that helps you build.</p>
        <p className="f-2 pb3 brand mh2 b">Expertise to help you scale.</p>
        <p className="f-2 pb3 brand mh2 b">Training to help you grow.</p>
      </div>
      <Services />
      <p className="">
        <Link
          to="/services"
          className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand hover-bg-dark-red bg-animate"
        >
          See all our services
        </Link>
      </p>
    </section>

    <section className="bg-mh-gray pa3 tc">
      <div className="mw-mavenhive center flex flex-wrap justify-around justify-center-ns pv3 mb4">
        {page.stats.map((stat, i) => (
          <div
            className="w4 h4 bg-white br-100 pa3 mv3 mh1 ma4-ns content-box"
            key={`stat-${i}`}
          >
            <h2 className="f2 normal ma2">{stat.value}</h2>
            <p className="lh-copy">{stat.metric}</p>
          </div>
        ))}
      </div>
      <div className="mw-mavenhive center">
        <p className="f3">{page.clients.heading}</p>
        <div className="flex items-center justify-center flex-wrap">
          {page.clients.list.map((client, i) => (
            <img
              className="mh3 mv2"
              src={client.logo}
              alt=""
              key={`client-${i}`}
            />
          ))}
        </div>
      </div>
    </section>

    <div className="mw-mavenhive center">
      <section className="mt4 mb5 pa3 ph4-l">
        <div className="tc tracked-mh">
          <Carousel {...carouselSettings}>
            {page.testimonials.map((testimonial, i) => (
              <div
                className="dib mw6 ph4 ws-normal v-top"
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
      <div className="mw8 center pa3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">{page.cta.heading}</h3>
        <div
          className="lh-copy f-1 mb4 mb5-l tracked-mh mh-mid-gray"
          dangerouslySetInnerHTML={{ __html: marked(page.cta.content) }}
        />
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

export default IndexPage
