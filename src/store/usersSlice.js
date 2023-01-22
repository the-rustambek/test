import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getErrorMessage, notify } from "./utils";
 
 const prefix = 'users';
 const usersPrefix = prefix;
 const editUsersPrefix = `${prefix}/edit`;
 const createUsersPrefix = `${prefix}/create`;
 const deleteUsersPrefix = `${prefix}/delete`;
 const getOneUsersPrefix = `${prefix}/getOne`;

const initialState = {
    users: [],
    usersLoading: false,
    usersError: undefined,
    singleUsers: undefined,
    singleUsersLoading: false,
    singleUsersError: undefined,
}

export const fetchUsers = createAsyncThunk(
    usersPrefix,
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


export const deleteUsersById = createAsyncThunk(
    deleteUsersPrefix,
    async (id, thunkAPI) => {
        console.log(id,"idddd")
        try {
            const { message } = await axios.delete(
                `posts/${id}`,
             );
            notify('User was deleted  successfully', 'success');
            return message;
        } catch (e) {
            const message = getErrorMessage(e);
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const fetchUsersById = createAsyncThunk(
    getOneUsersPrefix,
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`posts/${id}`);
            return data;
        } catch (e) {
            const message = getErrorMessage(e);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const updateUsersById = createAsyncThunk(
    editUsersPrefix,
    async (options, thunkAPI) => {
        try {
            const { message } = await axios.put(
                `posts/${options.id}`,
                options.formData,
            );
            notify('Users was updated successfully', 'success');
            return message;
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
            state.users = action.payload;
        });
        builder.addCase(createUsers.rejected, (state, action) => {
            state.singleUsersLoading = false;
            state.singleUsersError = action.payload;
        });
        builder.addCase(deleteUsersById.pending, (state) => {
            state.singleUsersLoading = true;
            state.singleUsersError = undefined;
        });
        builder.addCase(deleteUsersById.fulfilled, (state, action) => {
            state.singleUsersLoading = false;
            state.users = action.payload;
        });
        builder.addCase(deleteUsersById.rejected, (state, action) => {
            state.singleUsersLoading = false;
            state.singleUsersError = action.payload;
        });
        
        builder.addCase(updateUsersById.pending, (state) => {
            state.singleUsersLoading = true;
            state.singleUsersError = undefined;
        });
        builder.addCase(updateUsersById.fulfilled, (state, action) => {
            state.singleUsersLoading = false;
            state.users = action.payload;
        });
        builder.addCase(updateUsersById.rejected, (state, action) => {
            state.singleUsersLoading = false;
            state.singleUsersError = action.payload;
        });
        builder.addCase(fetchUsersById.pending, (state) => {
            state.usersLoading = true;
            state.singleUsersError = undefined;
        });
        builder.addCase(fetchUsersById.fulfilled, (state, action) => {
            state.usersLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsersById.rejected, (state, action) => {
            state.usersLoading = false;
            state.singleUsersError = action.payload;
        });
    }
})
export const userActions = usersSlice.actions;
export const userReducer = usersSlice.reducer;