import React from "react"
import Helmet from "react-helmet"
import Layout from "../layouts"
import Member from "../components/Member"
import page from "../content/alumni.json"

export default () => {
  const gridGap = "1rem"
  const gridWidth = "160px"
  return (
    <Layout>
      <div className="mw-mavenhive center ph3 mt5 mb4 pt3">
        <Helmet title={`${page.title} | MavenHive`} />
        <h1 className="f2 lh-title mb5">{page.heading}</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${gridWidth}, 1fr))`,
            gridGap: gridGap
          }}
        >
          {page.alumni.map((member, i) => {
            const person = member.member
            return (
              <Member
                name={person.name}
                role={person.role}
                avatar={person.avatar}
                twitter={person.twitter}
                linkedin={person.linkedin}
                blurb={person.blurb}
                key={`alumni-${i}`}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
