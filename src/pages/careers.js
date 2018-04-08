import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactModal from 'react-modal'

import videoImage from '../images/image_pitchvideo.png'
import hiringIcon from '../icons/line.svg'

class NotFoundPage extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div className="ph4 center mt2 pt3">
        <Helmet title="Join us | MavenHive" />
        <div className="mw-mavenhive center bg-mh-gray pt4 tc mb3">
          <h1 className="f2 lh-title mv5">
            “We are constantly looking for ways to improve our{' '}
            <a
              className="link black hiring-link"
              href="https://blog.mavenhive.in/"
              style={{ backgroundImage: `url(${hiringIcon})` }}
            >
              hiring process
            </a>”
          </h1>
          <a
            className="link dib"
            href="https://www.youtube.com/embed/PBdHucJeqpQ?autoplay=1"
            onClick={e => {
              e.preventDefault()
              this.handleOpenModal()
            }}
          >
            <img src={videoImage} />
          </a>
        </div>
        <div className="mw-mavenhive center ph4 tc pt2 mb5 pb3">
          <h2 className="mh-gray mb4">
            Our current interview process for hiring Polyglot Developers
          </h2>
          <p className="f4 flex justify-around ph4">
            <span>Offline Coding Assignment</span> <span>→</span>{' '}
            <span>In office Code Pairing</span> <span>→</span>{' '}
            <span>Tech Interviews</span> <span>→</span>{' '}
            <span>HR Interview and Offer</span>
          </p>
        </div>
        <div className="mw-mavenhive center ph4">
          <h2 className="ttu tc mh-gray fw5 lh-title">
            We are currently looking for…
          </h2>
          <div className="flex mb5">
            <div className="tc ph4 w-third">
              <h3 className="f4">Polyglot Developers (Senior)</h3>
              <p className="f4 lh-mh-1">
                Are you hands on with coding and have a proven track record of
                building, mentoring and managing teams ?
              </p>
              <p>
                <a className="f4 link mh-blue">Learn more and Apply…</a>
              </p>
            </div>
            <div className="tc ph4 w-third">
              <h3 className="f4">Polyglot Developers (Junior)</h3>
              <p className="f4 lh-mh-1">
                Do you have passion for programming and are hands on in working
                in highly productive teams ?
              </p>
              <p>
                <a className="f4 link mh-blue">Learn more and Apply…</a>
              </p>
            </div>
            <div className="tc ph4 w-third">
              <h3 className="f4">DevOps (Senior)</h3>
              <p className="f4 lh-mh-1">
                Do you love to build and scale systems for high growth products
                ?
              </p>
              <p>
                <a className="f4 link mh-blue">Learn more and Apply…</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mw-mavenhive center">
          <div className="bg-light-gray pv4 flex items-center">
            <p className="tc lh-mh f-1 mw8 center">
              If you dont see above openings fit for you but resonate with our
              culture and want to join us , we would love to hear from you. Send
              email to{' '}
              <a className="link mh-blue" href="mailto:careers@mavenhive.com">
                careers@mavenhive.com
              </a>
            </p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124426.04037102869!2d77.6220398!3d12.9517635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14465869ac6d%3A0xb1efc804f5936b3f!2sMavenHive+Technologies+Pvt+Ltd.!5e0!3m2!1sen!2sin!4v1523080830065"
              className="w-100 vh-50"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="bg-black absolute top-2 right-2 bottom-2 left-2"
          overlayClassName="fixed min-vh-100 w-100 bg-black-60 top-0 glow"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PBdHucJeqpQ?autoplay=1"
            frameBorder="0"
            allowFullScreen
          />
          <button
            className="f3 w2 h2 absolute right--1 top--1 br-100 bg-brand white bw0 pointer"
            onClick={this.handleCloseModal}
          >
            &times;
          </button>
        </ReactModal>
      </div>
    )
  }
}

export default NotFoundPage
