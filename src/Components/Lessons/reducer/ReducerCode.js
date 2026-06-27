export const ReducerCode = `
import React, { useReducer, useState } from 'react';

const ACTIONS = {
    DO_ADD: "DO_ADD",
    DO_DELETE: "DO_DELETE",
    DO_EDIT: "DO_EDIT",
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "DO_ADD":
            return [...state, action.payload];

        case "DO_DELETE":
            return state.filter(todo => todo.id !== action.payload);

        case "DO_EDIT":
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, name: action.payload.name }
                    : todo
            );

        default:
            return state;
    }
};

const Reducer = () => {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.DO_ADD, payload: { id: Date.now(), name } });
        setName('');
    };

    const handleDelete = (id) => {
        dispatch({ type: ACTIONS.DO_DELETE, payload: id });
    };

    const handleEditSave = (id) => {
        dispatch({ type: ACTIONS.DO_EDIT, payload: { id, name: editText } });
        setEditingId(null);
    };

    return (
        <div className="flex flex-col gap-2">
            <form className="flex gap-6" onSubmit={handleSubmit}>
                <input
                    className="border border-black p-5 rounded-lg"
                    type="text"
                    placeholder="write what you need TO DO"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <button
                    type="submit" className="border border-black p-5 rounded-lg"
                >
                    add
                </button>
            </form>

            <ul>
                {todos.map(e => (
                    <li key={e.id} className="flex gap-6">
                        {editingId === e.id ? (
                            <>
                                <input
                                    value={editText}
                                    onChange={ev => setEditText(ev.target.value)}
                                    autoFocus
                                    className="border border-black p-2 rounded-lg"
                                />
                                <button
                                    onClick={() => handleEditSave(e.id)}
                                >
                                    save
                                </button>
                                <button
                                    onClick={() => setEditingId(null)}
                                >
                                    cancel
                                </button>
                            </>
                        ) : (
                            <>
                                {e.name}
                                <button
                                    onClick={() => handleDelete(e.id)}
                                >
                                    delete
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingId(e.id);
                                        setEditText(e.name);
                                    }}
                                >
                                    edit
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reducer;
`