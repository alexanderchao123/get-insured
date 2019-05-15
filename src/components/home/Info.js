import React, { Component } from 'react'
import './info.css'

class Info extends Component {
  render() {
    return(
      <div id="info-container">
        <div id="info-title">We provide free quotes from top providers in your area in less time.</div>
        <ul id="benefits-container">
          <li className="benefits" ><span className="glyphicon glyphicon-ok glyphicon-ok-ext"></span>Save time researching policies.</li>
          <li className="benefits"><span className="glyphicon glyphicon-ok glyphicon-ok-ext"></span>Get a fast response with no waiting.</li>
          <li className="benefits"><span className="glyphicon glyphicon-ok glyphicon-ok-ext"></span>Compare low-cost policies.</li>
          <li className="benefits"><span className="glyphicon glyphicon-ok glyphicon-ok-ext"></span>Save up to 30% on auto insurance.</li>
        </ul>
      </div>
    )
  }
}

export default Info
