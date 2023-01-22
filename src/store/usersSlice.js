import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getErrorMessage } from "./utils";
 


const users = "users;"
const initialState = {
    users: [],
    usersLoading: false,
    usersError: undefined
}
export const fetchUsers = createAsyncThunk(
    users,
    async (_, thunkAPI)=>{
        try {
            const {data} = await axios.get("posts")
            console.log(data,"dataaa");
            return  data;
        } catch (error) {
            console.log(error,"error chiqdi oka")
            const message = getErrorMessage(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)
const usersSlice = createSlice({
    name: users,
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.usersLoading= true;
            state.usersError = undefined
        });
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.usersLoading= false;
            state.users = action.payload
        });        
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.usersLoading= false;
            state.usersError = action.payload
        });
    }
})
export const userActions = usersSlice.actions;
export const userReducer = usersSlice.reducer;