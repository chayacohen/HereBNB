import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SpecificType from "./specific_type";
import { requestListing, updateListing } from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id]
})
 
const mapDispatchToProps = (dispatch) => ({
    updateListing: (listing) => dispatch(updateListing(listing)), 
    requestListing: (listingId) => dispatch(requestListing(listingId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecificType));