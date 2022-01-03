import React from "react";
import ReactDOM from "react-dom"; 
import Root from "./components/root";
import configureStore from "./store/store";
import {openModal} from './actions/modal_actions'
import { findUser } from './util/user_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root"); 
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store}/>, root); 

    //For Testing Only!!! 

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.openModal = openModal;
    window.findUser = findUser
})