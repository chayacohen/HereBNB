function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  var store;

  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(Root, {
    store: store
  }), root); //For Testing Only!!! 

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});