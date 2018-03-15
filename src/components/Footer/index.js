import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../images/MavenHive-logo_black.svg'
import FacebookIcon from '../../icons/facebook.svg'
import TwitterIcon from '../../icons/twitter.svg'
import LinkedinIcon from '../../icons/linkedin.svg'
import GithubIcon from '../../icons/github.svg'
import YoutubeIcon from '../../icons/youtube.svg'

const Footer = () => {
  // Can manage footer links here
  return (
    <footer className='h3-l pv2 ph4 content-box'>
      <div className='mw-mavenhive center flex-l items-center justify-between h-100 tc tl-l'>
        <a className='dib link ma2 mr4-l' href='/'><img src={Logo} alt='mavenhive logo' /></a>
        <ul className='list ma2 mv3 pa0 f6 mr-auto'>
          {/* <li className='dib mh1'><Link className='dib pa2 link silver' href='#'>Alumni</Link></li> */}
          <li className='dib mh1'><a className='dib pa2 link silver' href='https://blog.mavenhive.in/'>Blog</a></li>
          <li className='dib mh1'><Link className='dib pa2 link silver' to='/updates'>Updates</Link></li>
          <li className='dib mh1'><Link className='dib pa2 link silver' href='/contact'>Start a Project with Us</Link></li>
        </ul>
        <ul className='list ma2 pa0'>
          <li className='dib mr1'><a className='dib link' href='https://www.facebook.com/mavenhive' target='_blank'><img className='w2' src={FacebookIcon} alt='link to mavenhive facebook page' /></a></li>
          <li className='dib mh1'><a className='dib link' href='https://twitter.com/Mavenhive' target='_blank'><img className='w2' src={TwitterIcon} alt='link to mavenhive twitter profile' /></a></li>
          <li className='dib mh1'><a className='dib link' href='https://www.linkedin.com/company/mavenhive-technologies-pvt-ltd/' target='_blank'><img className='w2' src={LinkedinIcon} alt='link to mavenhive LinkedIn profile' /></a></li>
          <li className='dib mh1'><a className='dib link' href='https://github.com/mavenhive' target='_blank'><img className='w2' src={GithubIcon} alt='link to mavenhive Github profile' /></a></li>
          <li className='dib ml1'><a className='dib link' href='https://www.youtube.com/channel/UCqdjB9e5zXnMA6CgVt-pp8Q/featured' target='_blank'><img className='w2' src={YoutubeIcon} alt='link to mavenhive YouTube channel' /></a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
