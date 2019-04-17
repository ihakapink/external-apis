import React from 'react'
import { getSatellites, getSatelliteInfo } from '../APIs/space';

export class Space extends React.Component {
  state = {
    name: '',
    id: ''
  }
  
  componentDidMount () {
    getSatelliteInfo()
    .then(satellite => {
      this.setState({
        name: satellite.name,
        id: satellite.id,
        lat: satellite.latitude,
        lng: satellite.longitude,
      })
    })
  }

  render () {
    return (
      <>
        <h1>{this.state.name}</h1>
        <p>Position: {this.state.lat}, {this.state.lng}</p><br />
      </>
    )
  }
}
