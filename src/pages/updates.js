import React from 'react'
import Helmet from 'react-helmet'
import updates from '../content/updates.json'

import { Talk, Blog, Event } from '../components/Updates'

const getComponent = function (type) {
  const components = {
    talk: Talk,
    blog: Blog,
    event: Event
  }
  return components[type]
}

const Updates = () => (
  <div className="mw-mavenhive ph4 center mt5 pt3">
    <Helmet title={`${updates.title} | MavenHive`} />
    <h1 className="mb5 pb4">{updates.heading}</h1>

    <h2 className="f3 brand mb4">{updates.title}</h2>

    <div className="mb5">
      {updates.updates.map((update, i) => {
        const Update = getComponent(update.update.type)
        return <Update
          title={update.update.title}
          author={update.update.author}
          url={update.update.url}
          key={`update-${i}`}
        />
      })}
    </div>
  </div>
)

export default Updates
