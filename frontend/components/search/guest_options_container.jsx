import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeGuestTab, receiveAdult, receiveChild, receiveInfant, removeAdult, removeChild, removeInfant } from "../../actions/guest_actions";
import GuestOptions from "./guest_options";


const mapStateToProps = (state) => ({
     adult: state.ui.guests.adult,
     child: state.ui.guests.child,
     infant: state.ui.guests.infant,
 })

const mapDispatchToProps = (dispatch) => ({
    receiveAdult: () => dispatch(receiveAdult()),
    receiveChild: () => dispatch(receiveChild()),
    receiveInfant: () => dispatch(receiveInfant()),
    removeAdult: () => dispatch(removeAdult()),
    removeChild: () => dispatch(removeChild()),
    removeInfant: () => dispatch(removeInfant()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuestOptions))