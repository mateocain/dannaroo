import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={{
          width: "30vw",
          height: "30vw",
        }}
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 41.640744,
          lng: -80.490845,
        }}
      >
        <Marker name={"Current location"} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfokmPC86JHHQIeSwSlyiiND0F16Enf7Y",
})(MapContainer)
