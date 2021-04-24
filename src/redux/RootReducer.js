import {combineReducers} from 'redux';
import userReducer from './User/User.reducer'
import requestReducer from "./Request/Request.reducer"
import appointReducer from "./Appointments/Appoint.reducer"
import doctorsReducer from './doctors/Doctors.reducer'
import blogReducer from './blogs/Blog.reducer';

export default combineReducers ({
   user:userReducer,

   doctors:doctorsReducer,
   blog:blogReducer,
   request:requestReducer,
   appoint:appointReducer,
   doctors:doctorsReducer
})