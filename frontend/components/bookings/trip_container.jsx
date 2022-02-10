import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestAllBookings } from "../../actions/booking_actions";
import Trip from "./trip";

const mapStateToProps = (state) => ({
    userId: state.session.id, 
    bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = (dispatch) => ({
    requestAllBookings: (data) => dispatch(requestAllBookings(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trip))