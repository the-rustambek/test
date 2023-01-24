import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {value: 0};

const clickIdSlice = createSlice({
    name: "clickId",
    initialState: initialCounterState,
    reducers: {
        increment(state, action){
            state.value = action.payload;
        }
    }
})

export const counterAction = clickIdSlice.actions;
export const counterReducer=clickIdSlice.reducer;