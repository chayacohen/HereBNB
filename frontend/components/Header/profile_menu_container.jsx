import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import ProfileMenu from "./profile_menu";
import { logout } from '../../actions/session_actions';




const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)), 
    logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu); 
