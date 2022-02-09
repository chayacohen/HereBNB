import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listingReducer from "./listings_reducer";
import bookingReducer from "./booking_reducer";
const entitiesReducer = combineReducers({
    users: usersReducer, 
    listings: listingReducer, 
    bookings: bookingReducer
})

export default entitiesReducer; 