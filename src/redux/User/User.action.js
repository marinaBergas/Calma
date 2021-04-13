import userType from './User.type';


export const setCurrentUser = user =>({
    type : userType.SET_CURRENT_USER ,
    payload : user
})