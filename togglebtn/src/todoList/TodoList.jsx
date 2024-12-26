import React, { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [value, setValue] = useState([])

    const handleAdd = (valueParameter) => {
        // get value by input
        setValue([...value, valueParameter])
    }

    //    handle delete opration
    const handleDelete = (key) => {
        // copy value
        let deleteVal = [...value];
        // delete value
        deleteVal.splice(key, 1);
        // update value
        setValue([...deleteVal])
    }
    return (
        <div>
            <h1> TodoList</h1>
            <div className="todo">
                <input type="text"
                    value={todo}
                    placeholder='your text'
                    onChange={(e) => setTodo(e.target.value)}
                />
                <span>
                    <button onClick={() => { handleAdd(todo); setTodo("") }}>Add</button>
                </span>
                <div>
                    {value.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item}
                                    <button onClick={() => { handleDelete(index) }}>
                                        delete
                                    </button>
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList