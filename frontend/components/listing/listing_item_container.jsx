import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestListing } from "../../actions/listing_actions";
import ListingItem from "./listing_item";


const mapStateToProps = (state, ownProps) => ({
   listing: state.entities.listings[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    requestListing: (listingId) => dispatch(requestListing(listingId)), 
    requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingItem))