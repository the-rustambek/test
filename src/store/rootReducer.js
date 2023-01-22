import { combineReducers } from 'redux';
import { userReducer } from './usersSlice';
 
export const rootReducer = combineReducers({
    users: userReducer
 });