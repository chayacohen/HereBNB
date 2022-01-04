import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    email: state.ui.currentEmail.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)), 
    closeModal: () => dispatch(closeModal()), 
    resetSessionErrors: () => dispatch(resetSessionErrors())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm); 