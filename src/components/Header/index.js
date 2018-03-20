import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../images/MavenHive-logo_red.svg'

const HeaderLinks = ({children}) => (
  <ul className='list ma0 ph0 pt3 f5 tr tl-l tracked-mh'>
    {children}
  </ul>
)
const HeaderLink = ({to, label}) => (
  <li className='dib-l mh2-l pa1'><Link activeClassName='brand bb bw1' className='link black ph1-l pv2-l hover-brand' to={to}>{label}</Link></li>
)

const Header = () => (
  <header className='h3-l pv4 pv2-l content-box'>
    <div className='mw-mavenhive center ph4 flex items-center-l justify-between h-100'>
      <Link className='db' to='/'><img className='h2' src={Logo} alt='mavenhive logo' /></Link>
      <HeaderLinks>
        <HeaderLink to='/services' label='Services' />
        <HeaderLink to='/projects' label='Projects' />
        <HeaderLink to='/people' label='People' />
        <HeaderLink to='/careers' label='Join us' />
      </HeaderLinks>
    </div>
  </header>
)

export default Header