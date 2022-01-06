import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import UpdatePicForm from "./update_pic_form";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePicForm)
