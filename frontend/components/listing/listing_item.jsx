import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faSquare, faDoorClosed} from '@fortawesome/free-solid-svg-icons'

class ListingItem extends React.Component {

    constructor(props) {
        super(props); 
    }
    

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id);
        this.props.requestAllUsers(); 
    }


    render() {
        // goal is to replace placeholder divs to map the images of the listing
        //on click of city,state,country, takes you to map page
        if (!this.props.listing) {
            return null; 
        }

        const listing = this.props.listing 
        const host = this.props.users[this.props.listing.host_id]
        return (
            <div className="listing-item">
                <p className="listing-title">{listing.title}</p>
                <div className="listing-details">
                    <p>{'\u2605'} </p>
                    <p> 5.0 {'\u00b7'}</p>
                    <p>0 reviews</p>
                    <p>{'\u00b7'}</p>
                    <p>{`${listing.city},${listing.state},United States`}</p>
                </div>
                <div className="image-show-listing">
                    <div className="main-image"></div>
                    <div className="rest-of-images">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <section className="details-section">
                    <div className="about-host">
                        <div className="about-host-first">
                            <div className="about-host-words">
                                <p className="hosted-by">{`Entire home hosted by ${host.first_name}`}</p>
                                <p className="house-details">{`${Math.floor(listing.num_beds * 1.5)} guests ${'\u00b7'} ${Math.floor(listing.num_beds / 2)} bedrooms ${'\u00b7'} ${listing.num_beds} beds ${'\u00b7'} ${Math.floor(listing.num_beds / 2)} baths`} </p>
                            </div>
                            <img src={host.photoUrl} className="host-photo" />
                        </div>
                        <div className="home">
                            <FontAwesomeIcon icon={faHome} className="home-icon"/> 
                            <p>Entire home</p>
                        </div>
                        <p className="at-description" id="clean">You'll have the home for yourself.</p>
                        <div className="clean">
                            <FontAwesomeIcon icon={faSquare} className="square-icon" /> 
                            <p>Enhanced clean</p>
                        </div>
                        <p className="at-description" id="clean">This Host committed to the CDC's cleaning guidelines.</p>
                        <div className="check-in">
                            <FontAwesomeIcon icon={faDoorClosed} className="door-icon" />
                            <p>Self check-in</p>
                        </div>
                        <p className="at-description" id="check-in">Check yourself in with a lockbox.</p> 
                    </div>
                    <div className="booking"></div>
                </section>
            </div>
        )
    }
}

export default ListingItem;