import React from 'react'
import { methodHere } from '../api/googleMaps'

export default class GoogleMaps extends React.Component {
  state = { 
    mapProp: {
      zoom: '',
      lat: '',
      lng: '',
      center: ''
    }
  }

  setNovaScotia () {
    this.setState ({
      zoom: 7,
      lat: 44.697189,
      lng: -63.677902,
      center: new google.maps.LatLng(44.697189,-63.677902)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hey Google</h1>
        <div id="googleMap" style="width:100%;height:400px;"></div>
        {let map = this.state.center}
        {
        //var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        //</script></script>}
        }
      <React.Fragment/>
    )
  }
}
