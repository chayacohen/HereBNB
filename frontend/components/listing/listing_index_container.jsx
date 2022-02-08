import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestAllListings, requestListing } from "../../actions/listing_actions";
import { requestAllUsers } from "../../actions/user_actions";
import ListingIndex from "./listing_index";

const mapStateToProps = (state) => ({
    listings: Object.values(state.entities.listings), 
    guests: state.ui.guests.adult + state.ui.guests.child
})


const mapDispatchToProps = (dispatch) => ({
    requestAllListings: (filters) => dispatch(requestAllListings(filters)), 
    requestListing: (listing) => dispatch(requestListing(listing)),
    requestAllUsers: () => dispatch(requestAllUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex))