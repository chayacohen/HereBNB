import React from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import {faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingGuest from "./booking_guest";

class BookingBox extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {firstInputType: 'text', secondInputType: 'text', arrowClick: false, guestTab: '1 guest'}
        this.focusFirstInputType = this.focusFirstInputType.bind(this);
        this.focusSecondInputType = this.focusSecondInputType.bind(this);
        this.blurFirstInputType = this.blurFirstInputType.bind(this);
        this.blurSecondInputType = this.blurSecondInputType.bind(this);
        this.handleGuestClick = this.handleGuestClick.bind(this);
        this.changeGuestTab = this.changeGuestTab.bind(this); 
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

    changeGuestTab(tab){
        this.setState({guestTab: tab})
    }

    render () {
        const listing = this.props.listing;
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
                    <div className="booking-dates">
                        <div className="check-in-booking" onFocus={this.focusFirstInputType} onBlur={this.blurFirstInputType}>
                            <label>CHECK-IN</label>
                            <input type={this.state.firstInputType} placeholder="Add date" />
                        </div>
                            <div className="check-out-booking" onFocus={this.focusSecondInputType} onBlur={this.blurSecondInputType}>
                            <label>CHECKOUT</label>
                            <input type={this.state.secondInputType} placeholder="Add date"/>
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
                </div>
            </div>
            {/* <p>BOOKING COMING SOON!</p> */}
        </div>
        )
    }
}

export default BookingBox;