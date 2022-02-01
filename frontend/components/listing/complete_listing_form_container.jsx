import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {requestListing, updateListing} from '../../actions/listing_actions';
import CompleteListing from './complete_listing_form'; 


const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.id,
    listing: state.entities.listings[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    updateListing: (listing) => dispatch(updateListing(listing)), 
    requestListing: (listing) => dispatch(requestListing(listing))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompleteListing));