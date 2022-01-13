export const RECEIVE_PLACE_TYPE = "RECEIVE_PLACE_TYPE"; 
export const RECEIVE_SPECIFIC_TYPE = "RECEIVE_SPECIFIC_TYPE"; 
export const RECEIVE_PRIVACY_TYPE = "RECEIVE_PRIVACY_TYPE"; 
export const RECEIVE_LOCATION = "RECEIVE_LOCATION"; 
export const RECEIVE_FLOOR_PLAN = "RECEIVE_FLOOR_PLAN"; 
export const RECEIVE_LISTING_PHOTOS = "RECEIVE_LISTING_PHOTOS"; 
export const CLEAR_FORM = "CLEAR_FORM"; 



export const receivePlaceType = (placeType) => ({
    type: RECEIVE_PLACE_TYPE, 
    placeType
})


export const receiveSpecificType = (specificType) => {
    return {
    type: RECEIVE_SPECIFIC_TYPE, 
    specificType
}}

export const receivePrivacyType = (privacyType) => {
    return {
    type: RECEIVE_PRIVACY_TYPE, 
    privacyType
}}


export const receiveLocation = (location) => {
    return {
    type: RECEIVE_LOCATION, 
    location
}}

export const receiveFloorPlan = (floorPlan) => {
    return {
    type: RECEIVE_FLOOR_PLAN, 
    floorPlan
}}

export const receiveListingPhotos = (photos) => {
    return {
        type: RECEIVE_LISTING_PHOTOS, 
        photos
    }
}

export const clearForm = () => {
    return {
        type: CLEAR_FORM, 
    }
}