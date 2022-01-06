import * as UserAPIUtil from '../util/user_util'; 
import { receiveCurrentUser } from './session_actions';


export const RECEIVE_USER = "RECEIVE_USER"; 
export const UPDATE_USER = "UPDATE_USER"

const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

const updateAUser = (user) => ({
    type: UPDATE_USER, 
    user
})

export const findUser = (email) => dispatch => (
    UserAPIUtil.findUser(email)
    .then(user => dispatch(receiveUser(user)))
)

export const updateUser = (user) => dispatch => (
    UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)