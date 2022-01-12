import React from 'react';
import { Link } from 'react-router-dom';

class CompleteListingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: '', title: '', price: ''}
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this); 
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    handleInputChange(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        } 
    }

    handleNextClick() {
        const listingForm = this.props.listingForm
        const listing = {
            title: this.state.title, 
            about: this.state.about, 
            price: this.state.price, 
            street: listingForm.street,
            city: listingForm.city,
            state: listingForm.state,
            country: listingForm.country,
            zip_code: listingForm.zip_code,
            lat: listingForm.lat,
            lng: listingForm.lng,
            guests: listingForm.guests,
            beds: listingForm.beds,
            bath: listingForm.bath,
            place: listingForm.place,
            specific: listingForm.specific,
            privacy: listingForm.privacy, 
            host_id: this.props.currentUser.id
        }
        this.props.createListing(listing)
        this.props.requestAllListings(); 
        const listingId = this.props.listings[this.props.listings.length - 1].id
        const formData = new FormData();
        for(let i = 0; i < listingForm.photos.length; i++) {
            formData.append("listing[photos][]", listingForm.photos[i]);
        }
        $.ajax({
            url: `/api/listings/${listingId}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false
        }).then(response => this.props.updateListing(response))
        this.props.clearForm(); 
    }

    // componentDidMount() {
    // };

    render() {
        return (
            <div>
                <div className="location-type-listing">
                    <div className="question" id="location-question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">Complete your listing</p>
                    </div>
                    <div className="location-input">
                        <div className="location-end-form">
                            <div>
                                <label>Title of your listing</label>
                                <input type="text" onChange={this.handleInputChange('title')}/>
                            </div>
                            <div>
                                <label>How much will you charge a night?</label>
                                <input type="number" onChange={this.handleInputChange('price')} />
                            </div>
                            <div>
                                <label>Write a description about your listing</label>
                                <textarea rows="7" onChange={this.handleInputChange('about')}/>
                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={this.props.place ? `/listings/create-listing/photos` : '/listings/create-listing'}>Back</Link>
                            {this.state.about !== '' && this.state.title !== '' && this.state.price !== '' ?
                            <Link className="link" id="location-next-button" onClick={this.handleNextClick} to={`/users/${this.props.currentUser.id}/listings`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CompleteListingForm;


