import { useState } from "react"
import PropTypes from 'prop-types';
import useTodo from "../contexts/todoContext";

export default function Todo({ todo }) {
    const [msg, setMsg] = useState(todo.title);
    const {toggleTodo, editTodo, removeTodo} = useTodo();

    function edit(){
        if(todo.editable){
            editTodo(todo.id, {
                ...todo,
                title: msg,
                completed: todo.completed,
                editable: false,
            })
        }else{
            editTodo(todo.id, {
                ...todo,
                editable: true,
            })
        }
    }

    return (
        <div className="flex gap-4 w-full">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
            <input
                type="text"
                className={`w-full py-2 px-4 rounded-lg  ${todo.completed ? `line-through bg-slate-600` : `bg-indigo-300`} `}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!todo.editable}
            />
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg" onClick={edit}>{todo.editable ? "Done" : "Edit"}</button>
            <button className="px-4 py-2 bg-red-700 text-white rounded-lg" onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired,
    }).isRequired,
};