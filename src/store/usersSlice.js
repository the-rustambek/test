import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getErrorMessage, notify } from "./utils";
 
 const prefix = 'users';
 const usersPrefix = prefix;
 const editUsersPrefix = `${prefix}/posts/:id`;
 const createUsersPrefix = `${prefix}/posts`;
 const deleteUsersPrefix = `${prefix}/posts/:id`;
 const getOneUsersPrefix = `${prefix}/posts/:id`;

const initialState = {
    users: [],
    usersLoading: false,
    usersError: undefined,
    singleUsers: undefined,
    singleUsersLoading: false,
    singleUsersError: undefined,
}

export const fetchUsers = createAsyncThunk(
    prefix,
    async (_, thunkAPI)=>{
        try {
            const {data} = await axios.get("posts")
             return  data;
        } catch (error) {
            console.log(error,"error chiqdi oka")
            const message = getErrorMessage(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const createUsers = createAsyncThunk(
    createUsersPrefix,
    
    async (formData, thunkAPI) => {
        try {
            console.log(formData,"formm")

            const { data } = await axios.post(
                'posts',
                formData,
                {
                    headers: {
                        'Content-Type':  'multipart/form-data' 
                    },
                }
    

             );
            notify('Users was created successfully', 'success');
            return data;
        } catch (e) {
            const message = getErrorMessage(e);
            return thunkAPI.rejectWithValue(message);
        }
    }
);


const usersSlice = createSlice({
    name: prefix,
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
        builder.addCase(createUsers.pending, (state) => {
            state.singleUsersLoading = true;
            state.singleUsersError = undefined;
        });
        builder.addCase(createUsers.fulfilled, (state, action) => {
            state.singleUsersLoading = false;
            state.companies = action.payload;
        });
        builder.addCase(createUsers.rejected, (state, action) => {
            state.singleUsersLoading = false;
            state.singleUsersError = action.payload;
        });
    }
})
export const userActions = usersSlice.actions;
export const userReducer = usersSlice.reducer;