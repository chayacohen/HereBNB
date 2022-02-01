import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
class FloorPlan extends React.Component {

    constructor(props) {
        super(props);
        this.state = { guests: 0, beds: 0, bathrooms: 0}
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleGuestDownClick = this.handleGuestDownClick.bind(this);
        this.handleGuestUpClick = this.handleGuestUpClick.bind(this);
        this.handleBedDownClick = this.handleBedDownClick.bind(this);
        this.handleBedUpClick = this.handleBedUpClick.bind(this);
        this.handleBathDownClick = this.handleBathDownClick.bind(this);
        this.handleBathUpClick = this.handleBathUpClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this); 
    }

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id)
    }

    handleLogoClick() {
        this.props.history.push("/");
    }


    handleGuestDownClick() {
        const num_guests = this.state.guests; 
        if(num_guests !== 0) {
            this.setState({guests: (num_guests - 1)})
        }
    }
    
    handleGuestUpClick() {
        const num_guests = this.state.guests;
        this.setState({ guests: (num_guests + 1) })
    }
  
    handleBedDownClick() {
        const num_beds = this.state.beds;
        if (num_beds !== 0) {
            this.setState({ beds: (num_beds - 1) })
        }
    }

    handleBedUpClick() {
        const num_beds = this.state.beds;
        this.setState({ beds: (num_beds + 1) })
    }

    handleBathDownClick() {
        const num_baths = this.state.bathrooms;
        if (num_baths !== 0) {
            this.setState({ bathrooms: (num_baths - 1) })
        }
    }

    handleBathUpClick() {
        const num_baths = this.state.bathrooms;
        this.setState({ bathrooms: (num_baths + 1) })
    };

    handleNextClick() {
        this.props.listing.beds = this.state.beds
        this.props.listing.bath = this.state.bathrooms
        this.props.listing.guests = this.state.guests
        this.props.updateListing(this.props.listing)
    }

    // componentDidMount() {
    // };

    render() {

        const listing = this.props.listing

        if (!listing) {
            return null
        }

        return (
            <div>
                <div className="location-type-listing">
                    <div className="question" id="location-question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">How many guests would you like to welcome?</p>
                    </div>
                    <div className="location-input">
                        <div className="floor-plan-options">
                            <div className='guest-counter'>
                                <p>Guests</p>
                                <div className='counter'>
                                    <p><FontAwesomeIcon icon={faMinus} onClick={this.handleGuestDownClick}/></p>
                                    <p>{this.state.guests}</p>
                                    <p><FontAwesomeIcon icon={faPlus} onClick={this.handleGuestUpClick}/></p>
                                </div>
                            </div>
                            <div className='bed-counter'>
                                <p>Beds</p>
                                <div className='counter'>
                                    <p><FontAwesomeIcon icon={faMinus} onClick={this.handleBedDownClick}/></p>
                                    <p>{this.state.beds}</p>
                                    <p><FontAwesomeIcon icon={faPlus} onClick={this.handleBedUpClick}/></p>
                                </div>
                            </div>
                            <div className='bath-counter'>
                                <p>Bathrooms</p>
                                <div className='counter'>
                                    <p><FontAwesomeIcon icon={faMinus} onClick={this.handleBathDownClick}/></p>
                                    <p>{this.state.bathrooms}</p>
                                    <p><FontAwesomeIcon icon={faPlus} onClick={this.handleBathUpClick}/></p>
                                </div>
                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={`/listings/${listing.id}/create-listing/location`}>Back</Link>
                            {Object.values(this.state).every(value => value !== 0) ?
                            <Link className="link" id="location-next-button" onClick={this.handleNextClick} to={`/listings/${listing.id}/create-listing/photos`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FloorPlan;


