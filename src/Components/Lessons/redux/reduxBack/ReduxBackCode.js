export const ReduxBackCode = `
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
             const response = await axios.delete(\`http://localhost:3000/toDo/${"id"}\`) don't use the "" in axios as i did
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
            const response = await axios.put(\`http://localhost:3000/toDo/${"obj.id"}\`, obj) don't use the "" in axios as i did
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


import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo,getTodo,deleteTodo,editTodo} from "./ReduxBackSlice.jsx";

const ReduxBack = () => {

    const dispatch = useDispatch();
    const {todo} = useSelector((state) => state.ReduxBackReducer);
    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);
    useEffect(()=>{
        dispatch(getTodo())
    },[])
    return (
        <div className='flex gap-6 flex-col'>
            <form
                className='flex gap-6 '
                onSubmit={(e) => {
                    e.preventDefault();
                    if (name.trim() !== "") {
                        if (editId) {
                            dispatch(editTodo({ id: editId, name }));
                            setEditId(null);
                            setName("");
                        } else {
                            dispatch(addTodo({name}))
                            setName("")
                        }
                    }
                }}
            >
                <input
                    className="pl-4 border border-black rounded-lg"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    type="submit"
                >
                    {!editId? "add" : "save"}
                </button>
            </form>
            <ul
                className='flex gap-6 flex-col'
            >
                {todo.map((el) => {
                    return (
                        <li
                            className='flex gap-4'
                            key={el.id}
                        >
                            {el.name}
                            <button
                                onClick={() => dispatch(deleteTodo(el.id))}
                            >
                                delete
                            </button>
                            <button
                                onClick={() => {
                                    setName(el.name)
                                    setEditId(el.id)
                                }}
                            >
                                edit
                            </button>

                        </li>

                    )
                })}
            </ul>
        </div>
    );
};

export default ReduxBack;
`