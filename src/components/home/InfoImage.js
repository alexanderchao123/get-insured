import React, { Component } from 'react'
import cars from '../../assets/images/cars.jpg'
import './infoimage.css'

class InfoImage extends Component {
  render() {
    return(
      <img src={cars} alt="cars" className="img-responsive center-block" id="car-image"/>
    )
  }
}

export default InfoImage
