import { connect } from "react-redux";
import EmailForm from "./email_form";
import { closeModal, openModal } from "../../actions/modal_actions";
import { findUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session, 
        email: state.ui.currentEmail.email, 
        user: state.ui.currentEmail.user
    })
}

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)), 
    findUser: (email) => dispatch(findUser(email)), 
    login: (user) => dispatch(login(user)), 
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailForm))
