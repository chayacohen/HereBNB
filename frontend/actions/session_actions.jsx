import * as SessionUtil from '../util/session_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors 
})


export const login = (user) => dispatch =>  (
    SessionUtil.login(user)
        .then((user => dispatch(receiveCurrentUser(user))), (errors => dispatch(receiveSessionErrors(errors.responseJSON))))
);

export const signup = (user) => dispatch => (
    SessionUtil.signup(user) 
        .then((user => dispatch(receiveCurrentUser(user))), (errors => dispatch(receiveSessionErrors(errors.responseJSON))))
);
    
export const logout = () => dispatch => (
        SessionUtil.logout()
        .then((() => dispatch(logoutCurrentUser())))
)