import { receiveCurrentUser } from './session_actions';
import * as UserApiUtil from '../util/user_util'

export const RECEIVE_USER = "RECEIVE_USER"; 
export const UPDATE_USER = "UPDATE_USER"

const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

// const updateAUser = (user) => ({
//     type: UPDATE_USER, 
//     user
// })

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


export const updateUser = (user) => dispatch => (
    UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)