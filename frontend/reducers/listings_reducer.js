import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING} from '../actions/listing_actions'; 


const listingReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            return Object.assign({}, action.listings);
        case RECEIVE_LISTING:
            debugger 
            return Object.assign({}, state, {[action.listing.id]: action.listing});
        case REMOVE_LISTING:
            const nextState = Object.assign({}, state); 
            delete nextState[action.listingId]
            return nextState; 
        default:
            return state;
    }
}

export default listingReducer;