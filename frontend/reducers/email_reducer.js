import { RECEIVE_USER } from "../actions/user_actions";

const emailReducer = (state = {email: false}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.user;
        default:
            return state;
    }
}

export default emailReducer; 