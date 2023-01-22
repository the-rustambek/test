import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {value: 0, showCounter: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state, action){
            state.value = state.value + action.payload;
        },
        decrement(state){
            state.value --;
        },
        toggleCounterHandler(state){
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;