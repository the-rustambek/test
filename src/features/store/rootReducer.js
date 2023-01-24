import { combineReducers } from 'redux';
import { counterReducer } from '../slice/clickIdSlice';
import { userReducer } from '../slice/usersSlice';

export const rootReducer = combineReducers({
    users: userReducer,
    counter: counterReducer
 });