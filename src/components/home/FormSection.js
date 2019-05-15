import React, { Component } from 'react'
import Headline from './Headline'
import Form from './Form'
import './formsection.css'

class FormSection extends Component {
  render() {
    return(
      <div className="container-fluid" id="form-section">
        <div className="row align-items-center" id="form-section-row">
          <div className="col-xs-12 col-md-5 col-md-offset-2">
            <Headline/>
          </div>
          <div className="col-xs-12 col-md-5">
            <Form/>
          </div>
        </div>
      </div>
    )
  }
}

export default FormSection
