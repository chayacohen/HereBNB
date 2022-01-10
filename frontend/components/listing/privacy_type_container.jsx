import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receivePrivacyType } from "../../actions/create_listing_actions";
import PrivacyType from "./privacy_type";

const mapStateToProps = (state) => ({
    place: state.ui.createListingForm.place
})


const mapDispatchToProps = (dispatch) => ({
    receivePrivacyType: (privacyType) => dispatch(receivePrivacyType(privacyType))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivacyType));