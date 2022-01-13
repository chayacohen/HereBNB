import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestAllListings } from "../../actions/listing_actions";
import MapListingIndex from "./listing_map_index";

const mapStateToProps = (state) => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = (dispatch) => ({
    requestAllListings: (bounds) => dispatch(requestAllListings(bounds))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapListingIndex));