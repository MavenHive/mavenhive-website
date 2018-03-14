import React from 'react'
import Link from 'gatsby-link'
import Clients from '../components/Clients'

import Illustration from '../images/Bulb_illustration.png'

const IndexPage = () => (
  <div>
    <section className="mw-mavenhive center ph4 pv3 pt4-l mt3-l flex-l items-center justify-between tc tl-l">
      <img className="order-1" src={ Illustration } alt="" />
      <div>
        <h1 className="f2 normal">Trusted companion for your product journey</h1>
        <p className="measure measure-wide-l lh-copy f4 mb4 mb5-l">We combine our software and product craftsmanship with our client’s disruptive ideas to achieve business goals with high ROI.</p>
        <p><a href="#" className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand">See what we have built</a></p>
      </div>
    </section>
    <section className="bg-mh-gray ph4 pv3 pv5-l tc-l">
      <div className="mw-mavenhive center">
        <h1 className="f3 mb4 pb4-l normal">We are a team of imaginators helping business at all stages of growth</h1>
        <div className="flex-l justify-between">
          <div className="mv4 w-third-l ph3-l pl5-l pr4-l">
            <h3 className="">MVP</h3>
            <p className="lh-copy ph4-l">We form tech partnerships with our clients to validate idea. We help build MVPs from scratch, complete with end-to end product design, development, deployment and scaling.</p>
          </div>
          <div className="mv4 w-third-l ph3-l ph4-l">
            <h3 className="">Re-Architecture</h3>
            <p className="lh-copy ph4-l">Growing fast but the tech lacks? Product needs bracing for rapid user influx? We rebuild product designed to sustain long term growth.</p>
          </div>
          <div className="mv4 w-third-l ph3-l pl4-l pr5-l">
            <h3 className="">Establishment and Stability</h3>
            <p className="lh-copy ph4-l">That’s not all though, we also provide you with agile process consulting, onsite coaching and technical training relevant to your team’s needs.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mw-mavenhive center ph4 pv3 pv4-ns tc">
      <div className="flex-l justify-center mb4">
        <div className="w-feature-l">
          <h2 className="f3 pb3 brand">Technology that help you build.</h2>
          <img className="w4 h4" src="./assets/wedding-couple.svg" alt="" />
          <h3 className="f-1 brand ttu">Tech Partnership</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy">
            <li className="mv2">Core Product or Project delivery</li>
            <li className="mv2">Build MVP</li>
            <li className="mv2">Inception and Project planning</li>
            <li className="mv2">End-to-end Product Design</li>
            <li className="mv2">Development, Deployment and Scaling</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <h2 className="f3 pb3 brand">Training to help you grow.</h2>
          <img className="w4 h4" src="./assets/monitor-window.svg" alt="" />
          <h3 className="f-1 brand ttu">Enablement</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy">
            <li className="mv2">Agile process consulting</li>
            <li className="mv2">Training Developers</li>
            <li className="mv2">Technical Training </li>
            <li className="mv2">Onsite Coaching</li>
          </ul>
        </div>
        <div className="w-feature-l">
          <h2 className="f3 pb3 brand">Expertise to help you scale.</h2>
          <img className="w4 h4" src="./assets/netherlands-windmill.svg" alt="" />
          <h3 className="f-1 brand ttu">Innovation</h3>
          <ul className="list center mw-100-l pa0 f5 lh-copy">
            <li className="mv2">Design Thinking</li>
            <li className="mv2">Rapid prototyping</li>
            <li className="mv2">New technology research and migration</li>
            <li className="mv2">Experimentation with business models, products and features</li>
          </ul>
        </div>
      </div>
      <p className="">
        <a href="#" className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand">See all our services</a>
      </p>
    </section>

    <section className="bg-mh-gray pa4 tc">
      <div className="mw-mavenhive center flex flex-wrap justify-center pv3 mb4">
        <div className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box">
          <h2 className="f2 normal ma2">5+</h2>
          <p className="lh-copy">Years in Business</p>
        </div>
        <div className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box">
          <h2 className="f2 normal ma2">8x</h2>
          <p className="lh-copy">Growth being bootstrapped</p>
        </div>
        <div className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box">
          <h2 className="f2 normal ma2">50+</h2>
          <p className="lh-copy">Projects</p>
        </div>
        <div className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box">
          <h2 className="f2 normal ma2">2</h2>
          <p className="lh-copy">Unicorn Clients</p>
        </div>
        <div className="w4 h4 bg-white br-100 pa3 ma3 ma4-ns content-box">
          <h2 className="f2 normal ma2">9</h2>
          <p className="lh-copy">Training Bootcamps</p>
        </div>
      </div>
      <Clients />
    </section>

    <div className="mw-mavenhive center">
      <section className="mv4 pv3">
        <ul className="list ma0 pa0 tc flex-l justify-center">
          <li className="dib mw6 ph4">
            <section>
              <h4 className="f5 lh-title">EVP Strategic Partnerships, Ashoka</h4>
              <h5 className="f5 normal">Alan Landis</h5>
              <p className="lh-copy">I have enjoyed working closely with the MavenHive team across the past year building our online community platform. They have been incredibly responsive to our requests and helped us design and build a truly high-quality site. They are among the most flexible and creative technology consultants that I have ever had the pleasure to call a partner.</p>
            </section>
          </li>
          <li className="dib mw6 ph4">
            <section>
              <h4 className="f5 lh-title">Principal Architect, Flipkart</h4>
              <h5 className="f5 normal">Yogi Kulkarni</h5>
              <p className="lh-copy">Bhavin and Ananda were involved as consultants in re-building some of the Supply Chain services at Flipkart. They bring deep technical expertise, strong software engineering skills and a high degree of ownership. Would recommend them highly.</p>
            </section>
          </li>
          <li className="dib mw6 ph4">
            <section>
              <h4 className="f5 lh-title">Principal Architect, Flipkart</h4>
              <h5 className="f5 normal">Yogi Kulkarni</h5>
              <p className="lh-copy">Bhavin and Ananda were involved as consultants in re-building some of the Supply Chain services at Flipkart. They bring deep technical expertise, strong software engineering skills and a high degree of ownership. Would recommend them highly.</p>
            </section>
          </li>
        </ul>
      </section>
    </div>

    <section className="pv4-ns bg-purple white tc">
      <div className="mw8 center ph4 pv3 ph5-l">
        <h3 className="ttu mb4 f4 lh-title">We’d like to work with you</h3>
        <div className="lh-copy f-1 mb4 mb5-l">
          <p>We refuse to conform to obsolete ways of the past and believe in the idea that even a simple atypical opinion reserves the power to catapult a business idea into a transformative force for the future.</p>
          <p>“Consistent delivery with high quality, constant evolution, and superior productivity are the only true measures of success.”<br />
          This philosophy is hard coded into our work ethic. With these goals in our sights, we deliver bespoke software - moulded with care, fabricated to revolutionize and designed to satisfy.</p>
        </div>
        <p><a href="#" className="dib link f-1 pv1 ph4 ba b--transparent br2 fw5 tc w-100 w-auto-ns white bg-brand">Start a project with us</a></p>
      </div>
    </section>
  </div>
)

export default IndexPage
