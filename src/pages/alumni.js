import React, { useState } from "react";
import Helmet from "react-helmet";
import Layout from "../layouts";
import Member from "../components/Member";

import TwitterIcon from "../icons/twitter-profile.svg";
import LinkedinIcon from "../icons/linkedin-profile.svg";

import alumni from "../content/alumni";
import marked from "marked";
import {Link} from "gatsby";

const gridGap = "1rem";
const gridWidth = "160px";

export default () => {
  const [state, setState] = useState({
    top: 0,
    person: null,
    showDetail: false
  });
  return (
    <Layout>
      <Helmet title={`${alumni.title} | MavenHive`} />
      <div
        className="bg-people cover bg-center relative h-alumni pb5 content-box"
        style={{
          backgroundImage: `url(${alumni.cover})`
        }}
      >
        <div className="mw-mavenhive center ph3 mv5 pt3 h5">
          <h1 className="f2 normal alumni-mh-narrow">{alumni.heading}</h1>
        </div>
      </div>

      <div className="mw-mavenhive center mv3 pa3">
        <div
          id="team"
          className="relative center"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center"
          }}
        >
          {alumni.alumni.map((member, i) => {
            const person = member.member
            return person ? (
              <a
                key={`person-${i}`}
                className="glow o-60 pointer w-alumni-card"
                name={person.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")}
                onClick={e => {
                  const main = document.querySelector("#team")
                  const { y, height } = e.currentTarget.getBoundingClientRect()
                  if (state.showDetail && state.person.id === i)
                    setState({ showDetail: false })
                  else
                    setState({
                      top: y + height - main.getBoundingClientRect().y,
                      person: { ...person, ...{ id: i } },
                      showDetail: true
                    })
                }}
              >
                <Member
                  name={person.name}
                  role={person.role}
                  avatar={person.avatar}
                />
              </a>
            ) : null
          })}
          {state.showDetail && (
            <div
              className="absolute bg-white ba b--moon-gray br2 shadow-5 pa3 w-100 left-0"
              style={{
                top: state.top,
                animation: "slidein 200ms ease-in forwards"
              }}
            >
              <article>
                <h3 className="mt1 f5">{state.person.name}</h3>
                {state.person.blurb && (
                  <p className="lh-copy f6 mw8">{state.person.blurb}</p>
                )}
                <div className="absolute top-1 right-1">
                  {state.person.twitter && (
                    <a
                      className="mh2"
                      href={state.person.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="20"
                        src={TwitterIcon}
                        title={`view Twitter profile of ${state.person.name}`}
                        alt={state.person.twitter}
                      />
                    </a>
                  )}
                  {state.person.linkedin && (
                    <a
                      className="mh2"
                      href={state.person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="20"
                        src={LinkedinIcon}
                        title={`view LinkedIn profile of ${state.person.name}`}
                        alt={state.person.linkedin}
                      />
                    </a>
                  )}
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
      <section className="pv4-ns bg-brand white tc">
        <div className="mw-mavenhive center pa3 ph5-l cta">
          <h3 className="mb3 f4 lh-title">{alumni.cta.heading}</h3>
          <div
            className="lh-copy f-1 mb4 pb2 ph5-l"
            dangerouslySetInnerHTML={{ __html: marked(alumni.cta.content) }}
          />
        </div>
      </section>
    </Layout>
  )
}
