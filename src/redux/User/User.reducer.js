import userType from "./User.type"

const INITIAL_STATE = {
    currentUser : null 
}

const userReducer  = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userType.SET_CURRENT_USER :
            return {
                ...state , currentUser : action.payload
            }
            return
        default :
        return state    
    }

};
export default userReducer 