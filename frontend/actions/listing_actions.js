import * as ListingApiUtil from '../util/listing_util'; 

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"; 
export const RECEIVE_LISTING = "RECEIVE_LISTING"; 
export const REMOVE_LISTING = "REMOVE_LISTING"; 


const receiveAllListings = (listings) => ({
    type: RECEIVE_ALL_LISTINGS, 
    listings
})

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING, 
    listing
})

const removeListing = (listingId) => ({
    type: REMOVE_LISTING, 
    listingId
})

export const requestAllListings = () => dispatch => {
    ListingApiUtil.fetchAllListings()
    .then((listings) => dispatch(receiveAllListings(listings)))
}

export const requestListing = (listingId) => dispatch => (
    ListingApiUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
)
export const updateListing = (listing) => dispatch => (
    ListingApiUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)
export const createListing = (listing) => dispatch => (
    ListingApiUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)
export const deleteLising = (listingId) => dispatch => (
    ListingApiUtil.fetchAllListings(listingId)
    .then(() => dispatch(removeListing(listingId)))
)