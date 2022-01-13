import React from 'react';
import { Link } from 'react-router-dom';

class LocationType extends React.Component {

    constructor(props) {
        super(props);
        this.state = { location: '', center: { lat: 41.850033, lng: -87.6500523 }, zoom: 5 }
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        // this.moveToLocation = this.moveToLocation.bind(this); 
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
            componentRestrictions: {'country': ['US']}, 
            fields: ['place_id', 'geometry', 'name', 'address_components']
        })
        const autocomplete = this.autocomplete; 
        autocomplete.addListener('place_changed', this.onPlaceChanged)
        const mapOptions = {
            center: this.state.center, 
            zoom: this.state.zoom
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    };

    onPlaceChanged() {
        const place = this.autocomplete.getPlace(); 
        if(!place.geometry) {
            document.getElementById('autocomplete').placeholder = "Enter your address"
        }
        else {  
            const lat = place.geometry.location.lat(); 
            const lng = place.geometry.location.lng(); 
            this.setState({center: {lat:lat, lng: lng}, zoom: 15});
            this.map.setCenter(this.state.center); 
            this.map.setZoom(this.state.zoom)

            new google.maps.Marker({position: this.state.center, map: this.map})
            const address = { address: `${place.address_components[0].short_name} ${place.address_components[1].short_name}`, city: place.address_components[3].long_name, state: place.address_components[5].short_name, country: place.address_components[6].short_name, zipCode: place.address_components[7].short_name, lat: lat, lng: lng}
            this.setState({location: address}) 
            this.props.receiveLocation(this.state.location)
        }
    }

    render() {
       
        return (
            <div>
                <div className="location-type-listing">
                    <div className="question" id="location-question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">Where's your place located?</p>
                    </div>
                    <div className="location-input">
                        <div className="map" ref={map => this.mapNode = map}></div>
                        <div className="address-input">
                          <input id="autocomplete" placeholder='Enter your address' type="text"/>  
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={this.props.place ? `/listings/create-listing/privacy-type` : '/listings/create-listing'}>Back</Link>
                            {this.state.location !== '' ?
                                <Link className="link" id="location-next-button" to={`/listings/create-listing/floor-plan`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LocationType;


