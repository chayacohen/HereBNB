import React from "react";


class BookingGuest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {adult: 1, child: 0, infant: 0}
        this.handleMinusClick = this.handleMinusClick.bind(this); 
        this.handlePlusClick = this.handlePlusClick.bind(this);
        this.tabReturn = this.tabReturn.bind(this);  
    }

    handleMinusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.state.adult !== 1) {
                    this.setState({ adult: this.state.adult -= 1 })
                    this.tabReturn()
                }
            }
            else if (field === "child") {
                if (this.state.child !== 0) {
                    this.setState({ child: this.state.child -= 1 })
                    this.tabReturn()
                }
            }
            else if (field === "infant") {
                if (this.state.infant !== 0) {
                    this.setState({ infant: this.state.infant -= 1 })
                    this.tabReturn()
                }
            }
        }
    }

    tabReturn() {
        const sing = this.state.infant === 1 ? `, ${this.state.infant} infant` : `, ${this.state.infant} infants`;
        const infantString = this.state.infant > 0 ? sing : '';
        const tab = this.state.adult === 1 && this.state.child === 0 ? `${this.state.adult} guest${infantString}` : `${this.state.adult + this.state.child} guests${infantString}`;
        this.props.changeGuestTab(tab); 
    }


    handlePlusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.state.adult + this.state.child < this.props.listing.guests)
                this.setState({ adult: this.state.adult += 1 })
                this.tabReturn()
            }
            else if (field === "child") {
                if (this.state.adult + this.state.child < this.props.listing.guests)
                    this.setState({ child: this.state.child += 1 })
                    this.tabReturn()
            }
            else if (field === "infant") {
                if (this.state.infant < 5) {
                    this.setState({ infant: this.state.infant += 1 })
                    this.tabReturn()
                }
            }
        }
    }


    render() {

        const listing = this.props.listing 
        if (!listing) {
            return null 
        }

         return (
        <div className="booking-guest-container" onClick={(e) => { e.stopPropagation() }}>
            <div className="booking-guest-options">
                <div className='booking-adult-option'>
                    <div className="booking-guest-left-option">
                        <p className="booking-guest-option-header">Adults</p>
                        <p className='booking-guest-option-description'>Age 13+</p>
                    </div>
                     <div className='booking-option'>
                        <p className="count" 
                        onClick={this.handleMinusClick("adult")}
                        >-</p>
                        <p className="number">{this.state.adult}</p>
                        <p className="count" 
                        onClick={this.handlePlusClick("adult")}
                        >+</p>
                    </div>
                </div>
                <div className='booking-child-option'>
                    <div className="booking-guest-left-option">
                        <p className="booking-guest-option-header">Children</p>
                        <p className='booking-guest-option-description'>Ages 2-12</p>
                    </div>
                    <div className='booking-option'>
                        <p className="count" 
                        onClick={this.handleMinusClick("child")}
                        >-</p>
                        <p className="number">{this.state.child}</p>
                        <p className="count" 
                        onClick={this.handlePlusClick("child")}
                        >+</p>
                    </div>
                </div>
                <div className='booking-infant-option'>
                    <div className="booking-guest-left-option">
                        <p className="booking-guest-option-header">Infants</p>
                        <p className='booking-guest-option-description'>Under 2</p>
                    </div>
                    <div className='booking-option'>
                        <p className="count" 
                        onClick={this.handleMinusClick("infant")}
                        >-</p>
                        <p className="number">{this.state.infant}</p>
                        <p className="count" 
                        onClick={this.handlePlusClick("infant")}
                        >+</p>
                    </div>
                </div>
                <p className="booking-guest-statement">{`This place has a maximum of ${this.props.listing.guests} guests, not including infants.`}</p>
            </div>
        </div>
        )
    }
}

export default BookingGuest; 