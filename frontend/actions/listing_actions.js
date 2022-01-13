import * as ListingApiUtil from '../util/listing_util'; 

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"; 
export const RECEIVE_LISTING = "RECEIVE_LISTING"; 
export const REMOVE_LISTING = "REMOVE_LISTING"; 
// export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS"


const receiveAllListings = (listings) => ({
    type: RECEIVE_ALL_LISTINGS, 
    listings
})

const receiveListing = (listing, host) => ({
    type: RECEIVE_LISTING, 
    listing, 
    user: host 
})

const removeListing = (listingId) => ({
    type: REMOVE_LISTING, 
    listingId
})

// const receiveUserListings = (listings) => ({
//     method: RECEIVE_USER_LISTINGS, 
//     listings
// })

export const requestAllListings = (bounds) => dispatch => {
    ListingApiUtil.fetchAllListings(bounds)
    .then((listings) => dispatch(receiveAllListings(listings)))
}

export const requestListing = (listingId) => dispatch => {
    return (
        ListingApiUtil.fetchListing(listingId)
        .then(({listing, host}) => { 
            return (
                dispatch(receiveListing(listing, host)))
            })
    )
}

export const updateListing = (listing) => dispatch => (
    ListingApiUtil.updateListing(listing)
    .then(({listing, host}) => dispatch(receiveListing(listing, host)))
)

export const addListingPhotos = (listingId, formData) => dispatch => (
    ListingApiUtil.addListingPhotos(listingId, formData)
    .then(({listing, host}) => dispatch(receiveListing(listing, host)))
)

export const createListing = (listing) => dispatch => {
    return (
    ListingApiUtil.createListing(listing)
    .then(({ listing, host }) => { 
        return (
        dispatch(receiveListing(listing, host)))
    })
)}
export const deleteListing = (listingId) => dispatch => (
    ListingApiUtil.deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId)))
)

export const requestAllUserListings = (userId) => dispatch => (
    ListingApiUtil.fetchUserListings(userId)
    .then((listings) => dispatch(receiveAllListings(listings)))
)