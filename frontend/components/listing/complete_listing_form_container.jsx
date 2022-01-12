import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createListing, updateListing, requestAllListings} from '../../actions/listing_actions'; 
import CompleteListing from './complete_listing_form'; 
import {clearForm } from "../../actions/create_listing_actions";


const mapStateToProps = (state) => ({
    listingForm: state.ui.createListingForm, 
    currentUser: state.entities.users[state.session.id],
    listings: Object.values(state.entities.listings), 
    place: state.ui.createListingForm.place
    
})

const mapDispatchToProps = (dispatch) => ({
    createListing: (listing) => dispatch(createListing(listing)), 
    requestAllListings: () => dispatch(requestAllListings()), 
    updateListing: (listing) => dispatch(updateListing(listing)), 
    clearForm: () => dispatch(clearForm())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompleteListing));