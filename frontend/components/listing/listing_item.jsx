import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faSquare, faDoorClosed} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Calendar from "./calendar";
import BookingBoxContainer from "../bookings/booking_box_container";


class ListingItem extends React.Component {

    constructor(props) {
        super(props); 
    }
    
    componentDidMount() {
        this.props.requestListing(this.props.match.params.id).then(({listing}) => {
            const mapOptions = {
                center: { lat: listing.lat, lng: listing.lng },
                zoom: 15
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions)
            new google.maps.Marker({position: mapOptions.center, map: this.map})
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.requestListing(this.props.match.params.id);
        } 
    }
    
    render() {
        // goal is to replace placeholder divs to map the images of the listing
        //on click of city,state,country, takes you to map page
        if (!this.props.listing || !this.props.host) { 
            return null; 
        }

        const listing = this.props.listing 
        const host = this.props.host 

        let home = ['Entire home', `You'll have the home for yourself`, "Entire home"]
        if (listing.privacy === 'a private room') {
            home = ['A private room', `You'll have a private room in the home`, 'Private room']
        };
        if (listing.privacy === 'a shared room') {
            home = ['A shared room', `You'll be sharing a room`, 'Shared room']
        };

        return (
            <div className="listing-item">
                <p className="listing-title">{listing.title}</p>
                <div className="listing-details">
                    <p>{'\u2605'} </p>
                    <p> 5.0 {'\u00b7'}</p>
                    <p>0 reviews</p>
                    <p>{'\u00b7'}</p>
                    <p>{`${listing.city},${listing.state},${listing.country}`}</p>
                </div>
                <div className="image-show-listing">
                    <img className="main-image" src={listing.photoUrls[0]}/>
                    <div className="rest-of-images">
                        <img src={listing.photoUrls[1]}/>
                        <img src={listing.photoUrls[2]}/>
                        <img src={listing.photoUrls[3]}/>
                        <img src={listing.photoUrls[4]}/>
                    </div>
                </div>
                <section className="details-section">
                    <div className="about-host">
                        <div className="about-host-first">
                            <div className="about-host-words">
                                <p className="hosted-by">{`${home[2]} hosted by ${host.first_name}`}</p>
                                <p className="house-details">{`${listing.guests} guests ${'\u00b7'} ${listing.beds} bedrooms ${'\u00b7'} ${listing.beds * 2} beds ${'\u00b7'} ${listing.bath} baths`} </p>
                            </div>
                            <Link to={`/users/show/${listing.host_id}`} className="link"><img src={host.photoUrl} className="host-photo"/></Link>
                        </div>
                        <p className="border-line"></p>
                        <div className="home">
                            <FontAwesomeIcon icon={faHome} className="home-icon"/> 
                            <p>{home[0]}</p>
                        </div>
                        <p className="at-description" id="clean">{`${home[1]}.`}</p>
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
                        <p className="border-line"></p>
                        <p className="about-listing">{listing.about}</p>
                        {/* <p className="border-line"></p> */}
                        {/* <div className="sleep">
                            <h1>Where you'll sleep</h1>
                            <div>
                            </div>
                        </div> */}
                        {/* <p className="border-line"></p>
                        <div>
                            <Calendar setStartDate={this.setStartDate} setEndDate={this.setEndDate}/>
                        </div> */}
                        <p className="border-line"></p>
                        <div className="reviews-listing">
                            <h1><p className="star">{'\u2605'}</p>{'5.0 \u00b7 2 reviews'} </h1>
                        </div>
                        <p className="border-line"></p>
                        <div className="listing-map">
                            <h1>Where you'll be</h1>
                            <p>{`${listing.city}, ${listing.state}, ${listing.country}`}</p>
                            <div className="listing-item-map">
                                <div id="map" className="map" ref={map => this.mapNode = map}></div>
                            </div> 
                        </div>
                        <p className="border-line"></p>
                    </div>
                    <BookingBoxContainer listing={listing}/>
                </section>
            </div>
        )
    }
}

export default ListingItem;