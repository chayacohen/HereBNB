import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BookingBox extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {firstInputType: 'text', secondInputType: 'text'}
        this.focusFirstInputType = this.focusFirstInputType.bind(this)
        this.focusSecondInputType = this.focusSecondInputType.bind(this)
        this.blurFirstInputType = this.blurFirstInputType.bind(this)
        this.blurSecondInputType = this.blurSecondInputType.bind(this)
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
                    <div>
                        <div className="check-in-booking" onFocus={this.focusFirstInputType} onBlur={this.blurFirstInputType}>
                            <label>CHECK-IN</label>
                            <input type={this.state.firstInputType} placeholder="Add date" />
                        </div>
                            <div className="check-out-booking" onFocus={this.focusSecondInputType} onBlur={this.blurSecondInputType}>
                            <label>CHECKOUT</label>
                            <input type={this.state.secondInputType} placeholder="Add date"/>
                        </div>
                    </div>
                    <div>
                        <label>GUESTS</label>
                        <div>
                            <p defaultValue={'1 guest'}></p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default BookingBox;