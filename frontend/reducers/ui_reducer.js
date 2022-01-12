import { combineReducers } from "redux";
import emailReducer from "./email_reducer";
import modalReducer from "./modal_reducer";
import createListingReducer from "./create_listing_reducer";

const uiReducer = combineReducers({
    modal: modalReducer, 
    currentEmail: emailReducer, 
    createListingForm: createListingReducer
})

export default uiReducer; 