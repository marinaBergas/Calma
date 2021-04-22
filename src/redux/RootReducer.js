import {combineReducers} from 'redux';
import userReducer from './User/User.reducer'
import doctorsReducer from './doctors/Doctors.reducer'
import blogReducer from './blogs/Blog.reducer';

export default combineReducers ({
   user:userReducer,
   doctors:doctorsReducer,
   blog:blogReducer
})