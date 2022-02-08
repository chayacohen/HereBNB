import {CHANGE_TAB, RECEIVE_ADULT, RECEIVE_CHILD, RECEIVE_INFANT, REMOVE_ADULT, REMOVE_CHILD, REMOVE_INFANT} from '../actions/guest_actions'; 


const guestReducer = (state = {adult: 0, child: 0, infant: 0, guestTab: "Add guests"}, action) => {
    Object.freeze(state); 
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ADULT: 
            return Object.assign({}, state, {adult: nextState.adult += 1}); 
        case RECEIVE_CHILD: 
            return Object.assign({}, state, { child: nextState.child += 1 }); 
        case RECEIVE_INFANT: 
            return Object.assign({}, state, { infant: nextState.infant += 1 }); 
        case REMOVE_ADULT: 
            return Object.assign({}, state, { adult: nextState.adult -= 1 }); 
        case REMOVE_CHILD: 
            return Object.assign({}, state, { child: nextState.child -= 1 }); 
        case REMOVE_INFANT:
        return Object.assign({}, state, { infant: nextState.infant -= 1 });
        case CHANGE_TAB: 
            return Object.assign({}, state, {guestTab: action.string})
        default: 
            return state;  
    }

}

export default guestReducer; 