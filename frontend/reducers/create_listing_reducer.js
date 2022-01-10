import { RECEIVE_PLACE_TYPE, RECEIVE_SPECIFIC_TYPE, RECEIVE_PRIVACY_TYPE, RECEIVE_LOCATION, RECEIVE_FLOOR_PLAN} from "../actions/create_listing_actions";

const defaultState = {}

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
            const address = action.location
            return Object.assign({}, state, { street: address.address, city: address.city, state: address.state, country: address.country, zip_code: address.zipCode, lat: address.lat, lng: address.lng})
        case RECEIVE_FLOOR_PLAN: 
            const floorPlan = action.floorPlan
            return Object.assign({}, state, {guests: floorPlan.guests, num_beds: action.floorPlan.beds, bath: action.floorPlan.bathrooms})
        default: 
            return state; 
    }
}

export default CreateListingReducer; 