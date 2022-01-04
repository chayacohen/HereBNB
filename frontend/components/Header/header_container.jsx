import { connect } from "react-redux";
import Header from "./header";
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import { handleEventListener } from "../../selectors/selectors";


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()), 
    openModal: (modal) => dispatch(openModal(modal)),
    handleEventListener: () => dispatch(handleEventListener())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header)); 
