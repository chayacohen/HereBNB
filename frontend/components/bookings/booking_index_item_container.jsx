import BookingIndexItem from './booking_index_item'; 
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { requestListing } from '../../actions/listing_actions';

const mapStateToProps = (state) => ({
    listings: state.entities.listings, 
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    requestListing: (listingId) => dispatch(requestListing(listingId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndexItem))