import { combineReducers } from 'redux';
import { counterReducer } from './clickIdSlice';
import { userReducer } from './usersSlice';
 
export const rootReducer = combineReducers({
    users: userReducer,
    counter: counterReducer
 });