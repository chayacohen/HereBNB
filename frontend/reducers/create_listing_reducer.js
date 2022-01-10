import { RECEIVE_PLACE_TYPE, RECEIVE_SPECIFIC_TYPE, RECEIVE_PRIVACY_TYPE } from "../actions/create_listing_actions";

const defaultState = {place: '', specific: '', privacy: '', streeet: '', city: '', state: '', country: '', zip_code: ''}

const CreateListingReducer = (state = defaultState, action) => {
    Object.freeze(state); 

    switch(action.type) {
        case RECEIVE_PLACE_TYPE: 
            return Object.assign({}, state, {place: action.placeType})
        case RECEIVE_SPECIFIC_TYPE: 
            return Object.assign({}, state, { specific: action.specificType })
        case RECEIVE_PRIVACY_TYPE: 
            return Object.assign({}, state, { privacy: action.privacyType })
        case RECEIVE_LOCATION: 
            const address = action.location.split(',')
            return Object.assign({}, state, { street: address[0], city: address[1], state: address[2], country: address[3], zip_code: address[4] })
        default: 
            return state; 
    }
}

export default CreateListingReducer; 