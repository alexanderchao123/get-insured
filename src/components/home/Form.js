import React, { Component, Fragment } from 'react'
import Modal from './Modal'
import './form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: '',
      insured: 'Currently Insured?',
      ageRange: 'Your Age Range',
      showModal: false,
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({showModal: true})
  }

  handleHide = () => {
    this.setState({showModal: false})
  }

  render() {
    console.log(this.state)
    return(
      <Fragment>
        <form id="form-container" onSubmit={this.handleSubmit}>
          <h3 className="form-elements" id="form-title">Cheap Auto Coverage</h3>
          <p id="form-sub-title">Complete just <strong>3 simple steps</strong> to get quotes from top providers in your area.</p>
          <div className="form-group form-elements">
            <input
              type="text"
              className="form-control form-elements-height"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
              id="zipcode"
              placeholder="Zip Code"
            />
          </div>
          <div className="form-group form-elements">
            <select className="form-control form-elements-height" name="insured" value={this.state.insured} onChange={this.handleChange} placeholder="fhdjsfjk">
              <option value="Currently Insured?" disabled>Currently Insured?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group form-check form-elements">
            <select className="form-control form-elements-height" name="ageRange" value={this.state.ageRange} onChange={this.handleChange}>
              <option value="Your Age Range" disabled>Your Age Range</option>
              <option value="0">Under 25</option>
              <option value="1">25 to 34</option>
              <option value="2">35 to 44</option>
              <option value="3">45 to 55</option>
              <option value="4">Over 55</option>
            </select>
          </div>
          <div className="form-group form-check form-elements" id="lower-rate-btn-container">
            <button type="submit" className="btn btn-attributes form-elements-height" id="lower-rate-btn">Find Lower Rates</button>
          </div>
          <div className="form-group form-check form-elements" id="call-btn-container">
            <button type="button" className="btn btn-attributes form-elements-height" id="call-btn"><span className="glyphicon glyphicon-earphone glyphicon-earphone-ext"></span>Talk to a Live Agent</button>
          </div>
          <div id="form-details-container">
            <p>Your Information is safe and secure.</p>
          </div>
        </form>
        {this.state.showModal ? (<Modal zipCode={this.state.zipCode} insured={this.state.insured} ageRange={this.state.ageRange} handleHide={this.handleHide}/>) : (<div/>)}
      </Fragment>
    )
  }
}

export default Form
