// import React from "react";
// import { requestAllListings } from "../../actions/listing_actions";
// import {connect} from 'react-redux';
// import { withRouter } from "react-router-dom";


// class MapFilter extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = { center: { lat: 40.7127753, lng: -74.0059728 }}
//     }

//     componentDidMount() {
//         const mapOptions = {
//             center: this.state.center, 
//             zoom: 11
//         };

//         this.map = new google.maps.Map(this.mapNode, mapOptions)

//         const request = {
//             query: this.props.match.params.id, 
//             fields: ['name', 'geometry'],
//         };

//         let result = {}

//         const service = new google.maps.places.PlacesService(this.map); 

//         service.findPlaceFromQuery(request, (results, status) => {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//                 result = (results[0].geometry.location)
//                 this.setState({center: result.toJSON()})
//             }
//         });
//         google.maps.event.addListener(this.map, 'idle', () => {
//             const bounds = this.map.getBounds().toJSON();
//             this.props.requestAllListings({ bounds: bounds })
//         })
//     }

//     render () {
//         return (
//             <div className="map-container">
//                 <div id="map" className="map" ref={map => this.mapNode = map}></div>
//             </div>
//         )
//     }

// }

// const mapDispatchToProps = (dispatch) => ({
//     requestAllListings: (bounds) => dispatch(requestAllListings(bounds))
// })


// export default withRouter(connect(null, mapDispatchToProps)(MapFilter))