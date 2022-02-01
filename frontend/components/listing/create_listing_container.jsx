import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createListing } from "../../actions/listing_actions";
import CreateListing from "./create_listing";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    createListing: (listing) => dispatch(createListing(listing))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateListing))