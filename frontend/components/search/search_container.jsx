import { connect } from "react-redux"; 
import Search from "./search";  
import { withRouter } from "react-router-dom";
import { changeGuestTab } from "../../actions/guest_actions";

const mapStateToProps = (state) => ({
    adult: state.ui.guests.adult,
    child: state.ui.guests.child,
    infant: state.ui.guests.infant, 
    guestTab: state.ui.guestTab
})

const mapDispatchToProps = (dispatch) => ({
    changeGuestTab: (string) => dispatch(changeGuestTab(string))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));