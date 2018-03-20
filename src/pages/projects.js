import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const frontmatter = {
  cta: {
    title: 'title',
    description: 'description',
    label: 'label',
    path: '/services'
  }
}
export default () => (
  <div>
    <Helmet title='Projects' />
    <div className='mw-mavenhive center ph4 mt5 pt3'>
      <h1 className="f2 normal measure-narrow">&ldquo;We deliver far more for our clients than what would be thought possible&rdquo;</h1>
    </div>
    <section className='pv4-ns bg-brand white tc'>
      <div className='mw-mavenhive center ph4 pv3 ph5-l'>
        <h3 className='mb4 f4 lh-title'>{ frontmatter.cta.title }</h3>
        <div className='lh-copy f-1 mb4 mb5-l'>
          <p>{ frontmatter.cta.description }</p>
        </div>
        <p><Link to={ frontmatter.cta.path } className='dib link f-1 pv1 ph4 br2 fw5 tc w-100 w-auto-ns white ba'>{ frontmatter.cta.label }</Link></p>
      </div>
    </section>
  </div>
)
