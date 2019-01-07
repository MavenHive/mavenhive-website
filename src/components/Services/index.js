import React, { Component } from 'react'
import IconTechnology from '../../icons/icon_technology.svg'
import IconGrowth from '../../icons/icon_growth.svg'
import IconInnovation from '../../icons/icon_innovation.svg'

class Services extends Component {
  render() {
    return (
      <div className="flex-l justify-center mb4">
        <div className="w-third-l">
          <p className="dn-l f-2 pb3 brand ma2 b">
            Expertise to help you scale.
          </p>
          <div
              className="w3 h3 content-box pa2 center contain bg-center"
              style={{ backgroundImage: `url(${IconInnovation})` }}
              alt=""
          />
          <h3 className="f-1 brand ttu">Innovation</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Design Thinking</li>
            <li className="mv2">Rapid prototyping</li>
            <li className="mv2">New technology Research & Migration</li>
            <li className="mv2">
              Business Model, Product & Features Experimentation
            </li>
          </ul>
        </div>
        <div className="w-third-l mb5">
          <p className="dn-l f-2 pb3 brand ma2 b">Training to help you grow.</p>
          <div
            className="w3 h3 content-box pa2 center contain bg-center"
            style={{ backgroundImage: `url(${IconTechnology})` }}
            alt=""
          />
          <h3 className="f-1 brand ttu">Tech Partnership</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Core Product & Project Delivery</li>
            <li className="mv2">MVP Implementation</li>
            <li className="mv2">Inception and Project Planning</li>
            <li className="mv2">End-to-end Product Design</li>
            <li className="mv2">Development, Deployment & Scaling</li>
          </ul>
        </div>
        <div className="w-third-l mb5">
          <p className="dn-l f-2 pb3 brand ma2 b">
            Technology that help you build.
          </p>
          <div
            className="w3 h3 content-box pa2 center contain bg-center"
            style={{ backgroundImage: `url(${IconGrowth})` }}
            alt=""
          />
          <h3 className="f-1 brand ttu">Enablement</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy mh-gray tracked-mh">
            <li className="mv2">Agile Process Consulting</li>
            <li className="mv2">Developer Training</li>
            <li className="mv2">Technical Mentoring </li>
            <li className="mv2">Onsite Coaching</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Services
