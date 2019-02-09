import React from "react"

export default ({ name, role, avatar }) => (
  <div className="w-100">
    <div
      className="aspect-ratio aspect-ratio--1x1 cover overflow-hidden"
      style={{ backgroundImage: `url(${encodeURIComponent(avatar)})` }}
    >
      <div className="aspect-ratio-object">
        <img
          className="w-100 o-0"
          src={encodeURIComponent(avatar)}
          alt={name}
        />
      </div>
    </div>
    <div className="">
      <h2 className="f6 mb1">{name}</h2>
      <p className="lh-copy f6 mv0">{role}</p>
    </div>
  </div>
)
