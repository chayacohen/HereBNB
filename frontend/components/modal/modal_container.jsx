import { connect } from "react-redux";
import Modal from './modal'; 
import { openModal, closeModal } from "../../actions/modal_actions";
import { resetSessionErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    modal: state.ui.modal, 
    errors: state.errors.session
});


const mapDispatchToProps = (dispatch) => ({
     openModal: (modal) => dispatch(openModal(modal)), 
     closeModal: () => dispatch(closeModal()), 
     resetSessionErrors: () => dispatch(resetSessionErrors())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal)) 