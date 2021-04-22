import {combineReducers} from 'redux';
import userReducer from './User/User.reducer'
import requestReducer from "./Request/Request.reducer"
import appointReducer from "./Appointments/Appoint.reducer"

export default combineReducers ({
   user:userReducer,
   request:requestReducer,
   appoint:appointReducer

})