import { RECEIVE_PLACE_TYPE } from "../actions/create_listing_actions";

const defaultState = {placeType: ''}

const CreateListingReducer = (state = defaultState, action) => {
    Object.freeze(state); 

    switch(action.type) {
        case RECEIVE_PLACE_TYPE: 
            return Object.assign({}, state, {placeType: action.placeType})
        default: 
            return state; 
    }
}

export default CreateListingReducer; 