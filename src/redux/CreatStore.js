import {createStore,applyMiddleware} from 'redux';
import  rootReducer from './RootReducer';
import logger from 'redux-logger';


export const middlewares = [logger];
export const store = createStore (rootReducer,applyMiddleware(...middlewares))
