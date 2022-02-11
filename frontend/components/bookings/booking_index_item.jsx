import React from "react";

class BookingIndexItem extends React.Component {

    componentDidMount() {
        this.props.requestListing(this.props.booking.listing_id).then(listing => {
            debugger 
        })
        debugger
    }

    handleBookingClick() {
        this.props.history.push(`/bookings/${this.props.booking.id}`)
    }

    render () {
        if (!Object.values(this.props.listings).length) {
            return null; 
        }
        const listing = this.props.listings[this.props.booking.listing_id]
        if(!listing) {
            return null
        } 
        const host = this.props.users[listing.host_id]
        const months = {"01": "Jan", "02":"Feb", "03": "Mar", "04":"Apr", "05":"May", "06":"Jun", "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"}
        const bookingStartDate = this.props.booking.start_date.split("-")
        const bookingEndDate = this.props.booking.end_date.split("-")
        const startMonth = months[bookingStartDate[1]]
        const endMonth = months[bookingEndDate[1]]
        return (
            <div className="booking-item" onClick={this.handleBookingClick.bind(this)}>
                <div className="left-booking-item">
                    <div className="top-left-booking-item">
                        <h1>{listing.city}</h1>
                        <p>{`${listing.place.charAt(0).toUpperCase() + listing.place.slice(1)} hosted by ${host.first_name}`}</p>
                    </div>
                    <div className="bottom-left-booking-item">
                            <div className="bottom-left-left">
                                <div className="booking-item-dates">
                                    <div>
                                        <p>{startMonth}</p>
                                        <p>{bookingStartDate[2]}</p>
                                    </div>
                                    <p> - </p>
                                    <div>
                                        <p>{endMonth}</p>
                                        <p>{bookingEndDate[2]}</p> 
                                    </div>
                                </div>
                                <div className="booking-year">
                                    <p>{bookingStartDate[0]}</p>
                                </div>
                            </div>
                            <div className="bottom-left-right">
                                <p>{listing.street}</p>
                                <p>{`${listing.city}, ${listing.state}`}</p>
                                <p>United States</p>
                            </div>
                    </div>
                </div>
                <div className="right-booking-item">
                    <img src={listing.photoUrls[0]} className="booking-listing-photo"/>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem; 