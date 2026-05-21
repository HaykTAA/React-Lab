const StateCode = `
import React, {useState} from "react";

function TodoUseState() {
    const [title, setTitle] =useState("");
    const [todos, setTodos] = useState([])
    const [id, setId] = useState(null)
    const [error, setError] = useState('')

    return (
        <div className="flex flex-col gap-5 ">
            <div className="flex gap-4">
                <input
                    className="border border-black px-4 h-10 rounded-md"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    className="border border-black px-4 h-10 rounded-md"
                    onClick={() =>  {

                        if (title) {
                            let todo = todos.find(el => el.title.toLowerCase() === title.toLowerCase())

                            if(!todo) {
                                if (id) {
                                    const foundedToDo = todos.find(todo => todo.id === id)
                                    foundedToDo.title = title
                                    setTodos([...todos])

                                } else {
                                    let newTodo = {id: Math.random(), title: title}
                                    setTodos([...todos, newTodo])
                                }
                                setTitle('')
                                setId(null)
                                setError('')
                            } else {
                                setError("This title is already existing")
                            }
                        }
                    }}
                >
                    {
                        id ? 'Save' : 'Add'
                    }
                </button>
            </div>

            <ul className="text-black flex flex-col gap-4">
                {
                    todos.map(el=>{
                        return <li key={el.id} className="flex gap-4">
                            <span>{el.title}</span>
                            <button
                                className="border border-black px-4 h-10 rounded-md text-black"
                                onClick={()=>{
                                    setTodos( todos.filter((t) => t.id !== el.id))
                                }}
                            >
                                delete
                            </button>
                            <button
                                className="border text-black border-black px-4 h-10 rounded-md"
                                onClick={() => {
                                    setTitle(el.title)
                                    setId(el.id)
                                }}
                            >
                                edit
                            </button>
                        </li>
                    })
                }
            </ul>
            {error && <div className="text-red-500">
                {error}
            </div>}


        </div>
    )
}

export default TodoUseState;
`
export default StateCode;