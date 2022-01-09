import { receiveCurrentUser } from './session_actions';
import * as UserApiUtil from '../util/user_util'

export const UPDATE_USER = "UPDATE_USER"
export const RECEIVE_USER = "RECEIVE_USER"; 
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"; 
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RESET_USER_ERRORS = "RESET_USER_ERRORS";

// const updateAUser = (user) => ({
//     type: UPDATE_USER, 
//     user
// })
const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})
const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS, 
    users
})

const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const resetUserErrors = () => ({
    type: RESET_USER_ERRORS
});



export const findUser = (email) => dispatch => (
    UserApiUtil.findUser(email)
    .then(user => dispatch(receiveUser(user)), (errors => dispatch(receiveUserErrors(errors.responseJSON))))
)

export const requestUser = (userId) => dispatch => {
    return (
        UserApiUtil.fetchUser(userId)
        .then(user => {
            return (
                dispatch(receiveUser(user)), (errors => dispatch(receiveUserErrors(errors.responseJSON)))
            )
        })
    )

}

export const requestAllUsers = () => dispatch => {
    return (
        UserApiUtil.fetchAllUsers()
            .then(users => dispatch(receiveAllUsers(users)), (errors => dispatch(receiveUserErrors(errors.responseJSON)))
        )
    )
}


export const updateUser = (user) => dispatch => (
    UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveCurrentUser(user)), (errors => dispatch(receiveUserErrors(errors.responseJSON))))
)