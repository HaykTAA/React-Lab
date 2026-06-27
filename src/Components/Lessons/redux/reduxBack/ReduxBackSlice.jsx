import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo =  createAsyncThunk(
    "get/ToDo",
    async (_,thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/toDo')
            return response.data;
        }catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)
export const addTodo = createAsyncThunk(
    "Add/Todo",
    async (data,thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3000/toDo', data)
            return response.data;
        }catch (err){
            return thunkAPI.rejectWithValue(err);
        }
    }
)
export const deleteTodo = createAsyncThunk(
    "Delete/Todo",
    async (id,thunkAPI) => {
        try {
             const response = await axios.delete(`http://localhost:3000/toDo/${id}`)
            return response.data
        }catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const editTodo = createAsyncThunk(
    "Edit/Todo",
    async (obj,thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:3000/toDo/${obj.id}`, obj)
            return response.data
        }catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
const ReduxBackSlice = createSlice({
    name: "ReduxBack",
    initialState: {
        todo: [],
        error: "",
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getTodo.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(getTodo.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload
        })
        builder.addCase(getTodo.fulfilled,(state,action) => {
            state.loading = false;
            state.error = ""
            state.todo = action.payload;
        })
        builder.addCase(addTodo.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(addTodo.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload
        })
        builder.addCase(addTodo.fulfilled,(state,action) => {
            state.loading = false;
            state.error = ""
            state.todo = [...state.todo, action.payload]
        })
        builder.addCase(deleteTodo.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(deleteTodo.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload
        })
        builder.addCase(deleteTodo.fulfilled,(state,action) => {
            state.loading = false;
            state.error = ""
            state.todo = state.todo.filter(el => el.id !== action.payload.id)
        })
        builder.addCase(editTodo.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(editTodo.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload
        })
        builder.addCase(editTodo.fulfilled,(state,action) => {
            state.loading = false;
            state.error = ""
            const editing = state.todo.find(el => el.id === action.payload.id)
            editing.name = action.payload.name
        })
    }
})
export default ReduxBackSlice.reducer;