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
    <Helmet title="People | MavenHive" />
    <div
      className="cover"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: 0,
        paddingBottom: '20%',
        position: 'relative'
      }}
    >
      <div className='mw-mavenhive center ph4 mv5 pt3 h5'>
        <h1 className="f2 normal measure-mh-narrow">
          &ldquo;We deliver far more for our clients than what would be thought
          possible&rdquo;
        </h1>
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
      {[90, 94, 81, 85].map((id, i) => (
        <Member
          name="Name"
          role="Senior Associate"
          avatar={`https://randomuser.me/api/portraits/${
            i % 2 ? 'men' : 'women'
          }/${id}.jpg`}
          twitter="http://twitter.com/apnerve"
          linkedin="http://linkedin.com/in/apnerve"
          blurb="Was one of the up-and-coming talents at MavenHive until she edited our website, promising anyone who dropped in to our offices a beer. This shameful episode cost us millions in out-of-court settlements with drop-in-ees who were given herbal tea instead. And a once-promising career has been blighted forever. Some background and experience content Some background and experience content Some background and experience content Some background and experience content Some background and experience content Some background and experience content ."
        />
      ))}
    </div>
    <section className="pv4-ns bg-brand white tc">
      <div className="mw-mavenhive center ph4 pv2 ph5-l">
        <h3 className="mb3 f4 lh-title">We are always Hiring!!</h3>
        <div className="lh-copy f-1 mb4 pb2 ph5-l">
          <p>
            We have a saying at MavenHive, “We are always Hiring!”<br /> That’s
            not because we are in need of more warm bodies to bill to clients !
            But, because it is so difficult to find the right people to work
            with that you have to constantly be on the lookout for the next
            perfect fit.
          </p>
        </div>
        <p>
          <Link
            to="/careers"
            className="dib link f-1 pv1 ph4 br2 fw5 tc w-100 w-auto-ns white ba"
          >
            Join our Team
          </Link>
        </p>
      </div>
    </section>
  </div>
)
