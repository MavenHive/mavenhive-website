import React from 'react'
import Helmet from 'react-helmet'

import Member from '../components/Member'

export default () => {
  return (
    <div className='mw-mavenhive center ph4 mt5 mb4 pt3'>
      <Helmet title='Alumni | MavenHive' />
      <h1 className='f2 lh-title mb5'>Our Alumni</h1>
      {[22,32,90,94,81, 85].map((id,i) => (
        <Member
          name='Name'
          role='Senior Associate'
          avatar={`https://randomuser.me/api/portraits/${(i%2) ? 'men' : 'women'}/${id}.jpg`}
          twitter='http://twitter.com/apnerve'
          linkedin='http://linkedin.com/in/apnerve'
          blurb='Was one of the up-and-coming talents at MavenHive until she edited our website, promising anyone who dropped in to our offices a beer. This shameful episode cost us millions in out-of-court settlements with drop-in-ees who were given herbal tea instead. And a once-promising career has been blighted forever. Some background and experience content Some background and experience content Some background and experience content Some background and experience content Some background and experience content Some background and experience content .'
        />
      ))}
    </div>
  )
}