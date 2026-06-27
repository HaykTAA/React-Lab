export const ReduxFrontCode = `
 firstly we make a store component
    import {configureStore} from "@reduxjs/toolkit";
    import ReduxFrontReducer from "./reduxFront/ReduxFrontSlice.jsx";
    const store = configureStore({
    reducer: {
        ReduxFrontReducer
    }
    })
    
    export default store;
 than we putt the "App" component or however it's called in our "Main" component in "Provider" 
    with props called "store"and give hime the name of the firstly made component

import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import store from "./Components/Lessons/redux/store.js";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App/>
  </Provider>
)
    and then make a slice component
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

    and the  component where we gonna use it 
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo,editTodo,deleteTodo} from "./ReduxFrontSlice.jsx";

const ReduxFront = () => {

    const dispatch = useDispatch();
    const {todo} = useSelector((state) => state.ReduxFrontReducer);
    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);
    return (
        <div className='flex gap-6 flex-col'>
            <form
                className='flex gap-6 '
                onSubmit={(e) => {
                    e.preventDefault();
                    if (editId) {
                        dispatch(editTodo({ id: editId, name }));
                        setEditId(null);
                        setName("");
                    } else {
                        dispatch(addTodo({id: Math.random(), name}))
                        setName("")
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

export default ReduxFront;
`