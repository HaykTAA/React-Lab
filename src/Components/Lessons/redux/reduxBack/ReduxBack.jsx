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