import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "login"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)), 
    closeModal: () => dispatch(openModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 