import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBan, faAngleRight, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

class BookingItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {listing: ''}
        this.tab = this.tab.bind(this);
        this.handleShowMoreClick = this.handleShowMoreClick.bind(this) 
        this.handleShowListingClick = this.handleShowListingClick.bind(this) 
        this.handleCancelResClick = this.handleCancelResClick.bind(this) 
        this.handleChangeResClick = this.handleChangeResClick.bind(this) 
    }

    componentDidMount() {
       this.props.requestBooking(this.props.match.params.id).then((booking) => {
            this.props.requestListing(booking.booking.listing_id).then(listing => {
                this.setState({listing: listing.listing})
                const mapOptions = {
                    center: { lat: listing.listing.lat, lng: listing.listing.lng },
                    zoom: 17
                };
                this.map = new google.maps.Map(this.mapNode, mapOptions)
                new google.maps.Marker({ position: mapOptions.center, map: this.map })
            })
       })
    }

    tab() {
        const sing = this.props.booking.infants === 1 ? `, ${this.props.booking.infanta} infant` : `, ${this.props.booking.infants} infants`;
        const infantString = this.props.booking.infants > 0 ? sing : '';
        const tab = this.props.booking.adults === 1 && this.props.booking.children === 0 ? `${this.props.booking.adults} guest${infantString}` : `${this.props.booking.adults + this.props.booking.children} guests${infantString}`;
        return tab; 
    }

    handleShowMoreClick() {
        this.props.history.push(`/users/show/${this.state.listing.host_id}`)
    }

    handleShowListingClick() {
        this.props.history.push(`/listings/${this.state.listing.id}`)
    }

    handleCancelResClick() {
        this.props.deleteBooking(this.props.booking.id).then(() => {
            this.props.history.push(`/user/${this.props.userId}/bookings`)
        }) 
    }

    handleChangeResClick() {
        this.props.history.push(`/bookings/${this.props.booking.id}/edit`)
    }

    render() {
        if (!this.props.booking || !this.state.listing) {
            return null;
        }

        const tab = this.tab();
        const host = this.props.users[this.state.listing.host_id]
        return(
            <div className="booking-show">
                <div className="booking-map-info">
                    <div className="slide1">
                        <img src={this.state.listing.photoUrls[0]} />
                        <div className="checkin-checkout">
                            <div className="booking-checkin">
                                <h1 className="check-header">Check-in</h1>
                                <p className="booking-item-date">Start Date</p>
                                <p>2:00 PM</p>
                            </div>
                            <div className="booking-checkout">
                                <h1 className="check-header">Checkout</h1>
                                <p className="booking-item-date">End Date</p>
                                <p>11:00 AM</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide2">
                        <h1>Reservation details</h1>
                        <div className="guest-details-slide2">
                            <div className="slide2-guests">
                                <p>Who's coming</p>
                                <p>{tab}</p>
                            </div>
                        </div>
                        <div className="change-res" onClick={this.handleChangeResClick}>
                            <div>
                                <div>
                                    <p><FontAwesomeIcon icon={faUsers}/></p>
                                    <p>Change reservation</p>
                                </div>
                                <p><FontAwesomeIcon icon={faAngleRight} /></p>
                            </div>
                        </div>
                        <div className="change-res" onClick={this.handleCancelResClick}>
                            <div>
                                <div>
                                    <p><FontAwesomeIcon icon={faBan}/></p>
                                    <p>Cancel reservation</p>
                                </div>
                                <p><FontAwesomeIcon icon={faAngleRight}/></p>
                            </div>
                        </div>
                    </div>
                    <div className="slide3">
                        <h1>Getting there</h1>
                        <h2>Address</h2>
                        <p>{this.state.listing.street}</p>
                        <p>{`${this.state.listing.city}, ${this.state.listing.state} ${this.state.listing.zip_code}`}</p>
                    </div>
                    <div className="slide4">
                        <h1>{`Checking in & out`}</h1>
                        <h2>Check-in</h2>
                        <p>Instructions will be visible during your stay.</p>
                    </div>
                    <div className="slide5">
                        <h1>{`Where you're staying`}</h1>
                        <h2>House Rules</h2>
                        <p>10:00 quiet time if other guests are staying onsite.</p>
                        <div onClick={this.handleShowListingClick}>
                            <div>
                                <p><FontAwesomeIcon icon={faDoorOpen}/></p>
                                <p>Show listing</p>
                            </div>
                            <p><FontAwesomeIcon icon={faAngleRight}/></p>
                        </div>
                    </div>
                    <div className="slide6">
                        <div>
                            <h1>{`Hosted by ${host.first_name}`}</h1>
                            <img src={host.photoUrl} />
                        </div>
                        {host.about ?
                        <h2>About your host</h2> : null }
                        {host.about ? 
                        <p className="booking-about-host">{host.about}</p> : null }
                        <p className="booking-link-to-host" onClick={this.handleShowMoreClick}>Show more</p>
                    </div>
                    <div className="slide7">
                        <h1>Payment info</h1>
                        <h2>Payment details</h2>
                        <p>Total cost: ${`${this.props.booking.price}`} USD</p>
                    </div>
                </div>
                <div className="booking-map" id="map" ref={map => this.mapNode = map}>
                        {/* <div id="map" className="map" ref={map => this.mapNode = map}></div> */}
                 </div>
            </div>
        )
    }
}

export default BookingItem