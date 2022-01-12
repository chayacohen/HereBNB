import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createListing, requestAllUserListings, addListingPhotos} from '../../actions/listing_actions';
import CompleteListing from './complete_listing_form'; 
import {clearForm } from "../../actions/create_listing_actions";
import { closeModal, openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => ({
    listingForm: state.ui.createListingForm, 
    currentUser: state.entities.users[state.session.id],
    listings: Object.values(state.entities.listings), 
    place: state.ui.createListingForm.place
    
})

const mapDispatchToProps = (dispatch) => ({
    createListing: (listing) => dispatch(createListing(listing)), 
    addListingPhotos: (listingId, formData) => dispatch(addListingPhotos(listingId, formData)),
    clearForm: () => dispatch(clearForm()), 
    openModal: (modal) => dispatch(openModal(modal)), 
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompleteListing));