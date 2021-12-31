import { connect } from "react-redux";
import Header from "./header";
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header)); 
