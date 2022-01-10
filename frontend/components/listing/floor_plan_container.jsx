import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveFloorPlan } from "../../actions/create_listing_actions";
import FloorPlan from "./floor_plan";

// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id]
// })

const mapDispatchToProps = (dispatch) => ({
    receiveFloorPlan: (floorPlan) => dispatch(receiveFloorPlan(floorPlan))
})

export default withRouter(connect(null, mapDispatchToProps)(FloorPlan))