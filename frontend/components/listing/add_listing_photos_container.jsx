import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateListingPhotos from "./add_listing_photos";
import { requestListing, addListingPhotos } from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    requestListing: (listingId) => dispatch(requestListing(listingId)),
    addListingPhotos: (listingId, formData) => dispatch(addListingPhotos(listingId, formData)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateListingPhotos))