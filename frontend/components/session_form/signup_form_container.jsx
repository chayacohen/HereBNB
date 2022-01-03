import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signup(user)), 
    closeModal: () => dispatch(closeModal())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm)) 