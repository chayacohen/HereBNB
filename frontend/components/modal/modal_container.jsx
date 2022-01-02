import { connect } from "react-redux";
import Modal from './modal'; 
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    modal: state.ui.modal
});


const mapDispatchToProps = (dispatch) => ({
     openModal: (modal) => dispatch(openModal(modal)), 
     closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal)) 