import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signup(user)), 
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm); 