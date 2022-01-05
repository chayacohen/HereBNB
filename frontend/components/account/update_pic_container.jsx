import { connect } from "react-redux";
import UpdatePicForm from "./update_pic_form";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})


export default connect(mapStateToProps)(UpdatePicForm)
