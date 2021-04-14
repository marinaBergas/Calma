import userType from "./User.type"

const INITIAL_STATE = {
    currentUser : null ,
    signInSuccess : false,
    signUPSuccess : false,
    signInWithGoogle : null
}

const userReducer  = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userType.SET_CURRENT_USER :
            return {
                ...state , currentUser : action.payload
            }
            
        case userType.SIGN_IN_SUCCESS:    
        return {
            ...state , signInSuccess : action.payload
        }
        case userType.SIGN_UP_SUCCESS:    
        return {
            ...state , signUPSuccess : action.payload
        }
        case userType.SIGN_IN_WITH_GOOGLE:    
        return {
            ...state , signUPSuccess : action.payload
        }
        case userType.SIGN_OUT_SUCCESS:    
        return {
            ...state , 
            currentUser : null ,
            signInSuccess : false,
            signUPSuccess : false,
        }
    
    
        default :
        return state    
    }

};
export default userReducer 