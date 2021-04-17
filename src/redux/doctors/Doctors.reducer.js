import doctorTypes from "./Doctors.types"
const INITIAL_STATE = {
    Doctors : null ,
}
const doctorsReducer  = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case doctorTypes.SET_NEW_DOCTOR :
            return {
                ...state , Doctors : action.payload
            }
        
        default :
        return state
    }
}
export default doctorsReducer 