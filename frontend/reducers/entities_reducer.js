import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listingReducer from "./listings_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer, 
    listings: listingReducer
})

export default entitiesReducer; 