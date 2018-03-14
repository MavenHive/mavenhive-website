import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default function Template({
  data
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <Helmet title='Projects' />
      <div className='mw-mavenhive center ph4 mt5 pt3'>
        <h1 className="f2 normal">&ldquo;We have worked in all major domains.&rdquo;</h1>
        <p className="measure-mh lh-mh f-1 mb4 mb5-l mh-gray">E-commerce, Fintech, Telecom, Non Profit, Real Estate, Social Media, Sports &amp; Fitness, Non-Profit, Marketing, Consulting and many more&hellip;</p>
      </div>
      <section className='pv4-ns bg-navy white tc'>
        <div className='mw8 center ph4 pv3 ph5-l'>
          <h3 className='ttu mb4 f4 lh-title'>{ frontmatter.cta.title }</h3>
          <div className='measure-mh center lh-copy f-1 mb4 mb5-l'>
            <p>{ frontmatter.cta.description }</p>
          </div>
          <p><Link to={ frontmatter.cta.path } className='dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand'>{ frontmatter.cta.label }</Link></p>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query projectsQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        cta {
          title
          description
          label
          path
        }
      }
    }
  }
`