import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestListing } from "../../actions/listing_actions";
import { requestAllUsers } from "../../actions/user_actions";
import ListingItem from "./listing_item";

const mapStateToProps = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.id];
    return ({
        listing: listing, 
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => ({
    requestListing: (listingId) => dispatch(requestListing(listingId)), 
    requestAllUsers: () => dispatch(requestAllUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingItem))