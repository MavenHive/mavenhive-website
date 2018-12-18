import React from 'react'
import Helmet from 'react-helmet'

import Member from '../components/Member'
import page from '../content/alumni.json'

export default () => {
  const width = window.document.body.offsetWidth
  const gridGap = width > 1280 ? '1rem' : '2rem'
  const gridWidth = width > 1280 ? '220px' : '160px'
  return (
    <div className="mw-mavenhive center ph3 mt5 mb4 pt3">
      <Helmet title={`${page.title} | MavenHive`} />
      <h1 className="f2 lh-title mb5">{page.heading}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${gridWidth}, 1fr))`,
          gridGap: gridGap,
        }}
      >
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
    </div>
  )
}
