import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Member from '../components/Member'

import Background from '../images/image_people.svg'
import VideoImage from '../images/image_teamvideo.png'
import IconPolyglot from '../icons/icon_polyglot.svg'
import IconFlexible from '../icons/icon_flexible.svg'
import IconExperienced from '../icons/icon_experienced.svg'
import IconSkeptical from '../icons/icon_skeptical.svg'

import people from '../content/people.json'

const frontmatter = {
  cta: {
    title: 'title',
    description: 'description',
    label: 'label',
    path: '/services',
  },
}
const Feature = ({ icon, title, description }) => (
  <div className="tc mw5 ph2">
    <img className="w2" src={icon} alt="" />
    <h3 className="f6 mb2">{title}</h3>
    <p className="f6 lh-copy ma0">{description}</p>
  </div>
)

export default () => (
  <div>
    <Helmet title={`${people.title} | MavenHive`} />
    <div
      className="cover"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: 0,
        paddingBottom: '20%',
        position: 'relative',
      }}
    >
      <div className="mw-mavenhive center ph4 mv5 pt3 h5">
        <h1 className="f2 normal measure-mh-narrow">{people.heading}</h1>
      </div>
    </div>

    <div className="mw-mavenhive center mt6 pa3 shadow-2">
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
      <img src={VideoImage} alt="MavenHive Team Video" />
    </div>

    <div className="mw-mavenhive center mt3 pa4 mb6">
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
      )})}
    </div>
    <section className="pv4-ns bg-brand white tc">
      <div className="mw-mavenhive center ph4 pv2 ph5-l">
        <h3 className="mb3 f4 lh-title">{people.cta.heading}</h3>
        <div className="lh-copy f-1 mb4 pb2 ph5-l">
          <p>{people.cta.content}</p>
        </div>
        <p>
          <Link
            to={people.cta.button.link}
            className="dib link f-1 pv1 ph4 br2 fw5 tc w-100 w-auto-ns white ba"
          >{people.cta.button.label}</Link>
        </p>
      </div>
    </section>
  </div>
)
