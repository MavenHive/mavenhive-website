import React, { Component } from "react"
import { Link } from "gatsby"

import Logo from "../../images/MavenHive-logo_red.svg"
import Menu from "../../icons/icon-menu.svg"

class HeaderLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }

  showMenu() {
    this.setState({
      showMenu: true
    })
  }

  hideMenu(e) {
    if (
      this.state.showMenu &&
      (e.target.id !== "menu-button" &&
        e.target.parentNode.id !== "menu-button")
    ) {
      this.setState({
        showMenu: false
      })
    }
  }

  componentDidMount() {
    window.document.addEventListener("click", this.hideMenu, false)
  }

  componentWillUnmount() {
    window.document.removeEventListener("click", this.hideMenu, false)
  }

  render() {
    const children = this.props.children
    return (
      <div className="dt relative">
        <button
          className="dtc bw0 bg-transparent pa0 dn-l v-top w2 h2"
          id="menu-button"
          onClick={this.showMenu}
        >
          <img className="db" src={Menu} alt="menu" />
        </button>
        <div
          className={`${
            this.state.showMenu ? "db" : "dn"
          } dn-l absolute relative-l top--1 top-0-l right-0 pa3 ba b--moon-gray bw0-l br2 z-1 bg-white tr tl-l`}
        >
          <button className="f3 bw0 bg-white pa0 ma0 lh-solid mid-gray">
            &times;
          </button>
          <ul className="list ma0 pt3-l f5 tracked-mh">{children}</ul>
        </div>
        <ul className="dn db-l list ma0 pa0 pt3 f5 tracked-mh">{children}</ul>
      </div>
    )
  }
}

const HeaderLink = ({ to, label }) => (
  <li className="dib-l mv2 mv0l mh2-l pa1">
    <Link
      activeClassName="brand bb bw1"
      className="link black ph1-l pv2-l hover-brand"
      to={to}
    >
      {label}
    </Link>
  </li>
)

const Header = () => (
  <header className="h3-l pv3 pv2-l content-box">
    <div className="mw-mavenhive center ph3 ph4-l flex items-end items-center-l justify-between h-100">
      <Link className="db" to="/">
        <img className="h2" src={Logo} alt="mavenhive logo" />
      </Link>
      <HeaderLinks>
        <HeaderLink to="/services" label="Services" />
        <HeaderLink to="/portfolio" label="Portfolio" />
        <HeaderLink to="/people" label="People" />
        <HeaderLink to="/careers" label="Join us" />
      </HeaderLinks>
    </div>
  </header>
)

export default Header
