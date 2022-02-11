import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestBooking, updateBooking } from "../../actions/booking_actions";
import { requestListing } from "../../actions/listing_actions";
import EditBooking from "./edit_booking";


const mapStateToProps = (state, ownProps) => ({
    booking: state.entities.bookings[ownProps.match.params.id], 
    listings: state.entities.listings, 
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    updateBooking: (booking) => dispatch(updateBooking(booking)), 
    requestBooking: (bookingId) => dispatch(requestBooking(bookingId)), 
    requestListing: (listingId) => dispatch(requestListing(listingId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBooking))