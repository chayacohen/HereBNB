import { receiveCurrentUser } from './session_actions';
import * as UserApiUtil from '../util/user_util'

export const UPDATE_USER = "UPDATE_USER"
export const RECEIVE_USER = "RECEIVE_USER"; 
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"; 

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


export const findUser = (email) => dispatch => (
    UserApiUtil.findUser(email)
    .then(user => dispatch(receiveUser(user)))
)

export const requestUser = (userId) => dispatch => {
    return (
        UserApiUtil.fetchUser(userId)
        .then(user => {
            return (
                dispatch(receiveUser(user))
            )
        })
    )

}

export const requestAllUsers = () => dispatch => {
    return (
        UserApiUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users))
        )
    )
}


export const updateUser = (user) => dispatch => (
    UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)