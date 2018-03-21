import React from 'react'

import TwitterIcon from '../../icons/twitter-profile.svg'
import LinkedinIcon from '../../icons/linkedin-profile.svg'

export default ({ name, role, avatar, blurb, twitter, linkedin }) => (
  <div className="flex mv3">
    <div className="img-member">
      <img className="br-100 w4" src={avatar} />
    </div>
    <div className="w-90 pl3">
      <h2 className="f6 ma0">{name}</h2>
      <p className="lh-copy f6 mh-light-gray mv2">{role}</p>
      <p className="lh-copy f6 mt0 pr4">{blurb}</p>
      <p>
        <a target="_blank" href={twitter}>
          <img
            className="w1 h1 mr2"
            src={TwitterIcon}
            alt="link to twitter profile"
          />
        </a>{' '}
        <a target="_blank" href={linkedin}>
          <img
            className="w1 h1"
            src={LinkedinIcon}
            alt="link to linkedin profile"
          />
        </a>
      </p>
    </div>
  </div>
)
