import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
class EditBooking extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogoClick = this.handleLogoClick.bind(this)
        this.handleExitClick = this.handleExitClick.bind(this)
        this.state = {disabled: true}
    }

    handleLogoClick() {
        this.props.history.push("/"); 
    }

    handleExitClick() {
        this.props.history.push(`/bookings/${this.props.match.params.id}`); 
    }

    render() {
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
                        <p>After making your desired changes, your host, {`host_name`}, will confirm the alterations to your reservation.</p>
                        <div className="edit-booking-details">
                        </div>
                        <h2>Reservation details</h2>
                        <p>Dates</p>
                        <div className="check-in-out">
                            <div>
                                <label>Check in</label>
                                <input type="date" defaultValue="booking-date"/>
                            </div>
                            <div>
                                <label>Check out</label>
                                <input type="date" defaultValue="booking-date"/>
                            </div>
                        </div>
                        <p>Guests</p>
                    </div>
                    <div>
                        <button className="non-active-request" disabled={this.state.disabled}>Send Request</button>
                    </div>
                </div>
                <div className="right-edit-booking">
                </div>
            </div>
        )
    }
}

export default EditBooking; 