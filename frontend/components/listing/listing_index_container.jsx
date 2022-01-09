import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestAllListings, requestListing } from "../../actions/listing_actions";
import { requestAllUsers } from "../../actions/user_actions";
import ListingIndex from "./listing_index";

const mapStateToProps = (state) => ({
    listings: Object.values(state.entities.listings)
})


const mapDispatchToProps = (dispatch) => ({
    requestAllListings: () => dispatch(requestAllListings()), 
    requestListing: (listing) => dispatch(requestListing(listing)),
    requestAllUsers: () => dispatch(requestAllUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex))