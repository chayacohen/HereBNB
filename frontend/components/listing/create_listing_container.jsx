import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receivePlaceType } from "../../actions/create_listing_actions";
import CreateListing from "./create_listing";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    receivePlaceType: (placeType) => dispatch(receivePlaceType(placeType))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateListing))