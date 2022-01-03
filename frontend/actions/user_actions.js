import * as UserAPIUtil from '../util/user_util'; 


export const RECEIVE_USER = "RECEIVE_USER"; 

const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

export const findUser = (email) => dispatch => (
    UserAPIUtil.findUser(email)
    .then(user => dispatch(receiveUser(user)))
)