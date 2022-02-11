import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBooking } from "../../actions/booking_actions";
import { openModal } from "../../actions/modal_actions";
import BookingBox from "./booking_box";

const mapStateToProps = (state) => ({
    userId: state.session.id
})
const mapDispatchToProps = (dispatch) => ({
    createBooking: (booking) => dispatch(createBooking(booking)), 
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingBox));