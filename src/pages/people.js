import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactModal from 'react-modal'
import marked from 'marked'

import Member from '../components/Member'

import VideoImage from '../images/image_teamvideo.png'
import IconPolyglot from '../icons/icon_polyglot.svg'
import IconFlexible from '../icons/icon_flexible.svg'
import IconExperienced from '../icons/icon_experienced.svg'
import IconSkeptical from '../icons/icon_skeptical.svg'

import people from '../content/people.json'

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { url, VideoIcon } = this.props
    return (
      <a
        className="db"
        style={{
          boxShadow:
            'inset 0 -6px 4px -3px rgba(0, 0, 0, 0.2), 0 5px 10px -3px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
        href={url}
        onClick={e => {
          e.preventDefault()
          this.handleOpenModal()
        }}
      >
        <img style={{ marginBottom: '-3px' }} src={VideoIcon} alt="" />
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="bg-black absolute top-2 right-2 bottom-2 left-2"
          overlayClassName="fixed min-vh-100 w-100 bg-black-60 top-0 glow"
        >
          <iframe
            width="100%"
            height="100%"
            src={`${url}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
          />
          <button
            className="f3 w2 h2 absolute right--1 top--1 br-100 bg-brand white bw0 pointer"
            onClick={this.handleCloseModal}
          >
            &times;
          </button>
        </ReactModal>
      </a>
    )
  }
}

const Feature = ({ icon, title, description }) => (
  <div className="tc mw5 ph2 center mt5 mt0-l">
    <img className="w2" src={icon} alt="" />
    <h3 className="f6 mb2">{title}</h3>
    <p className="f6 lh-copy ma0">{description}</p>
  </div>
)

export default () => (
  <div className="">
    <Helmet title={`${people.title} | MavenHive`} />
    <div
      className="bg-people cover bg-center relative h5 pb5 content-box"
      style={{
        backgroundImage: `url(${people.cover})`,
      }}
    >
      <div className="mw-mavenhive center ph3 mv5 pt3 h5">
        <h1 className="f2 normal measure-mh-narrow">{people.heading}</h1>
      </div>
    </div>

    <div className="mw-mavenhive center mt4 mt6-l pa3 shadow-2">
      <p className="f-1 lh-mh mh-gray tc measure-mh center">
        MavenHive combines the flexibility of freelancing with the support of a
        close-knit team. Our team members decide where, when and how much they
        work. And in so doing, deliver far more for our clients than what would
        be thought possible.
      </p>
      <div className="flex-l justify-between mv5">
        <Feature
          icon={IconPolyglot}
          title="Polyglot"
          description="Rails, Angular, Node, Backbone, JVM, Redis, Sidekiq (and the kitchen sink really)"
        />
        <Feature
          icon={IconFlexible}
          title="Flexible"
          description="Technology, Process, Work hours, Vacations, How much you earn (we mean it)"
        />
        <Feature
          icon={IconExperienced}
          title="Experienced"
          description="Products, Start up, Delivery, Consulting, Training, Diving &amp; Raising Kids (some of us at least)"
        />
        <Feature
          icon={IconSkeptical}
          title="Skeptic &amp; Tolerant"
          description="Skeptical about what we love and tolerant about what we hate (we are zen like that)"
        />
      </div>
    </div>

    <div className="mt5 pt3 tc">
      <h2 className="ma0 f3 brand mb3">
        Watch the team share their experience in MavenHive{' '}
      </h2>
      <Video
        VideoIcon={VideoImage}
        url="https://youtube.com/embed/osf_tw9c4W8"
      />
    </div>

    <div className="mw-mavenhive center mv3 pa3">
      <h2 className="f3 ttu tc mh-gray normal mb4 tracked">Our Team</h2>
      {people.team.map((member, i) => {
        const person = member.member
        if (!person) return null
        return (
          <Member
            name={person.name}
            role={person.role}
            avatar={person.avatar}
            twitter={person.twitter}
            linkedin={person.linkedin}
            blurb={person.blurb}
            key={`person-${i}`}
          />
        )
      })}
    </div>
    <section className="pv4-ns bg-brand white tc">
      <div className="mw-mavenhive center pa3 ph5-l cta">
        <h3 className="mb3 f4 lh-title">{people.cta.heading}</h3>
        <div
          className="lh-copy f-1 mb4 pb2 ph5-l"
          dangerouslySetInnerHTML={{ __html: marked(people.cta.content) }}
        />
        <p>
          <Link
            to={people.cta.button.link}
            className="dib link f-1 pv1 ph4 br2 fw5 tc w-100 w-auto-ns white ba bg-brand hover-bg-dark-red bg-animate"
          >
            {people.cta.button.label}
          </Link>
        </p>
      </div>
    </section>
  </div>
)
