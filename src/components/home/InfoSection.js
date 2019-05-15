import React, { Component } from 'react'
import Info from './Info'
import InfoImage from './InfoImage'
import './infosection.css'

class InfoSection extends Component {
  render() {
    return(
      <div className="container-fluid" id="info-section">
        <div className="row align-items-center" id="info-section-row">
          <div className="col-xs-12 col-md-3 col-md-offset-2">
            <Info/>
          </div>
          <div className="col-xs-12 col-md-3 col-md-offset-1">
            <InfoImage/>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoSection
