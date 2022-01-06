import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { withRouter } from "react-router-dom";
import { updateUser } from "../../util/user_util";



const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateUser: user => updateUser(user)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileForm)); 