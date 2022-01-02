import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import ProfileMenu from "./profile_menu";



const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)); 
