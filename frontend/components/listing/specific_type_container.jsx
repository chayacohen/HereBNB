import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveSpecificType } from "../../actions/create_listing_actions";
import ApartmentType from "./specific_type";

const mapDispatchToProps = (dispatch) => ({
    receiveSpecificType: (specificType) => dispatch(receiveSpecificType(specificType))
})

export default withRouter(connect(null, mapDispatchToProps)(ApartmentType));