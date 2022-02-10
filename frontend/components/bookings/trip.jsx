import React from "react"; 
import BookingIndexItemContainer from './booking_index_item_container'; 

class Trip extends React.Component {

    handleSearchClick(e) {
        e.preventDefault(); 
        this.props.history.push("/")
    }

    componentDidMount() {
        this.props.requestAllBookings({guest: this.props.userId})
    }
    render() {
        if (!this.props.bookings.length) {
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
            <h1>Trips</h1>
            <h2>Upcoming Reservations</h2>
                <ul className="booking-index">
                    {this.props.bookings.map((booking, index) => (
                        <BookingIndexItemContainer booking={booking} key={index}/>
                    )
                    )}
                </ul>     
        </div>)
    }
}

export default Trip; 

