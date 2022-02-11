import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faAngleDown, faCircle } from "@fortawesome/free-solid-svg-icons";
class EditBooking extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogoClick = this.handleLogoClick.bind(this)
        this.handleExitClick = this.handleExitClick.bind(this)
        this.state = { disabled: true, start_date: this.props.booking ? this.props.booking.start_date : '', end_date: this.props.booking ? this.props.booking.end_date : '', adults: this.props.booking ? this.props.booking.adults : '', children: this.props.booking ? this.props.booking.children : '', infants: this.props.booking ? this.props.booking.infants : '', guestClick: false}
        this.tab = this.tab.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this); 
        this.numDays = this.numDays.bind(this);
        this.handleGuestClick = this.handleGuestClick.bind(this);  
    }

    handleLogoClick() {
        this.props.history.push("/"); 
    }

    handleExitClick() {
        this.props.history.push(`/bookings/${this.props.match.params.id}`); 
    }

    handleDateChange(field) {
        return (e) => {
            if (e.target.value !== this.state[field].value && e.target.value) {
                this.setState( {[field]: e.target.value})
                this.state[field] = e.target.value; 
                if (this.state.start_date < this.state.end_date)
                    this.setState({disabled: false}) 
                else {
                    this.setState({disabled: true})
                }
            }
        }
    }

    numDays() {
        if (this.state.start_date && this.state.end_date) {
            const start = new Date(this.state.start_date);
            const end = new Date(this.state.end_date);
            const timeDiff = end.getTime() - start.getTime();
            return timeDiff / (1000 * 3600 * 24)
        }
    }

    componentDidMount() {
        this.props.requestBooking(this.props.match.params.id).then((booking) => {
            this.setState({start_date: booking.booking.start_date, end_date: booking.booking.end_date})
            this.props.requestListing(booking.booking.listing_id)
        })
    }

    tab() {
        const sing = this.props.booking.infants === 1 ? `, ${this.props.booking.infanta} infant` : `, ${this.props.booking.infants} infants`;
        const infantString = this.props.booking.infants > 0 ? sing : '';
        const tab = this.props.booking.adults === 1 && this.props.booking.children === 0 ? `${this.props.booking.adults} guest${infantString}` : `${this.props.booking.adults + this.props.booking.children} guests${infantString}`;
        return tab;
    }

    handleGuestClick() {
        this.setState({guestClick: !this.state.guestClick})
    }

    render() {

        if (!this.props.booking || !Object.values(this.props.listings).length) {
            return null; 
        }

        const tab = this.tab(); 
        const listing = this.props.listings[this.props.booking.listing_id]
        const host = this.props.users[listing.host_id]; 
        const numDays = this.numDays(); 
        debugger 

        return(
            <div className="edit-booking-container">
                <div className="left-edit-booking">
                    <div>
                        <h1 className="logo" onClick={this.handleLogoClick}>Herebnb</h1>
                        <p>Change reservation</p>
                    </div>
                    <div onClick={this.handleExitClick}>
                        <p><FontAwesomeIcon icon={faArrowCircleLeft}/></p>
                        <p>Exit</p>
                    </div>
                </div>
                <div className="middle-edit-booking">
                    <div>
                        <h1>What do you want to change?</h1>
                        <p className="middle-edit-booking-about">After making your desired changes, your host, {host.first_name}, will confirm the alterations to your reservation.</p>
                        <div className="edit-booking-details">
                            <img src={listing.photoUrls[0]} />
                            <div>
                                <p>{listing.title}</p>
                                <div>
                                    <p>Entire {listing.place} {'\u00b7'} {listing.beds * 2} beds {'\u00b7'}{listing.bath} {listing.bath > 1 ? "baths" : "bath"}</p>
                                </div>
                            </div>
                        </div>
                        <h2>Reservation details</h2>
                        <p className="edit-booking-change-label">Dates</p>
                        <div className="check-in-out">
                            <div>
                                <label>Check in</label>
                                <input type="date" defaultValue={this.props.booking.start_date} onChange={this.handleDateChange("start_date")}/>
                            </div>
                            <div>
                                <label>Check out</label>
                                <input type="date" defaultValue={this.props.booking.end_date} onChange={this.handleDateChange("end_date")}/>
                            </div>
                        </div>
                        <p className="edit-booking-change-label">Guests</p>
                        <div>
                            <div className="guest-options-booking-edit" onFocus={this.handleGuestClick} onBlur={this.handleGuestClick} tabIndex="1">
                                <p>{tab}</p>
                                <p><FontAwesomeIcon icon={faAngleDown}/></p>
                                {this.state.guestClick ? 
                                <div className="change-guests-edit">
                                    <div className='adult-option' id="edit-booking">
                                        <div className="guest-left-option">
                                            <p className="guest-option-header">Adults</p>
                                            <p className='guest-option-description'>Ages 13 or above</p>
                                        </div>
                                        <div className='option'>
                                            <p className="count">-</p>
                                            <p className="number">{this.props.booking.adults}</p>
                                            <p className="count">+</p>
                                        </div>
                                    </div>
                                    <div className='child-option' id="edit-booking">
                                        <div className="guest-left-option">
                                            <p className="guest-option-header">Children</p>
                                            <p className='guest-option-description'>Ages 2-12</p>
                                        </div>
                                        <div className='option'>
                                            <p className="count" >-</p>
                                            <p className="number">{this.props.booking.children}</p>
                                            <p className="count">+</p>
                                        </div>
                                    </div>
                                    <div className='infant-option' id="edit-booking">
                                        <div className="guest-left-option">
                                            <p className="guest-option-header">Infants</p>
                                            <p className='guest-option-description'>Under 2</p>
                                        </div>
                                        <div className='option'>
                                            <p className="count">-</p>
                                            <p className="number">{this.props.booking.infants}</p>
                                            <p className="count" >+</p>
                                        </div>
                                    </div>
                                    <div className="edit-booking-guest-buttons">
                                        <p>Cancel</p>
                                        <button>Save</button>
                                    </div>
                                </div> : null }
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="non-active-request" disabled={this.state.disabled}>Send Request</button>
                    </div>
                </div>
                <div className="right-edit-booking">
                    {this.state.disabled ? null : 
                    <div>
                        <p>Price</p>
                        <div>
                            <div>
                                <p>Original price</p>
                                <p>${this.props.booking.price}</p>
                            </div>
                            <div>
                                <p>New price</p>
                                <p>${listing.price * numDays + 75 + 100}</p>
                            </div>
                            <div>
                                <h1>Price difference</h1>
                                <h1>${(listing.price * numDays + 75 + 100) - this.props.booking.price}</h1>
                            </div>
                        </div>
                    </div> }
                </div>
            </div>
        )
    }
}

export default EditBooking; 