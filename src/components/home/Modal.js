import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {

  handleResponse = () => {
    if(this.props.insured === "Yes" && this.props.ageRange < 2) {return "Coming soon!"}
    if(this.props.insured === "Yes" && this.props.ageRange >= 2) {return "Yes, we have great rates available!"}
    if(this.props.insured !== "Yes" || this.props.ageRange === "Your Age Range") {return "Sorry, no rates available"}
  }

  render() {
    return(
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={this.props.handleHide}>&times;</span>
          <h3>{this.handleResponse()}</h3>
        </div>
      </div>
    )
  }
}

export default Modal
