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
        this.handleFocusGuest = this.handleFocusGuest.bind(this);
        this.handleBlurGuest = this.handleBlurGuest.bind(this);
        this.handlePlusClick= this.handlePlusClick.bind(this);  
        this.handleMinusClick= this.handleMinusClick.bind(this);  
        this.handleSaveClick= this.handleSaveClick.bind(this);  
        this.handleCancelClick= this.handleCancelClick.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);   
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
            this.setState({ start_date: booking.booking.start_date, end_date: booking.booking.end_date, adults: booking.booking.adults, children: booking.booking.children, infants: booking.booking.infants})
            this.props.requestListing(booking.booking.listing_id)
        })
    }

    tab() {
        const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
        const infantString = this.state.infants > 0 ? sing : '';
        const tab = this.state.adults === 1 && this.state.children === 0 ? `${this.state.adults} guest${infantString}` : `${this.state.adults + this.state.children} guests${infantString}`;
        return tab;
    }

    handleFocusGuest() {
        this.setState({guestClick: true})
    }

    handleBlurGuest() {
        this.setState({guestClick: false})
    }

    handleCancelClick() {
        const guestOptionsBookingEdit = document.querySelector(".guest-options-booking-edit"); 
        guestOptionsBookingEdit.blur()
    }


    handlePlusClick(field) {
        return () => {
            const listing = this.props.listings[this.props.booking.listing_id]
            if (field === "adult") { 
                if (this.state.adults + this.state.children < listing.guests)
                    this.setState({ adults: this.state.adults += 1 })
                    this.state.adults += 1
            }
            else if (field === "child") {
                if (this.state.adults + this.state.children < listing.guests)
                    this.setState({ children: this.state.children += 1 })
                    this.state.children += 1
            }
            else if (field === "infant") {
                if (this.state.infants < 5) {
                    this.setState({ infants: this.state.infants += 1 })
                    this.state.infants += 1
                }
            }
        }
    }

    handleMinusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.state.adults !== 1) {
                    this.setState({ adults: this.state.adults -= 1 })
                    this.state.adults -=1
                }
            }
            else if (field === "child") {
                if (this.state.children !== 0) {
                    this.setState({ children: this.state.children -= 1 })
                    this.state.children -= 1
                }
            }
            else if (field === "infant") {
                if (this.state.infants !== 0) {
                    this.setState({ infants: this.state.infants -= 1 })
                    this.state.infants -= 1
                }
            }
        }
    }

    handleSaveClick(e) {
        e.preventDefault(); 
        if (this.state.adults !== this.props.booking.adults || this.state.children !== this.props.booking.children || this.state.infants !== this.props.booking.infants) {
            this.setState({ disabled: false})

        }
        const guestOptionsBookingEdit = document.querySelector(".guest-options-booking-edit");
        guestOptionsBookingEdit.blur() 
    }

    handleUpdateSubmit(e) {
        e.preventDefault(); 
        const booking = this.props.booking;
        booking.start_date = this.state.start_date; 
        booking.end_date = this.state.end_date; 
        booking.adults = this.state.adults; 
        booking.children = this.state.children; 
        booking.infants = this.state.infants; 

        this.props.updateBooking(booking).then(() => {
            this.props.history.push(`/bookings/${booking.id}`)
        })

    }

    render() {

        if (!this.props.booking || !Object.values(this.props.listings).length) {
            return null; 
        }

        const tab = this.tab(); 
        const listing = this.props.listings[this.props.booking.listing_id]
        const host = this.props.users[listing.host_id]; 
        const numDays = this.numDays(); 

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
                            <div className="guest-options-booking-edit" onFocus={this.handleFocusGuest} onBlur={this.handleBlurGuest} tabIndex="1">
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
                                            <p className="count" onClick={this.handleMinusClick("adult")}>-</p>
                                            <p className="number">{this.state.adults}</p>
                                            <p className="count" onClick={this.handlePlusClick("adult")}>+</p>
                                        </div>
                                    </div>
                                    <div className='child-option' id="edit-booking">
                                        <div className="guest-left-option">
                                            <p className="guest-option-header">Children</p>
                                            <p className='guest-option-description'>Ages 2-12</p>
                                        </div>
                                        <div className='option'>
                                            <p className="count" onClick={this.handleMinusClick("child")} >-</p>
                                            <p className="number">{this.state.children}</p>
                                            <p className="count" onClick={this.handlePlusClick("child")}>+</p>
                                        </div>
                                    </div>
                                    <div className='infant-option' id="edit-booking">
                                        <div className="guest-left-option">
                                            <p className="guest-option-header">Infants</p>
                                            <p className='guest-option-description'>Under 2</p>
                                        </div>
                                        <div className='option'>
                                            <p className="count" onClick={this.handleMinusClick("infant")}>-</p>
                                            <p className="number">{this.state.infants}</p>
                                            <p className="count" onClick={this.handlePlusClick("infant")}>+</p>
                                        </div>
                                    </div>
                                    <div className="edit-booking-guest-buttons">
                                        <p onClick={this.handleCancelClick}>Cancel</p>
                                        <h1 onClick={this.handleSaveClick}>Save</h1>
                                    </div>
                                </div> : null }
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="non-active-request" disabled={this.state.disabled} onClick={this.handleUpdateSubmit}>Send Request</button>
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
                                <h1>${(listing.price * numDays) - this.props.booking.price}</h1>
                            </div>
                        </div>
                    </div> }
                </div>
            </div>
        )
    }
}

export default EditBooking; 