import React from "react"


class Trip extends React.Component {

    handleSearchClick(e) {
        e.preventDefault(); 
        this.props.history.push("/")
    }

    componentDidMount() {
        this.props.requestAllBookings({guest: this.props.userId})
    }
    render() {
        if (!this.props.bookings || !Object.keys(this.props.bookings).length) {
            return(
                <div className="booking-listing-index">
                    <div className="no-trip-container">
                        <h1>Trips</h1>
                        <div className="no-trip-info">
                            <h1>No trips booked...yet!</h1>
                            <p>Time to dust off your bags and start planning your next adventure</p>
                            <button onClick={this.handleSearchClick.bind(this)}>Start searching</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
        <div className="booking-listing-index">
            
        </div>)
    }
}

export default Trip; 

