import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const ReduxFrontSlice = createSlice({
    name: "ReduxFrontSlice",
    initialState: {
        todo: []
    },
    reducers:{
        addTodo: (state, action) => {
            state.todo = [...state.todo, action.payload];
        },
        editTodo: (state, action) => {
            const edit = state.todo.find(item => item.id === action.payload.id);
            if (edit) {
                edit.name = action.payload.name;
            }
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(el => el.id !== action.payload);
        }
    }
})
export const {addTodo,editTodo,deleteTodo} = ReduxFrontSlice.actions;
export default ReduxFrontSlice.reducer;