import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveFloorPlan } from "../../actions/create_listing_actions";
import FloorPlan from "./floor_plan";

const mapStateToProps = (state) => ({
    place: state.ui.createListingForm.place
})

const mapDispatchToProps = (dispatch) => ({
    receiveFloorPlan: (floorPlan) => dispatch(receiveFloorPlan(floorPlan))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FloorPlan))