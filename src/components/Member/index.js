import React from 'react'

import TwitterIcon from '../../icons/twitter-profile.svg'
import LinkedinIcon from '../../icons/linkedin-profile.svg'

export default ({ name, role, avatar, blurb, twitter, linkedin }) => (
  <div className="w-100">
    <div
      className="aspect-ratio aspect-ratio--1x1 cover overflow-hidden"
      style={{ backgroundImage: `url(${encodeURIComponent(avatar)})` }}
    >
      <div className="aspect-ratio-object">
        <img
          className="w-100 o-0"
          src={encodeURIComponent(avatar)}
          alt={`picture of ${name}`}
        />
      </div>
    </div>
    <div className="">
      <h2 className="f6 mb1">{name}</h2>
      <p className="lh-copy f6 mv0">{role}</p>
    </div>
  </div>
)
