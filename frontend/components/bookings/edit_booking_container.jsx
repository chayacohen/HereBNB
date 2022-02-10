import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateBooking } from "../../actions/booking_actions";
import EditBooking from "./edit_booking";


const mapStateToProps = (state, ownProps) => ({
    booking: state.entities.bookings[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    updateBooking: (booking) => dispatch(updateBooking(booking))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBooking))