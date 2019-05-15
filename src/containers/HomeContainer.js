import React, { Component } from 'react';
import FormSection from '../components/home/FormSection'
import InfoSection from '../components/home/InfoSection'
import './homecontainer.css'

class HomeContainer extends Component {
  render() {
    return(
      <div className="home-container">
        <FormSection/>
        <InfoSection/>
      </div>
    )
  }
}

export default HomeContainer
