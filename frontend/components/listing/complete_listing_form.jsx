import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

class CompleteListingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: '', title: '', price: '', question: 'Complete your listing'}
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
        debugger 
        if ( Object.values(listingForm).length !== 14) {
            return this.props.history.push('/listings/create-listing')
        }
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
            .then((response) => {
                const formData = new FormData();
                for (let i = 0; i < listingForm.photos.length; i++) {
                    formData.append("listing[photos][]", listingForm.photos[i]);
                }
                this.props.addListingPhotos(response.listing.id, formData).then(() => { 
                    this.props.history.push(`/users/${this.props.currentUser.id}/listings`)
                })
                this.setState({question: 'Submitting your listing'})
                this.props.clearForm()
            })
            
        
    }

    // componentDidMount() {
    // };

    render() {
        return (
            <div>
                <div className="location-type-listing">
                    <div className="question" id="location-question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <div className="the-create-question">
                            <p>{this.state.question}</p>
                            {this.state.question === 'Submitting your listing' ? <FontAwesomeIcon icon={faCircleNotch} className="fa-spin"/> : null }
                            </div>
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
                            <button className="link" id="location-next-button" onClick={this.handleNextClick} type="submit">Submit</button> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CompleteListingForm;


