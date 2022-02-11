import React from "react";
import MapListingIndexItem from './map_listing_index_item';
import MarkerManager from "./marker_manager";

class MapListingIndex extends React.Component {

    constructor(props) {
        super(props)
        // this.state = ({ center: { lat: 40.7127753, lng: -74.0059728 }})
        this.handleMarkerClick = this.handleMarkerClick.bind(this); 
        // this.addEventListeners = this.addEventListeners.bind(this)
    }

    componentDidMount() {
        const mapOptions = {
            center: null,
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions)

        const request = {
            query: this.props.match.params.id,
            fields: ['name', 'geometry'],
        };
        
        const service = new google.maps.places.PlacesService(this.map);

        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const result = (results[0].geometry.location)
                // this.setState({ center: result.toJSON() })
                this.map.setCenter(result.toJSON()); 
                const bounds = this.map.getBounds().toJSON();
                const guests = this.props.match.params.guests; 
                // debugger 
                if (guests > 0) {
                    // debugger 
                    this.props.requestAllListings( {bounds: bounds, guests: guests});
                }
                else {
                    // debugger 
                    this.props.requestAllListings({ bounds: bounds })
                }

                google.maps.event.addListener(this.map, 'idle', () => {
                    const bounds = this.map.getBounds().toJSON();
                    if (guests > 0 ) {
                        this.props.requestAllListings({ bounds: bounds, guests: guests })
                    }
                    else {
                        this.props.requestAllListings({ bounds: bounds })
                    }
                })

                if (this.map) {
                    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick)
                }

                if (this.props.listings.length > 0) {
                    this.MarkerManager.updateMarkers(this.props.listings)
                }
            }
        });
    }

    // addEventListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const bounds = this.map.getBounds().toJSON();
    //         this.props.requestAllListings({ bounds: bounds })
    //     })

    //     if (this.map) {
    //         this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick)
    //     }

    //     if (this.props.listings.length > 0) {
    //         this.MarkerManager.updateMarkers(this.props.listings)
    //     }
    // }

    componentDidUpdate() {
        if (this.props.listings.length > 0) {
            this.MarkerManager.updateMarkers(this.props.listings)
        }
    }


    handleMarkerClick(listing) {
        this.props.history.push(`/listings/${listing.id}`)
    }


    render() {
        if (!this.props.listings) {
            return null 
        }
        return (
            <div className="map-index" >
                <div className="map-listing-index">
                    <ul>{this.props.listings.map(listing => (
                        <MapListingIndexItem listing={listing} key={listing.id}/>
                    ))}</ul>
                </div>
                <div className="listing-index-map-container">
                    <div id="map" className="listing-index-map" ref={map => this.mapNode = map}></div>
                </div>
            </div>
        )
    }

}


export default MapListingIndex; 