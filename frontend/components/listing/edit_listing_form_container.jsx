import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestListing, updateListing } from "../../actions/listing_actions";
import { requestUser } from "../../actions/user_actions";
import EditListingForm from "./edit_listing_form";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id], 
    listing: state.entities.listings[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    updateListing: (listing) => dispatch(updateListing(listing)), 
    requestListing: (listingId) => dispatch(requestListing(listingId)), 
    requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditListingForm))