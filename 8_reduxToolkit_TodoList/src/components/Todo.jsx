import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { editTodo, removeTodo, toggleTodo, updateTodo } from "../features/todoSlice";
import { useState } from "react";

export default function Todo({todo}) {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(todo.title)

    const edited = () => {
        if(todo.editable){
            dispatch(updateTodo({
                id: todo.id,
                title: msg,
            }))
        } else {
            dispatch(editTodo(todo.id))
        }
    }

    return (
        <div className="flex gap-4 w-full">
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
            <input
                type="text"
                className={`w-full py-2 px-4 rounded-lg  ${todo.completed ? `line-through bg-slate-600` : `bg-indigo-300`} ${todo.editable ? `` : `focus:border-none focus:outline-none`}`}
                value={msg} onChange={(e) => setMsg(e.target.value)}
                readOnly={!todo.editable}
            />
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg" onClick={edited}>{todo.editable ? "Done" : "Edit"}</button>
            <button className="px-4 py-2 bg-red-700 text-white rounded-lg" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired,
    }).isRequired,
};