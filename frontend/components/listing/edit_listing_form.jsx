import React from "react";
import { Link } from "react-router-dom";

class EditListingForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {clicked: ''}
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleAddressChange = this.handleAddressChange.bind(this); 
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        delete this.state.clicked
        this.props.updateListing(this.state).then(() => this.props.history.push(`/users/${this.props.currentUser.id}/listings`) )
    }

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id);
    }

    onPlaceChanged() {
        const place = this.autocomplete.getPlace();
        if (!place.geometry) {
            document.getElementById('autocomplete').placeholder = "Enter your address"
        }
        else {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            this.setState({street: `${place.address_components[0].short_name} ${place.address_components[1].short_name}`, city: place.address_components[3].long_name, state: place.address_components[5].short_name, country: place.address_components[6].short_name, zip_code: place.address_components[7].short_name, lat: lat, lng: lng })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.listing !== prevProps.listing) {
            this.setState(this.props.listing)
            this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
                componentRestrictions: { 'country': ['US'] },
                fields: ['place_id', 'geometry', 'name', 'address_components']
            })
            const autocomplete = this.autocomplete;
            autocomplete.addListener('place_changed', this.onPlaceChanged) 
        } 

        if(this.props.match.params.id !== prevProps.match.params.id) {
            if (this.props.listing) {
                if (this.props.currentUser.id !== this.props.listing.host_id) {
                    this.props.history.push('/')
                }
            }
        }
        // this.props.requestListing(this.props.match.params.id);
    }

    handleInputChange(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleFocus(e) {
        this.setState({clicked: e.currentTarget.title})
    }

    handleBlur() {
        this.setState({clicked: '' })
    }

    render() {
        if (!this.props.listing) {
            return null 
        }

        
        if (this.props.currentUser.id !== this.props.listing.host_id) {
            return (
                <div>
               <p className="access-denied">Access Denied</p>
           </div>)
        } 
         
        let address = ''; 

        if (Object.values(this.state).length > 1) {
                 address = `${this.state.street}, ${this.state.city}, ${this.state.state}, ${this.state.country}, ${this.state.zip_code}`
        }; 

        let options = ''
        if (this.state.place === "apartment") {
            options = ['Rental unit', 'Condominium(condo)', 'Loft', 'Serviced apartment', 'Vacation home']
        }
        else if (this.state.place === "house") {
            options = ['Residential home', 'Cabin', 'Vacation home', 'Townhouse', 'Farm stay']
        }
        else if (this.state.place === "secondary unit") {
            options = ['Guesthouse', 'Guest suite', 'Farm stay', 'Vacation home', 'Backhouse']
        }
        else if (this.state.place === "bed and breakfast") {
            options = ['Bed and breakfast', 'Nature lodge', 'Farm stay', 'Hotel', 'Other']
        }
        else if (this.state.place === "unique space") {
            options = ['Barn', 'Boat', 'Treehouse', 'Campsite', 'Tent']
        }
        
        return (
        <div className="edit-form-container">
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <h1>Update your listing</h1>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="title" id={this.state.clicked === 'title' ? 'focus' : null}>
                    <label>Title</label>
                    <input type="text" defaultValue={this.state.title} onChange={this.handleInputChange('title')} />
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="about" id={this.state.clicked === 'about' ? 'focus' : null}>
                    <label>About</label>
                    <textarea defaultValue={this.state.about} onChange={this.handleInputChange('about')}  rows="5"/>
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="address" id={this.state.clicked === 'address' ? 'focus' : null}>
                    <label>Address</label>
                        <input id="autocomplete" placeholder='Enter your address' type="text" defaultValue={address}/>
                        
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="price" id={this.state.clicked === 'price' ? 'focus' : null}>
                    <label>Price</label>
                    <input type="number" defaultValue={this.state.price} onChange={this.handleInputChange('price')} />
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="place" id={this.state.clicked === 'place' ? 'focus' : null}>
                    <label>Type of place</label>
                    <select onChange={this.handleInputChange('place')}>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="secondary unit">Secondary unit</option>
                            <option value="bed and breakfast">Bed and breakfast</option>
                            <option value="unique space">Unique space</option>  
                    </select>
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="specific" id={this.state.clicked === 'specific' ? 'focus' : null}>
                    <label>What would best describe your place?</label>
                        <select onChange={this.handleInputChange('specific')}>
                            <option>{options[0]}</option>
                            <option>{options[1]}</option>
                            <option>{options[2]}</option>
                            <option>{options[3]}</option>
                            <option>{options[4]}</option>
                        </select>
                </div>
                <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="privacy" id={this.state.clicked === 'privacy' ? 'focus' : null}>
                    <label>What type of privacy will your guests have?</label>
                    <select onChange={this.handleInputChange('privacy')}>
                        <option value="an entire place">An entire place</option>
                        <option value="a private room">A private room</option>
                        <option value="a shared room">A shared room</option>
                    </select>
                </div>
                    <div onFocus={this.handleFocus} onBlur={this.handleBlur} title="floor-plan" id={this.state.clicked === 'floor-plan' ? 'floor-plan-focus' : "floor-plan-container"}>
                    <div>
                        <label>Guests</label>
                        <input type="number" defaultValue={this.state.guests} onChange={this.handleInputChange('guests')} />
                    </div>
                    <div>
                        <label>Beds</label>
                        <input type="number" defaultValue={this.state.beds} onChange={this.handleInputChange('beds')} />
                    </div>
                    <div>
                        <label>Bath</label>
                        <input type="number" defaultValue={this.state.bath} onChange={this.handleInputChange('bath')} />
                    </div>
                </div>
                <button type="submit" className="update-listing-button">Update Listing</button>
            </form>
        </div>
        )
    }
}

export default EditListingForm;