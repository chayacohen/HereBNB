import { combineReducers } from "redux";
import emailReducer from "./email_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
    modal: modalReducer, 
    currentEmail: emailReducer
})

export default uiReducer; 