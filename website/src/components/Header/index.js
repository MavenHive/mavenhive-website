import React from 'react'
import Link from 'gatsby-link'

import Logo from './MavenHive-logo.svg'

const Header = () => (
  <header className="h3-l pv4 pv2-l content-box">
    <div className="mw9 center ph4 ph6-l flex items-center-l justify-between h-100">
      <Link className="db" to='/'><img src={Logo} alt="mavenhive logo" /></Link>
      <ul className="list ma0 pa0 f5 tr tl-l">
        <li className="dib-l mh2-l pa1"><Link className="link black ph2-l pv2-l hover-brand" to='/services'>Services</Link></li>
        <li className="dib-l mh2-l pa1"><Link className="link black ph2-l pv2-l hover-brand" to='/projects'>Projects</Link></li>
        <li className="dib-l mh2-l pa1"><a className="link black ph2-l pv2-l hover-brand" href="#">People</a></li>
        <li className="dib-l ml2-l pa1"><a className="link black ph2-l pv2-l hover-brand" href="#">Join us</a></li>
      </ul>
    </div>
  </header>
)

export default Header
