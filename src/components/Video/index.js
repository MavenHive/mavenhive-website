import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class Video extends Component {
  constructor(props) {
    super(props)
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
    const { url, children } = this.props
    return (
      <a
        href={url}
        onClick={e => {
          e.preventDefault()
          this.handleOpenModal()
        }}
        className="link black"
      >
        {children}
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
            src={`${url}?autoplay=1`}
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
      </a>
    )
  }
}
