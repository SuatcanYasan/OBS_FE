import PropTypes from 'prop-types'
import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb

const LoadingContainer = () => <div>Loading...</div>

const MapsGoogle = props => {
  const { areaDetail } = props
  console.log("areaDetail", areaDetail)

  //meta title
  document.title = "Google Maps | Skote - React Admin & Dashboard Template";

  const selectedPlace = {}

  function onMarkerClick() {
    alert("You clicked in this marker")
  }

  return (
    <React.Fragment>
      <div
        id="gmaps-markers"
        className="gmaps"
        style={{ position: "relative" }}
      >
        <Map
          google={props.google}
          zoom={10}
          initialCenter={{
            lat: areaDetail.lat,
            lng: areaDetail.lng
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <InfoWindow>
            <div>
              <h1>{selectedPlace.name}</h1>

            </div>
          </InfoWindow>
        </Map>
      </div>
    </React.Fragment>
  )
}

MapsGoogle.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDJoLS2ks9mQZrR2tCG7emKVA9sJmYvzxw",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapsGoogle)
)
