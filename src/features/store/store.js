import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../slice/clickIdSlice';
import { rootReducer } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    counter: counterReducer,
    devTools: process.env.NODE_ENV !== 'production',
});



export default store;