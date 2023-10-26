import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            completed: false,
            editable: false,
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id, todo) => {},
    editTodo: (id, todo) => {},
});

export const TodoProvider = todoContext.Provider;

export default function useTodo() { return useContext(todoContext);}
