import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingItem from "./booking_item";
import { deleteBooking, requestBooking } from "../../actions/booking_actions";
import { requestListing } from "../../actions/listing_actions";


const mapStateToProps = (state, ownProps) => ({
    booking: state.entities.bookings[ownProps.match.params.id],
    listings: state.entities.listings, 
    users: state.entities.users, 
    userId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    requestBooking: (bookingId) => dispatch(requestBooking(bookingId)),
    requestListing: (listingId) => dispatch(requestListing(listingId)), 
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingItem))