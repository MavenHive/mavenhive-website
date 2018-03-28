import React from 'react'

import startcase from 'lodash.startcase'
import upperfirst from 'lodash.upperfirst'
import getYoutubeId from 'get-youtube-id'

const Update = ({
  type,
  thumbnail,
  title,
  content,
  url,
  author
}) => {
  // const 
  return (
    <a
      className={`db link black dim mv3 pv3 ${thumbnail ? 'flex' : ''}`}
      target="_blank"
      href={url}
    >
      {thumbnail && <img className='mr3' src={thumbnail} alt='' width='160' height='90' />}
      <div>
        <h3 className="mt0 mb2 f4">
          {startcase(type)} | {upperfirst(title)}
        </h3>
        <p className="f6">
          {content}
        </p>
        <p className="ma0 f6 mh-light-gray b">{startcase(author)}</p>
      </div>
    </a>
  )
}

const Blog = (props) => (
  <Update type='blog' {...props} />
)

const Talk = (props) => {
  const id = getYoutubeId(props.url)
  const thumbnail = `https://i1.ytimg.com/vi/${id}/mqdefault.jpg`
  return (
    <Update type='talk' thumbnail={thumbnail} {...props} />
  )
}

const Event = (props) => (
  <Update type='event' {...props} />
)

export {
  Blog,
  Talk,
  Event
}