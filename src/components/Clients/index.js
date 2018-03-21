import React from 'react'

import client_ashoka from '../../images/client_ashoka.png'
import client_barkloudly from '../../images/client_barkloudly.png'
import client_flipkart from '../../images/client_flipkart.png'
import client_gojek from '../../images/client_Gojek.png'
import client_housing from '../../images/client_housing.png'
import client_scripbox from '../../images/client_scripbox.png'
import client_thearc from '../../images/client_thearc.png'
import client_thoughtworks from '../../images/client_thoughtworks.png'
import client_zinc from '../../images/client_zinc.png'
import client_grasshopper from '../../images/client_grasshopper.png'
import client_synup from '../../images/client_synup.png'
import client_pg from '../../images/client_PG.png'

const Clients = () => (
  <div className='mw-mavenhive center'>
    <p className="f3">… and worked with over 20 clients globally…</p>
    <div className="flex items-center justify-center flex-wrap">
      <img className="mh3 mv2" src={client_gojek} alt="Gojek" />
      <img className="mh3 mv2" src={client_thoughtworks} alt="ThoughtWorks" />
      <img className="mh3 mv2" src={client_scripbox} alt="scripbox" />
      <img className="mh3 mv2" src={client_grasshopper} alt="grasshopper" />
      <img className="mh3 mv2" src={client_housing} alt="housing" />
      <img className="mh3 mv2" src={client_flipkart} alt="flipkart" />
      <img className="mh3 mv2" src={client_zinc} alt="zinc" />
      <img className="mh3 mv2" src={client_barkloudly} alt="barklougly" />
      <img className='mh3 mv2' src={client_pg} alt='PropertyGuru' />
      <img className="mh3 mv2" src={client_thearc} alt="the arc" />
      <img className="mh3 mv2" src={client_synup} alt="synup" />
      <img className="mh3 mv2" src={client_ashoka} alt="ashoka" />
    </div>
  </div>
)

export default Clients