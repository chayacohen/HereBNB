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
        this.props.requestListing(this.props.match.params.id)
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
            componentRestrictions: {'country': ['US']}, 
            fields: ['place_id', 'geometry', 'name', 'formatted_address']
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
        if (!place.geometry || place.formatted_address.split(',').length < 4) {
            document.getElementById('autocomplete').placeholder = "Enter your address"; 
            this.setState({location: ''})
        }
        else {  
            const lat = place.geometry.location.lat(); 
            const lng = place.geometry.location.lng(); 
            this.setState({center: {lat:lat, lng: lng}, zoom: 15});
            this.map.setCenter(this.state.center); 
            this.map.setZoom(this.state.zoom)

            new google.maps.Marker({position: this.state.center, map: this.map})
            const formatAddress = place.formatted_address.split(', '); 
            const state = formatAddress[2].split(' ')[0]
            const zip_code = formatAddress[2].split(' ')[1]
            const address = { address: formatAddress[0], city: formatAddress[1], state: state, country: formatAddress[3], zip_code: zip_code, lat: lat, lng: lng}
            this.setState({location: address}) 
            this.props.listing.address = address.address
            this.props.listing.city = address.city
            this.props.listing.state = address.state
            this.props.listing.country = address.country
            this.props.listing.zip_code = address.zip_code
            this.props.listing.lat = address.lat
            this.props.listing.lng = address.lng
            this.props.updateListing(this.props.listing)
        }
    }

    render() {

        const listing = this.props.listing
       
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
                            <Link className="link" id="back-button" to={listing ? `/listings/${listing.id}/create-listing/privacy-type` : '/listings/create-listing'}>Back</Link>
                            {this.state.location !== '' && listing ?
                                <Link className="link" id="location-next-button" to={`/listings/${listing.id}/create-listing/floor-plan`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LocationType;


