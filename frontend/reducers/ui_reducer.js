import { combineReducers } from "redux";
import emailReducer from "./email_reducer";
import modalReducer from "./modal_reducer";
import guestReducer from "./guest_reducer";

const uiReducer = combineReducers({
    modal: modalReducer, 
    currentEmail: emailReducer,
    guests: guestReducer 
})

export default uiReducer; 