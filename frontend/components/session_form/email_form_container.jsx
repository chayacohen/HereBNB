import { connect } from "react-redux";
import EmailForm from "./email_form";
import { openModal } from "../../actions/modal_actions";
import { findUser } from "../../util/user_util";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session, 
    })
}

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)), 
    findUser: (email) => findUser(email)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailForm))
