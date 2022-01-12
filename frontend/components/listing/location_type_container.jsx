import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveLocation } from "../../actions/create_listing_actions";
import LocationType from "./location_type";

const mapStateToProps = state => ({
    place: state.ui.createListingForm.place
})

const mapDispatchToProps = (dispatch) => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationType));