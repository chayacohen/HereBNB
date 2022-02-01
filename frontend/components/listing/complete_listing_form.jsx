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

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id)
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
        
        this.props.listing.title = this.state.title;
        this.props.listing.about = this.state.about;
        this.props.listing.price = this.state.price;
        this.props.listing.complete = true; 
        this.props.updateListing(this.props.listing).then(() => {
            this.props.history.push(`/users/${this.props.currentUserId}/listings`) 
        })
    }

    render() {

        const listing = this.props.listing; 
        if (!listing) {
            return null
        };

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
                            <Link className="link" id="back-button" to={`/listings/${listing.id}/create-listing/photos`}>Back</Link>
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


