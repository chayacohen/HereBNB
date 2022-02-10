import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingItem from "./booking_item";
import { requestBooking } from "../../actions/booking_actions";
import { requestListing } from "../../actions/listing_actions";


const mapStateToProps = (state, ownProps) => ({
    booking: state.entities.bookings[ownProps.match.params.id],
    listings: state.entities.listings, 
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    requestBooking: (bookingId) => dispatch(requestBooking(bookingId)),
    requestListing: (listingId) => dispatch(requestListing(listingId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingItem))