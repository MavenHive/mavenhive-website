import React from 'react'
import Helmet from 'react-helmet'

import Member from '../components/Member'
import page from '../content/alumni.json'

export default () => {
  return (
    <div className="mw-mavenhive center ph4 mt5 mb4 pt3">
      <Helmet title={`${page.title} | MavenHive`} />
      <h1 className="f2 lh-title mb5">{page.heading}</h1>
      {page.alumni.map((member, i) => {
        const person = member.member
        return (
          <Member
            name={person.name}
            role={person.role}
            avatar={person.avatar}
            twitter={person.twitter}
            linkedin={person.linkedin}
            blurb={person.blurb}
            key={`alumni-${i}`}
          />
        )
      })}
    </div>
  )
}
