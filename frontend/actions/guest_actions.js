export const RECEIVE_ADULT = "RECEIVE_ADULT"; 
export const RECEIVE_INFANT = "RECEIVE_INFANT"; 
export const RECEIVE_CHILD = "RECEIVE_CHILD"; 
export const REMOVE_ADULT = "REMOVE_ADULT"; 
export const REMOVE_INFANT = "REMOVE_INFANT"; 
export const REMOVE_CHILD = "REMOVE_CHILD"; 
export const CHANGE_TAB = "CHANGE_TAB"; 
export const RESET_GUESTS = "RESET_GUESTS"; 


export const receiveAdult = () => ({
    type: RECEIVE_ADULT, 
})

export const receiveInfant = () => ({
    type: RECEIVE_INFANT, 
})

export const receiveChild = () => ({
    type: RECEIVE_CHILD, 
})

export const changeGuestTab = (string) => ({
    type: CHANGE_TAB,
    string 
})

export const removeAdult = () => ({
    type: REMOVE_ADULT, 
})
export const removeInfant = () => ({
    type: REMOVE_INFANT, 
})
export const removeChild = () => ({
    type: REMOVE_CHILD, 
})

export const resetGuests = () => ({
    type: RESET_GUESTS
})
