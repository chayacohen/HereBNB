import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveListingPhotos} from "../../actions/create_listing_actions";
import CreateListingPhotos from "./add_listing_photos";


const mapStateToProps = (state) => ({
    place: state.ui.createListingForm.place
})

const mapDispatchToProps = (dispatch) => ({
    receiveListingPhotos: (photos) => dispatch(receiveListingPhotos(photos))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateListingPhotos))