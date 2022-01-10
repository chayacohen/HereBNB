import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestAllUserListings } from "../../actions/listing_actions";
import { requestUser } from "../../actions/user_actions";
import UserListingIndex from "./users_listings_index";

const mapStateToProps = (state, ownProps) => ({
    listings: Object.values(state.entities.listings), 
    currentUser: state.entities.users[state.session.id]
})


const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllUserListings: (userId) => dispatch(requestAllUserListings(userId)),
    requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserListingIndex))
