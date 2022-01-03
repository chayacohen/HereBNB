import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)), 
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm); 