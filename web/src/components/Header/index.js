import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../images/MavenHive-logo_red.svg'

const Header = () => (
  <header className='h3-l pv4 pv2-l content-box'>
    <div className='mw-mavenhive center ph4 flex items-center-l justify-between h-100'>
      <Link className='db' to='/'><img src={Logo} alt='mavenhive logo' /></Link>
      <ul className='list ma0 pa0 f5 tr tl-l'>
        <li className='dib-l mh2-l pa1'><Link activeClassName='brand bb bw1' className='link black ph2-l pv2-l hover-brand' to='/services'>Services</Link></li>
        <li className='dib-l mh2-l pa1'><Link activeClassName='brand bb bw1' className='link black ph2-l pv2-l hover-brand' to='/projects'>Projects</Link></li>
        <li className='dib-l mh2-l pa1'><Link activeClassName='brand bb bw1' className='link black ph2-l pv2-l hover-brand' to='/people'>People</Link></li>
        <li className='dib-l ml2-l pa1'><Link activeClassName='brand bb bw1' className='link black ph2-l pv2-l hover-brand' to='/careers'>Join us</Link></li>
      </ul>
    </div>
  </header>
)

export default Header