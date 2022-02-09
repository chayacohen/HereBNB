import React from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import {faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingGuest from "./booking_guest";

class BookingBox extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { firstInputType: 'text', secondInputType: 'text', arrowClick: false, guestTab: '1 guest', buttonText: "Check Availability", start_date: '', end_date: '', dateClick: false,
        adult: 1, child: 0, infant: 0},
        this.focusFirstInputType = this.focusFirstInputType.bind(this);
        this.focusSecondInputType = this.focusSecondInputType.bind(this);
        this.blurFirstInputType = this.blurFirstInputType.bind(this);
        this.blurSecondInputType = this.blurSecondInputType.bind(this);
        this.handleGuestClick = this.handleGuestClick.bind(this);
        this.changeGuestTab = this.changeGuestTab.bind(this); 
        this.handleDateChange = this.handleDateChange.bind(this);
        this.numDays = this.numDays.bind(this);  
        this.handleReserveClick = this.handleReserveClick.bind(this); 
    }


    focusFirstInputType() {
        this.setState({firstInputType: 'date'})
    }

    blurFirstInputType() {
        this.setState({firstInputType: 'text'})
    }

    focusSecondInputType() {
        this.setState({secondInputType: 'date'})
    }

    blurSecondInputType() {
        this.setState({secondInputType: 'text'})
    }

    handleGuestClick() { 
        this.setState({arrowClick: !this.state.arrowClick})
    }

    changeGuestTab(tab, adult, child, infant){
        this.setState({guestTab: tab, adult: adult, child: child, infant: infant})
    }

    numDays() {
        const start = new Date(this.state.start_date); 
        const end = new Date(this.state.end_date); 
        const timeDiff = end.getTime() - start.getTime(); 
        return timeDiff / (1000 * 3600 * 24)
    }

    handleDateChange(field) {
        return (e) => {
            const today = new Date();
            const todayDate = today.toISOString().split('T')[0];
            this.state[field] = e.target.value;  
            if (e.target.value < todayDate) {  
                this.setState({[field]: ''})
                e.target.value = ''; 
            }
            else if ((this.state.start_date && this.state.start_date) && (new Date(this.state.start_date) >= new Date(this.state.end_date))) {
                this.setState({[field]: ''});
                e.target.value = ''; 
            }
            else {
                this.setState({[field]: e.target.value})
                this.state[field] = e.target.value; 
                if (this.state.start_date && this.state.end_date) {
                    this.setState({ buttonText: "Reserve"} )
                 } 
            }
        }
    }

    handleReserveClick() {
        debugger 
        if (this.state.buttonText === "Reserve") {
            debugger
            const nights = this.numDays(); 
            const booking = {
                listing_id: this.props.listing.id, 
                user_id: this.props.userId, 
                start_date: this.state.start_date, 
                end_date: this.state.end_date, 
                price: (this.props.listing.price * nights + 75 + 100), 
                adults: this.state.adult, 
                children: this.state.child, 
                infants: this.state.infant
            }
            this.props.createBooking(booking).then(() => {
                this.props.history.push(`/user/${this.props.userId}/bookings`)
            })
        }
    }

    render () {
        const listing = this.props.listing;
        let nights = ''; 
        if (this.state.start_date && this.state.end_date) {
            nights = this.numDays(); 
        }
        return (
         <div className="booking-container">
            <div className="booking">
                <div className="booking-box-header">
                    <div>
                        <p className="listing-price-text">{`$${listing.price}`}</p>
                        <p className="per-night"> / night</p>
                    </div>
                    <div className="lastp">
                        <p id="star">{'\u2605'}</p>
                        <p>{'5.0 \u00b7 2 reviews'}</p>
                    </div>
                </div>
                <div className="date-inputs">
                    <div className="booking-dates" onFocus={() => this.setState({ dateClick: true})} onBlur={() => this.setState({ dateClick: false })} id={this.state.dateClick ? "date-clicked" : null}>
                        <div className="check-in-booking" onFocus={this.focusFirstInputType} onBlur={this.blurFirstInputType}>
                            <label>CHECK-IN</label>
                                <input type={this.state.firstInputType} placeholder="Add date" onChange={this.handleDateChange("start_date")}/>
                        </div>
                            <div className="check-out-booking" onFocus={this.focusSecondInputType} onBlur={this.blurSecondInputType}>
                            <label>CHECKOUT</label>
                            <input type={this.state.secondInputType} placeholder="Add date" onChange={this.handleDateChange("end_date")}/>
                        </div>
                    </div>
                        <div className="add-booking-guests" onFocus={this.handleGuestClick} onBlur={this.handleGuestClick} tabIndex="1">
                            <div className="add-booking-guests-header">
                                <label>GUESTS</label>
                                <p>{this.state.guestTab}</p>
                            </div>
                            <p className="arrow">
                                {!this.state.arrowClick ? <FontAwesomeIcon icon={faAngleDown} /> : 
                                    <FontAwesomeIcon icon={faAngleUp} />
                                    }
                            </p>
                            {this.state.arrowClick ? <BookingGuest listing={listing} changeGuestTab={this.changeGuestTab}/> : null}
                    </div>
                    <div className="booking-box-button" onClick={this.handleReserveClick}>
                        <p>{this.state.buttonText}</p>
                    </div>
                    {nights ? 
                    <div className="booking-price-info">
                        {/* <div className="price-statement">
                            <p>You wont be charged yet</p>
                        </div> */}
                        <div className="booking-price first-booking-price">
                            <p>{`$${listing.price} x ${nights} nights`}</p>
                            <p>{`$${listing.price * nights}`}</p>
                        </div>
                        <div className="booking-price">
                            <p>Cleaning fee</p>
                            <p>$75</p>
                        </div>
                        <div className="booking-price">
                            <p>Service fee</p>
                            <p>$100</p>
                        </div>
                        <div className="booking-price-total">
                            <p>Total</p>
                            <p>{`$${(listing.price * nights) + 75 + 100}`}</p>
                        </div>
                    </div> 
                    : null }
                </div>
            </div>
            {/* <p>BOOKING COMING SOON!</p> */}
        </div>
        )
    }
}

export default BookingBox;